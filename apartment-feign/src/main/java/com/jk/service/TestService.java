package com.jk.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient("springcloud-user-reg")
public interface TestService {

    @RequestMapping("test")
    String testF();
}
