package wafdb

import (
	"SamWaf/common/zlog"
	"gorm.io/gorm"
	"time"
)

/*
*
一些后续补丁
*/
func pathLogSql(db *gorm.DB) {
	// 20241018 创建联合索引 weblog
	startTime := time.Now()

	zlog.Info("ready create log index maybe use a few minutes ")
	err := db.Exec("CREATE INDEX IF NOT EXISTS idx_web_logs_task_flag_time ON web_logs (task_flag, unix_add_time)").Error
	if err != nil {
		panic("failed to create index: idx_web_logs_task_flag_time " + err.Error())
	} else {
		zlog.Info("db", "idx_web_logs_task_flag_time created")
	}
	// 创建联合索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_web_time_tenant_user_code ON web_logs (unix_add_time, tenant_id,user_code)").Error
	if err != nil {
		panic("failed to create index: idx_web_time_tenant_user_code " + err.Error())
	} else {
		zlog.Info("db", "idx_web_time_tenant_user_code created")
	}
	// 详情索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_req_uuid_web_logs ON web_logs (REQ_UUID, tenant_id, user_code)").Error
	if err != nil {
		panic("failed to create index:idx_req_uuid_web_logs " + err.Error())
	} else {
		zlog.Info("db", "idx_unique_req_uuid_web_logs created")
	}
	// 整体索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_tenant_usercode_web_logs ON web_logs ( tenant_id, user_code)").Error
	if err != nil {
		panic("failed to create index: idx_tenant_usercode_web_logs " + err.Error())
	} else {
		zlog.Info("db", "idx_tenant_usercode_web_logs created")
	}

	// 20250123 创建联合索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_web_time_desc_tenant_user_code ON web_logs (unix_add_time desc, tenant_id,user_code)").Error
	if err != nil {
		panic("failed to create index: idx_web_time_desc_tenant_user_code " + err.Error())
	} else {
		zlog.Info("db", "idx_web_time_desc_tenant_user_code created")
	}
	//20250123 建立带IP得
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_web_time_desc_tenant_user_code_ip ON web_logs (unix_add_time desc, tenant_id,user_code,src_ip)").Error
	if err != nil {
		panic("failed to create index: idx_web_time_desc_tenant_user_code_ip " + err.Error())
	} else {
		zlog.Info("db", "idx_web_time_desc_tenant_user_code_ip created")
	}

	// 记录结束时间并计算耗时
	duration := time.Since(startTime)
	zlog.Info("create log index completely", "duration", duration.String())
}
func pathCoreSql(db *gorm.DB) {
	startTime := time.Now()

	zlog.Info("ready create core index maybe use a few minutes ")
	// 20241018 创建联合索引 weblog
	err := db.Exec("UPDATE system_configs SET item_class = 'system' WHERE item_class IS NULL or item_class='' ").Error
	if err != nil {
		panic("failed to system_config :item_class " + err.Error())
	} else {
		zlog.Info("db", "system_config :item_class init successfully")
	}
	// 20241026 是否自动跳转https站点
	err = db.Exec("UPDATE hosts SET auto_jump_http_s=0 WHERE auto_jump_http_s IS NULL ").Error
	if err != nil {
		panic("failed to hosts :auto_jump_https " + err.Error())
	} else {
		zlog.Info("db", "hosts :auto_jump_https init successfully")
	}
	//20241030 初始化一次状态信息
	err = db.Exec("UPDATE hosts SET start_status=0 WHERE start_status IS NULL ").Error
	if err != nil {
		panic("failed to hosts :start_status " + err.Error())
	} else {
		zlog.Info("db", "hosts :start_status init successfully")
	}
	//20241106 创建iptagtag索引
	err = db.Exec("CREATE UNIQUE INDEX IF NOT EXISTS uni_iptags_full ON ip_tags (user_code, tenant_id, ip, ip_tag)").Error
	if err != nil {
		panic("failed to create index : uni_iptags_full " + err.Error())
	} else {
		zlog.Info("db", "uni_iptags_full created")
	}
	// 创建iptag ip索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_iptag_ip ON ip_tags ( user_code, tenant_id, ip)").Error
	if err != nil {
		panic("failed to create index: idx_iptag_ip " + err.Error())
	} else {
		zlog.Info("db", "idx_iptag_ip created")
	}
	//20241209 是否传递后端域名到后端服务器侧
	err = db.Exec("UPDATE hosts SET is_trans_back_domain=0 WHERE is_trans_back_domain IS NULL ").Error
	if err != nil {
		panic("failed to hosts :is_trans_back_domain " + err.Error())
	} else {
		zlog.Info("db", "hosts :is_trans_back_domain init successfully")
	}
	//20250103 初始化一次HTTP Auth Base 状态信息
	err = db.Exec("UPDATE hosts SET is_enable_http_auth_base=0 WHERE is_enable_http_auth_base IS NULL ").Error
	if err != nil {
		panic("failed to hosts :is_enable_http_auth_base " + err.Error())
	} else {
		zlog.Info("db", "hosts :is_enable_http_auth_base init successfully")
	}
	//20250106 初始化一次站点超时状态信息
	err = db.Exec("UPDATE hosts SET response_time_out=60 WHERE response_time_out IS NULL ").Error
	if err != nil {
		panic("failed to hosts :response_time_out " + err.Error())
	} else {
		zlog.Info("db", "hosts :response_time_out init successfully")
	}
	//20250219 初始化敏感词拦截方式和拦截动作
	err = db.Exec("UPDATE sensitives SET check_direction='in',action='deny' WHERE check_direction IS NULL ").Error
	if err != nil {
		panic("failed to sensitives :response_time_out " + err.Error())
	} else {
		zlog.Info("db", "sensitives :response_time_out init successfully")
	}

	//20250307 是否跳过后端https有效性验证
	err = db.Exec("UPDATE hosts SET insecure_skip_verify=0 WHERE insecure_skip_verify IS NULL ").Error
	if err != nil {
		panic("failed to hosts :insecure_skip_verify " + err.Error())
	} else {
		zlog.Info("db", "hosts :insecure_skip_verify init successfully")
	}
	//20250328 cc模式 默认还是现有的
	err = db.Exec("UPDATE anti_ccs SET limit_mode='window' WHERE limit_mode IS NULL ").Error
	if err != nil {
		panic("failed to anti_ccs :limit_mode " + err.Error())
	} else {
		zlog.Info("db", "anti_ccs :limit_mode init successfully")
	}

	//20250401 CC防护IP提取模式，默认为网卡模式
	err = db.Exec("UPDATE anti_ccs SET ip_mode='nic' WHERE ip_mode IS NULL ").Error
	if err != nil {
		panic("failed to anti_ccs :ip_mode " + err.Error())
	} else {
		zlog.Info("db", "anti_ccs :ip_mode init successfully")
	}

	// 记录结束时间并计算耗时
	duration := time.Since(startTime)
	zlog.Info("create core index completely", "duration", duration.String())
}

