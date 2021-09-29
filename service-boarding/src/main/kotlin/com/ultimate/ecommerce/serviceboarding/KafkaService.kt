package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.Product
import com.ultimate.ecommerce.serviceboarding.event.ProductRegisteredEvent
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.kafka.core.KafkaTemplate
import org.springframework.stereotype.Service

@Service
class KafkaService(
    private val kafkaTemplate: KafkaTemplate<String, ProductRegisteredEvent>
) {
    val logger: Logger = LoggerFactory.getLogger(KafkaService::class.java)

    fun sendProductRegisteredEvent(product: Product) {
        val event = ProductRegisteredEvent(product)
        val response = kafkaTemplate.send("boarding.catalog-item.out", event).get()
        logger.info("Message to kafka sent: usin=${event.product.usin} topic=${response.recordMetadata.topic()}")
    }
}