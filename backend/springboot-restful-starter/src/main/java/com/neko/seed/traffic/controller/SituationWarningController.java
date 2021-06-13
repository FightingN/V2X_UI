package com.neko.seed.traffic.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neko.seed.base.entity.Result;
import com.neko.seed.traffic.entity.ServiceQuality;
import com.neko.seed.traffic.entity.SituationWarning;
import com.neko.seed.traffic.service.ServiceQualityService;
import com.neko.seed.traffic.service.SituationWarningService;
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
 * @since 2021-06-10
 */
@RestController
@RequestMapping("/traffic/situation-warning")
public class SituationWarningController {

    @Autowired
    private SituationWarningService situationWarningServiceImpl;

    @GetMapping("/{name}")
    public Result listAll(@PathVariable String name) {
        QueryWrapper<SituationWarning> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(SituationWarning::getRecRoadSectionName, name)
                .orderByDesc(SituationWarning::getRecTime);
        List<SituationWarning> list = situationWarningServiceImpl.list(wrapper);
        return new Result().success(list);
    }


    @GetMapping("")
    public Result listAll2(String roadname) {

        if (StringUtils.isEmpty(roadname)) {
            QueryWrapper<SituationWarning> wrapper = new QueryWrapper<>();
            wrapper.lambda().orderByDesc(SituationWarning::getRecTime);
            List<SituationWarning> list = situationWarningServiceImpl.list();
            return new Result().success(list);
        }

        QueryWrapper<SituationWarning> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(SituationWarning::getRecRoadSectionName, roadname)
                .orderByDesc(SituationWarning::getRecTime);
        List<SituationWarning> list = situationWarningServiceImpl.list(wrapper);
        return new Result().success(list);
    }
}
