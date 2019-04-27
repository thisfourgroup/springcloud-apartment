package com.jk.zdg;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@MapperScan("com.jk.zdg.dao")
public class SpringcloudProviderZdgApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringcloudProviderZdgApplication.class, args);
        System.out.println("成功 --  springcloud-provider-zdg");
    }

}
