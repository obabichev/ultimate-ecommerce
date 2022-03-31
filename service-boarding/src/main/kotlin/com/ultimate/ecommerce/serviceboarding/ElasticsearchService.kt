package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.elasticsearch.ProductRepository
import com.ultimate.ecommerce.serviceboarding.model.Product
import org.springframework.stereotype.Service

@Service
class ElasticsearchService(
    val productRepository: ProductRepository
) {
    fun saveProduct(product: Product) {
        productRepository.save(product)
    }
}