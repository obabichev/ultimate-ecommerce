package com.ultimate.ecommerce.serviceproduct

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer
import springfox.documentation.swagger2.annotations.EnableSwagger2

@SpringBootApplication
@EnableResourceServer
class ServiceProductApplication

fun main(args: Array<String>) {
    runApplication<ServiceProductApplication>(*args)
}
