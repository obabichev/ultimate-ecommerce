package com.ultimate.ecommerce.servicesearchconsumer.kafka

import com.ultimate.ecommerce.servicesearchconsumer.event.ProductRegisteredEvent
import org.apache.kafka.clients.consumer.ConsumerConfig
import org.apache.kafka.common.serialization.StringDeserializer
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory
import org.springframework.kafka.core.DefaultKafkaConsumerFactory
import org.springframework.kafka.listener.ErrorHandler
import org.springframework.kafka.support.serializer.JsonDeserializer

@Configuration
class KafkaConsumerConfiguration(
    private val kafkaProperties: KafkaProperties
) {
    val logger: Logger = LoggerFactory.getLogger(KafkaConsumerConfiguration::class.java)

    @Bean
    fun consumerFactory(): DefaultKafkaConsumerFactory<String, ProductRegisteredEvent> {
        val props: MutableMap<String, Any> = HashMap()
        props[ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG] = kafkaProperties.bootstrapServers
        props[ConsumerConfig.GROUP_ID_CONFIG] = kafkaProperties.groupId
        props[ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG] = 100
        props[ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG] = 15000
        val jsonDeserializer: JsonDeserializer<ProductRegisteredEvent> =
            JsonDeserializer(ProductRegisteredEvent::class.java, false)
        return DefaultKafkaConsumerFactory(props, StringDeserializer(), jsonDeserializer)
    }

    @Bean
    fun kafkaListenerContainerFactory(): ConcurrentKafkaListenerContainerFactory<String, ProductRegisteredEvent> {
        val factory = ConcurrentKafkaListenerContainerFactory<String, ProductRegisteredEvent>()
        factory.consumerFactory = consumerFactory()
        factory.setErrorHandler { thrownException, _ ->
            logger.error(thrownException.message)
            logger.error(thrownException.stackTraceToString())
        }
        return factory
    }

}