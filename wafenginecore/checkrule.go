package wafenginecore

import (
	"SamWaf/common/zlog"
	"SamWaf/global"
	"SamWaf/innerbean"
	"SamWaf/model/detection"
	"SamWaf/model/wafenginmodel"
	"net/http"
	"net/url"
)

/*
*
检测rule
*/
func (waf *WafEngine) CheckRule(r *http.Request, weblogbean *innerbean.WebLog, formValue url.Values, hostTarget *wafenginmodel.HostSafe, globalHostTarget *wafenginmodel.HostSafe) detection.Result {
	result := detection.Result{
		JumpGuardResult: false,
		IsBlock:         false,
		Title:           "",
		Content:         "",
	}
	//规则判断 （局部）
	if hostTarget.Rule != nil {
		if hostTarget.Rule.KnowledgeBase != nil {
			ruleMatchs, err := hostTarget.Rule.Match("MF", weblogbean)
			if err == nil {
				if len(ruleMatchs) > 0 {
					rulestr := ""
					for _, v := range ruleMatchs {
						rulestr = rulestr + v.RuleDescription + ","
					}
					weblogbean.RISK_LEVEL = 1

					result.IsBlock = true
					result.Title = rulestr
					result.Content = "您的访问被阻止触发规则"
					return result
				}
			} else {
				zlog.Debug("规则 ", err)
			}
		}
	}
	//规则判断 （全局网站）
	if waf.HostTarget[global.GWAF_GLOBAL_HOST_NAME].Host.GUARD_STATUS == 1 && waf.HostTarget[global.GWAF_GLOBAL_HOST_NAME].Rule != nil {
		if waf.HostTarget[global.GWAF_GLOBAL_HOST_NAME].Rule.KnowledgeBase != nil {
			ruleMatchs, err := waf.HostTarget[global.GWAF_GLOBAL_HOST_NAME].Rule.Match("MF", weblogbean)
			if err == nil {
				if len(ruleMatchs) > 0 {
					rulestr := ""
					for _, v := range ruleMatchs {
						rulestr = rulestr + v.RuleDescription + ","
					}
					weblogbean.RISK_LEVEL = 1

					result.IsBlock = true
					result.Title = "【全局】" + rulestr
					result.Content = "您的访问被阻止触发规则"
					return result
				}
			} else {
				zlog.Debug("规则 ", err)
			}
		}
	}
	return result
}
