package com.neko.seed.traffic.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neko.seed.base.entity.Result;
import com.neko.seed.traffic.entity.ServiceQuality;
import com.neko.seed.traffic.service.ServiceQualityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author Li Jinhui
 * @since 2021-06-11
 */
@RestController
@RequestMapping("/traffic/service-quality")
public class ServiceQualityController {


    @Autowired
    private ServiceQualityService serviceQualityServiceImpl;

    @GetMapping("/{name}")
    public Result listAll(@PathVariable String name) {
        QueryWrapper<ServiceQuality> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(ServiceQuality::getRecRoadSectionName, name)
                .orderByDesc(ServiceQuality::getRecTime);
        List<ServiceQuality> list = serviceQualityServiceImpl.list(wrapper);
        return new Result().success(list);
    }

    @GetMapping("")
    public Result listAll2(String roadname) {
        if (StringUtils.isEmpty(roadname)) {
            QueryWrapper<ServiceQuality> wrapper = new QueryWrapper<>();
            wrapper.lambda().orderByDesc(ServiceQuality::getRecTime);
            List<ServiceQuality> list = serviceQualityServiceImpl.list();
            return new Result().success(list);
        }

        QueryWrapper<ServiceQuality> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(ServiceQuality::getRecRoadSectionName, roadname)
                .orderByDesc(ServiceQuality::getRecTime);
        List<ServiceQuality> list = serviceQualityServiceImpl.list(wrapper);
        return new Result().success(list);
    }
}
