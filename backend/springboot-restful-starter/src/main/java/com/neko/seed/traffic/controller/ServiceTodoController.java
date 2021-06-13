package com.neko.seed.traffic.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neko.seed.base.entity.Result;
import com.neko.seed.traffic.entity.ServiceTodo;
import com.neko.seed.traffic.entity.SituationWarning;
import com.neko.seed.traffic.service.IServiceTodoService;
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
 * @since 2021-06-11
 */
@RestController
@RequestMapping("/traffic/service-todo")
public class ServiceTodoController {

    @Autowired
    private IServiceTodoService serviceTodoServiceImpl;


    @GetMapping("/{name}")
    public Result listAll(@PathVariable String name) {
        QueryWrapper<ServiceTodo> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(ServiceTodo::getRecRoadSectionName, name)
                .orderByDesc(ServiceTodo::getRecTime);
        List<ServiceTodo> list = serviceTodoServiceImpl.list(wrapper);
        return new Result().success(list);
    }

    @GetMapping("")
    public Result listAll2(String roadname) {

        if (StringUtils.isEmpty(roadname)) {
            QueryWrapper<ServiceTodo> wrapper = new QueryWrapper<>();
            wrapper.lambda().orderByDesc(ServiceTodo::getRecTime);
            List<ServiceTodo> list = serviceTodoServiceImpl.list();
            return new Result().success(list);
        }
        QueryWrapper<ServiceTodo> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(ServiceTodo::getRecRoadSectionName, roadname)
                .orderByDesc(ServiceTodo::getRecTime);
        List<ServiceTodo> list = serviceTodoServiceImpl.list(wrapper);
        return new Result().success(list);
    }

}
