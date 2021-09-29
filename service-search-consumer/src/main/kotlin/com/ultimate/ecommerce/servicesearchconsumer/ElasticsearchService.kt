package com.ultimate.ecommerce.servicesearchconsumer

import com.ultimate.ecommerce.servicesearchconsumer.elasticsearch.ProductRepository
import com.ultimate.ecommerce.servicesearchconsumer.model.Product
import org.springframework.stereotype.Service

@Service
class ElasticsearchService(
    val productRepository: ProductRepository
) {
    fun saveProduct(product: Product) {
        productRepository.save(product)
    }
}