package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.Product
import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.model.Usin
import org.springframework.stereotype.Service

@Service
class BoardingService(
    private val usinService: UsinService,
    private val kafkaService: KafkaService
) {
    fun importProduct(dto: RegisterProductRequestDTO): Usin {
        val usin = usinService.generateUniqueUsin()
        val product = Product(
            usin = usin.id,
            title = dto.title,
            description = dto.description,
            attributes = dto.attributes,
            images = dto.images
        )
        kafkaService.sendProductRegisteredEvent(product)
        return usin
    }
}