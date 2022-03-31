package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.Product
import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.dto.UpdateProductRequestDTO
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
            images = dto.images,
            ratings = dto.ratings,
            sellOptions = dto.sellOptions,
            tag = dto.tag
        )
        kafkaService.sendProductRegisteredEvent(product)
        return usin
    }

    fun updateProduct(dto: UpdateProductRequestDTO): Usin {
        val product = Product(
            usin = dto.usin,
            title = dto.title,
            description = dto.description,
            attributes = dto.attributes,
            images = dto.images,
            ratings = dto.ratings,
            sellOptions = dto.sellOptions,
            tag = dto.tag
        )
        kafkaService.sendProductRegisteredEvent(product)
        return Usin(product.usin)
    }
}