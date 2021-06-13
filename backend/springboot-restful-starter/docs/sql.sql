
#核心路段名称表
create table `traffic_road_name` (
	`id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`road_section_name` varchar(200) DEFAULT NULL  COMMENT '路段名称'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into traffic_road_name(road_section_name) values('红垦枢纽_机场互通_杭州方向'),('红垦枢纽_机场互通_杭州方向2');

#核心交通数据宽表
create table `traffic_core_data` (
	`id` int unsigned NOT NULL AUTO_INCREMENT ,
	`road_section_name` varchar(200) NOT NULL COMMENT '路段名称' ,
	`avg_speed` double(10,2)  DEFAULT NULL  COMMENT '平均车速',
	`situation_prediction` double(10,2) DEFAULT NULL  COMMENT '态势预测',
	`congestion_length` double(10,2) DEFAULT NULL  COMMENT '拥堵长度',
	`nums_blue_car` double(10,2) DEFAULT NULL  COMMENT '蓝牌车辆数',
	`nums_yell_car` double(10,2) DEFAULT NULL  COMMENT '黄牌车辆数',
	`avg_headway` double(10,2) DEFAULT NULL  COMMENT '平均车头时距',
	`cart_mix_rate` double(10,2) DEFAULT NULL  COMMENT '大车混入率',
	`service_level` varchar(200)  DEFAULT NULL  COMMENT '服务等级',
	`carbon_monoxide_emissions` double(10,2) DEFAULT NULL  COMMENT '一氧化碳排放量',
	`inhalable_emissions` double(10,2) DEFAULT NULL  COMMENT '可吸入物排放量',
	`nox_emissions` double(10,4) DEFAULT NULL  COMMENT '氮氧化物排放量',
	`meausre_info` varchar(200) DEFAULT NULL  COMMENT '管控举措',
	`V2Xcls`  double(10,2) DEFAULT NULL  COMMENT 'v2xcls',
	`V2X_avg_speed`  double(10,2) DEFAULT NULL  COMMENT 'V2X平均车速',
	`V2X_driven_distance`  double(10,2) DEFAULT NULL  COMMENT 'V2X行驶里程',
	`V2X_avg_headway`  double(10,2) DEFAULT NULL  COMMENT 'V2X平均车头时距',
	`V2X_nox_emissions` double(10,2) DEFAULT NULL  COMMENT 'V2X氮氧化物排放量',
	`VC` double(10,2) DEFAULT NULL  COMMENT 'VC',
	`total` double(10,2) DEFAULT NULL  COMMENT '合计',
	`rec_time`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()  COMMENT '记录时间',
	PRIMARY KEY (`id`,`road_section_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into traffic_core_data ("road_section_name") value('红垦枢纽_机场互通_杭州方向');


#态势预警表

create table `traffic_situation_warning` (
	`id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`rec_road_section_name` varchar(200) DEFAULT NULL  COMMENT '路段名称',
	`nums_rate` double(10,2) DEFAULT NULL  COMMENT '速率',
	`rec_time`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()  COMMENT '记录时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into traffic_situation_warning (rec_road_section_name, nums_rate) values ('红垦枢纽_机场互通_杭州方向', 6300.0), ('红垦枢纽_机场互通_杭州方向2', 6300.0);

#服务质量表

create table `traffic_service_quality` (
	`id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`rec_road_section_name` varchar(200) DEFAULT NULL  COMMENT '路段名称',
	`service_level` varchar(200)  DEFAULT NULL  COMMENT '服务等级',
	`rec_time`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()  COMMENT '记录时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into traffic_service_quality(rec_road_section_name, service_level) values ('红垦枢纽_机场互通_杭州方向', 6300.0), ('红垦枢纽_机场互通_杭州方向2', 6300.0);


#车辆类型表
create table `traffic_onroad_car_detail` (
	`id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`car_id` varchar(50) DEFAULT NULL  COMMENT '车牌',
	`rec_time`  datetime DEFAULT NULL  COMMENT '记录时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 管控措施
create table `traffic_service_todo` (
	`id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`rec_road_section_name` varchar(200) DEFAULT NULL  COMMENT '路段名称',
	`need_todo` varchar(200)  DEFAULT NULL  COMMENT '管控措施',
	`rec_time`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()  COMMENT '记录时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into traffic_service_todo(rec_road_section_name,need_todo) values ('红垦枢纽_机场互通_杭州方向', '垦枢纽_机场互通_杭州方向发生拥堵，建议将限速降低到80km/h');
