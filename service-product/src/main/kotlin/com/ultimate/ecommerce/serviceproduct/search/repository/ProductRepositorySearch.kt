package com.ultimate.ecommerce.serviceproduct.search.repository

import com.ultimate.ecommerce.serviceproduct.search.model.Product
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository

interface ProductRepositorySearch : ElasticsearchRepository<Product, String> {
}
