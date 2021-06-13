package com.neko.seed.traffic.service;

import com.neko.seed.traffic.entity.CoreData;
import com.baomidou.mybatisplus.extension.service.IService;
import com.neko.seed.traffic.entity.RoadName;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author Li Jinhui
 * @since 2021-06-10
 */
public interface CoreDataService extends IService<CoreData> {

    CoreData getDataByName(String name);

    List<CoreData> getDataListByName(String name);

    List<CoreData> topRate();

}
