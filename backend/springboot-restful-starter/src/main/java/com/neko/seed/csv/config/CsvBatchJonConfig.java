package com.neko.seed.csv.config;

import com.neko.seed.traffic.entity.CoreData;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import javax.sql.DataSource;

public class CsvBatchJonConfig {

    // 注入JobBuilderFactory，用来构建job
    @Autowired
    JobBuilderFactory jobBuilderFactory;
    // 注入StepBuilderFactory，用来构建step
    @Autowired
    StepBuilderFactory stepBuilderFactory;

    // 持久化操作----数据源
    @Autowired
    DataSource dataSource;


    // 配置一个ItemReader，即数据的读取逻辑
    @Bean
    @StepScope
    FlatFileItemReader<CoreData> itemReader() {
        // FlatFileItemReader 是一个加载普通文件的 ItemReader
        FlatFileItemReader<CoreData> reader = new FlatFileItemReader<>();
        // 由于data.csv文件第一行是标题，因此通过setLinesToSkip方法设置跳过一行
        reader.setLinesToSkip(2);
        // setResource方法配置data.csv文件的位置
        reader.setResource(new ClassPathResource("子报表.csv"));
        // 通过setLineMapper方法设置每一行的数据信息
        reader.setLineMapper(new DefaultLineMapper<CoreData>() {{
            setLineTokenizer(new DelimitedLineTokenizer() {{
                // setNames方法配置了data.csv文件一共有4列，分别是id、username、以及sex,
                setNames("time", "base_station_name", "integrity", "energy_consumption", "manufactor");
                // 配置列与列之间的间隔符（这里是空格）
                setDelimiter(",");
            }});
            setFieldSetMapper(new BeanWrapperFieldSetMapper() {{
                setTargetType(CoreData.class);
            }});
        }});
        return reader;
    }


    // 配置ItemWriter，即数据的写出逻辑
    @Bean
    JdbcBatchItemWriter jdbcBatchItemWriter() {
        // 使用的JdbcBatchltemWriter则是通过JDBC将数据写出到一个关系型数据库中。
        JdbcBatchItemWriter writer = new JdbcBatchItemWriter();
        // 配置使用的数据源
        writer.setDataSource(dataSource);
        // 配置数据插入SQL，注意占位符的写法是":属性名"
        writer.setSql("insert into test(time,base_station_name,integrity,energy_consumption,manufactor) " +
                "values(:time,:base_station_name,:integrity,:energy_consumption,:manufactor)");

        // 最后通过BeanPropertyItemSqlParameterSourceProvider实例将实体类的属性和SQL中的占位符一一映射
        writer.setItemSqlParameterSourceProvider(
                new BeanPropertyItemSqlParameterSourceProvider<>());
        return writer;
    }

    // 配置一个Step
    @Bean
    Step csvStep() {
        // Step通过stepBuilderFactory进行配置
        return stepBuilderFactory.get("csvStep") //通过get获取一个StepBuilder，参数数Step的name
                .<CoreData, CoreData>chunk(2) //方法的参数2，表示每读取到两条数据就执行一次write操作
                .reader(itemReader()) // 配置reader
                .writer(jdbcBatchItemWriter())// 配置writer
                .build();
    }

    // 配置一个Job
    @Bean
    Job csvJob() {
        // 通过jobBuilderFactory构建一个Job，get方法参数为Job的name
        return jobBuilderFactory.get("csvJob")
                .start(csvStep()) // 配置该Job的Step
                .build();
    }
}
