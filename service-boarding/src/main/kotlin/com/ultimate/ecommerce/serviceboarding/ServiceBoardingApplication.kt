package com.ultimate.ecommerce.serviceboarding

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.HttpStatus
import org.springframework.messaging.handler.annotation.support.MethodArgumentNotValidException
import org.springframework.validation.FieldError
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

val logger: Logger = LoggerFactory.getLogger(ServiceBoardingApplication::class.java)

@SpringBootApplication
class ServiceBoardingApplication

@ControllerAdvice
class ControllerAdviceRequestError : ResponseEntityExceptionHandler() {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidationExceptions(
        ex: MethodArgumentNotValidException
    ): Map<String, String> {
        val errors: MutableMap<String, String> = HashMap()
        ex.bindingResult?.allErrors?.forEach { error ->
            val fieldName = (error as FieldError).field
            val errorMessage: String = error.getDefaultMessage() ?: "Undefined error"
            errors[fieldName] = errorMessage
        }

        logger.info("Handle errors: $errors")

        return errors
    }
}

fun main(args: Array<String>) {
    runApplication<ServiceBoardingApplication>(*args)
}
