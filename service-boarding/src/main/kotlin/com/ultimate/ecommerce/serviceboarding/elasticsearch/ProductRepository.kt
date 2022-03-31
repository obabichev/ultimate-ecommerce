package com.ultimate.ecommerce.serviceboarding.elasticsearch

import com.ultimate.ecommerce.serviceboarding.model.Product
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository

interface ProductRepository : ElasticsearchRepository<Product, String> {
}