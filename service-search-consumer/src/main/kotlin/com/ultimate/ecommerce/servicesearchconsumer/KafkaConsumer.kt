package com.ultimate.ecommerce.servicesearchconsumer

import com.ultimate.ecommerce.servicesearchconsumer.event.ProductRegisteredEvent
import com.ultimate.ecommerce.servicesearchconsumer.model.Product
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Service

@Service
class KafkaConsumer(
    val elasticsearchService: ElasticsearchService
) {
    val logger: Logger = LoggerFactory.getLogger(KafkaConsumer::class.java)

    @KafkaListener(topics = ["boarding.catalog-item.out"])
//    fun consume(message: String) {
    fun consume(event: ProductRegisteredEvent) {
        logger.info("Message from kafka received: $event")
        elasticsearchService.saveProduct(Product.fromEventProduct(event.product))
    }

}