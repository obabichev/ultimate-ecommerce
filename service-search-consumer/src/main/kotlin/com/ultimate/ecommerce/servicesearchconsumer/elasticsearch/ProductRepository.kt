package com.ultimate.ecommerce.servicesearchconsumer.elasticsearch

import com.ultimate.ecommerce.servicesearchconsumer.model.Product
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository

interface ProductRepository : ElasticsearchRepository<Product, String> {
}