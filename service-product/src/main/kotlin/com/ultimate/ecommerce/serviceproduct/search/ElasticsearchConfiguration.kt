package com.ultimate.ecommerce.serviceproduct.search

import org.elasticsearch.client.RestHighLevelClient
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.elasticsearch.client.ClientConfiguration
import org.springframework.data.elasticsearch.client.RestClients
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate


@Configuration
class ElasticsearchConfiguration : AbstractElasticsearchConfiguration() {

    @Value("\${spring.elasticsearch.rest.uris}")
    private lateinit var url: String

    override fun elasticsearchClient(): RestHighLevelClient {
        return RestClients.create(
            ClientConfiguration
                .create(url)
        ).rest()
    }

    @Bean
    fun elasticRestTemplate(): ElasticsearchRestTemplate {
        return ElasticsearchRestTemplate(elasticsearchClient())
    }
}