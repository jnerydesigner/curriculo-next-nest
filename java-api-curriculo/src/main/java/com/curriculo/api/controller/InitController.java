package com.curriculo.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class InitController
{
    @RequestMapping("/")
    @ResponseBody
    public String helloBase()
    {
        return "Hello Base";
    }
    @RequestMapping("/hello")
    @ResponseBody
    public String helloWorld()
    {
        return "Hello Word";
    }
}
