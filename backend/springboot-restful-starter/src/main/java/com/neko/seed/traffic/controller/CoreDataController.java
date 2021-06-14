package com.neko.seed.traffic.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neko.seed.base.entity.Result;
import com.neko.seed.traffic.entity.CoreData;
import com.neko.seed.traffic.entity.RoadName;
import com.neko.seed.traffic.service.CoreDataService;
import com.neko.seed.traffic.service.RoadNameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author Li Jinhui
 * @since 2021-06-10
 */
@RestController
@RequestMapping("/traffic/core-data")
public class CoreDataController {


    @Autowired
    private CoreDataService coreDataServiceImpl;

    @Autowired
    private RoadNameService roadNameServiceImpl;


    @GetMapping("/{name}")
    public Result hello(@PathVariable String name) {
        Objects.requireNonNull(name, "路段明细明细信息，路段名称不能为空");

        System.out.println("name--->" + name);
        CoreData one = coreDataServiceImpl.getDataByName(name);
        return new Result().success(one);
    }

    @GetMapping("")
    public Result hello2(String roadname) {
        Objects.requireNonNull(roadname, "路段明细明细信息，路段名称不能为空");

        System.out.println("name--->" + roadname);
        CoreData one = coreDataServiceImpl.getDataByName(roadname);
        return new Result().success(one);
    }


    /**
     * 登陆接口
     */
    @GetMapping("/{name}/all")
    public Result all(@PathVariable String name) {
        Objects.requireNonNull(name, "路段明细明细信息，路段名称不能为空");
        List<CoreData> dataListByName = coreDataServiceImpl.getDataListByName(name);
        return new Result().success(dataListByName);
    }

    @GetMapping("/all")
    public Result all2(String roadname) {
        Objects.requireNonNull(roadname, "路段明细明细信息，路段名称不能为空");
        List<CoreData> dataListByName = coreDataServiceImpl.getDataListByName(roadname);
        return new Result().success(dataListByName);
    }

    @GetMapping("/topRate")
    public Result topRate() {
        return new Result().success(coreDataServiceImpl.topRate());
    }

    @GetMapping("/roads")
    public Result roadNames() {
        List<RoadName> roads = roadNameServiceImpl.roads();
        List<String> roadNames = new ArrayList<String>();
        roads.stream()
                .forEach(r -> {
                    roadNames.add(r.getRoadSectionName());
                });
        return new Result().success(roadNames);
    }


    @PostMapping("/cars-rate")
    public Result cars() {

        return new Result().success("todo");
    }
}