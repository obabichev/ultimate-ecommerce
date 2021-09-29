package com.ultimate.ecommerce.serviceboarding.kafka

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class KafkaProperties {
    @Value("\${spring.kafka.bootstrap-servers}")
    lateinit var bootstrapServers: String

    @Value("\$spring.kafka.consumer.group-id")
    lateinit var groupId: String

    @Value("\$spring.kafka.consumer.key-deserializer")
    lateinit var keyDeserializer: String

    @Value("\$spring.kafka.consumer.value-deserializer")
    lateinit var valueDeserializer: String

    @Value("\$spring.kafka.consumer.properties.spring.json.trusted.packages")
    lateinit var trustedPackages: String
}