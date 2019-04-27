package com.jk.zdg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients
public class SpringcloudFeignZdgApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringcloudFeignZdgApplication.class, args);
        System.out.println("成功  --  springcloud-feign-zdg");
    }

}
