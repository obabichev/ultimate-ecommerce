package com.ultimate.ecommerce.serviceproduct

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import springfox.documentation.swagger2.annotations.EnableSwagger2

@SpringBootApplication
class ServiceProductApplication

fun main(args: Array<String>) {
    runApplication<ServiceProductApplication>(*args)
}
