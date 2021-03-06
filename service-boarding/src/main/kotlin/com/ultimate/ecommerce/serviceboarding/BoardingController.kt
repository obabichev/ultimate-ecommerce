package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductResponseDTO
import com.ultimate.ecommerce.serviceboarding.model.Usin
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.slf4j.Logger
import org.springframework.validation.annotation.Validated
import javax.validation.Valid


@RestController
class BoardingController(
    val boardingService: BoardingService
) {

    val logger: Logger = LoggerFactory.getLogger(BoardingController::class.java)

    @PostMapping("/boarding")
    fun registerProduct(@Valid @RequestBody body: RegisterProductRequestDTO): RegisterProductResponseDTO {
        logger.info("Register product: $body")
        val usin = boardingService.importProduct(body)
        return RegisterProductResponseDTO(usin.id)
    }
}