// 处理统计部分代码
func pathStatsSql(db *gorm.DB) {
	startTime := time.Now()

	zlog.Info("ready create stats index maybe use a few minutes, ")

	// 为stats_days表创建索引
	err := db.Exec("CREATE INDEX IF NOT EXISTS idx_stats_days_lookup ON stats_days (tenant_id, user_code, host_code, type, day)").Error
	if err != nil {
		panic("failed to create index: idx_stats_days_lookup " + err.Error())
	} else {
		zlog.Info("db", "idx_stats_days_lookup created")
	}

	// 为stats_ip_days表创建索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_stats_ip_days_lookup ON stats_ip_days (tenant_id, user_code, host_code, ip, type, day)").Error
	if err != nil {
		panic("failed to create index: idx_stats_ip_days_lookup " + err.Error())
	} else {
		zlog.Info("db", "idx_stats_ip_days_lookup created")
	}

	// 为stats_ip_city_days表创建索引
	err = db.Exec("CREATE INDEX IF NOT EXISTS idx_stats_ip_city_days_lookup ON stats_ip_city_days (tenant_id, user_code, host_code, country, province, city, type, day)").Error
	if err != nil {
		panic("failed to create index: idx_stats_ip_city_days_lookup " + err.Error())
	} else {
		zlog.Info("db", "idx_stats_ip_city_days_lookup created")
	}

	// 记录结束时间并计算耗时
	duration := time.Since(startTime)
	zlog.Info("create stats index completely", "duration", duration.String())
}
