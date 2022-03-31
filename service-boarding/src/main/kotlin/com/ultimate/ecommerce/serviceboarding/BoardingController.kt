package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductResponseDTO
import com.ultimate.ecommerce.serviceboarding.dto.UpdateProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.dto.UpdateProductResponseDTO
import com.ultimate.ecommerce.serviceboarding.model.Usin
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.slf4j.Logger
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.PutMapping
import javax.validation.Valid


@RestController
class BoardingController(
    val boardingService: BoardingService
) {

    val logger: Logger = LoggerFactory.getLogger(BoardingController::class.java)

    @PostMapping("/api/service-boarding/boarding")
    fun registerProduct(@Valid @RequestBody body: RegisterProductRequestDTO): RegisterProductResponseDTO {
        logger.info("Register product: $body")
        val usin = boardingService.importProduct(body)
        return RegisterProductResponseDTO(usin.id)
    }

    @PutMapping("/api/service-boarding/boarding")
    fun updateProduct(@Valid @RequestBody body: UpdateProductRequestDTO): UpdateProductResponseDTO {
        val usin = boardingService.updateProduct(body)
        return UpdateProductResponseDTO(usin.id)
    }
}