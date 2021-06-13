package com.neko.seed.csv.controller;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

//@RestController
public class BatchController {

    //JobLauncher 由框架提供
    @Autowired
    JobLauncher jobLauncher;
    // Job  为刚才配置的
    @Autowired
    Job job;

    @GetMapping("/hello")
    public String hello() {

        try {
            JobParameters jobParameters = new JobParametersBuilder()
                    .toJobParameters();
            // 通过调用 JobLauncher 中的 run 方法启动一个批处理
            jobLauncher.run(job, jobParameters);
        } catch (Exception e) {
            e.printStackTrace();
        }


        return "hello world";

    }
}
