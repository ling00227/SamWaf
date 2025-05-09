package wafenginecore

import (
	"SamWaf/innerbean"
	"SamWaf/model/detection"
	"SamWaf/model/wafenginmodel"
	"SamWaf/wafdefenserce"
	"net/http"
	"net/url"
)

/*
*
检测Rce
*/
func (waf *WafEngine) CheckRce(r *http.Request, weblogbean *innerbean.WebLog, formValue url.Values, hostTarget *wafenginmodel.HostSafe, globalHostTarget *wafenginmodel.HostSafe) detection.Result {
	result := detection.Result{
		JumpGuardResult: false,
		IsBlock:         false,
		Title:           "",
		Content:         "",
	}
	isRce, RceName := wafdefenserce.DetermineRCE(weblogbean.URL, weblogbean.COOKIES, weblogbean.POST_FORM)
	if isRce == true {
		weblogbean.RISK_LEVEL = 3
		result.IsBlock = true
		result.Title = "RCE:" + RceName
		result.Content = "请正确访问"
		return result
	}
	return result
}
