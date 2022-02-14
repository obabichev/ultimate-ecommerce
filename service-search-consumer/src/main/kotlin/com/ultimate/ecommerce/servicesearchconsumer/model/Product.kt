package com.ultimate.ecommerce.servicesearchconsumer.model

import org.springframework.data.annotation.Id
import org.springframework.data.elasticsearch.annotations.Document

@Document(indexName = "product")
data class Product(
    @Id
    val usin: String,
    val title: String,
    val description: String,
    val attributes: Map<String, String>,
    val images: List<String>
) {
    companion object {
        fun fromEventProduct(product: com.ultimate.ecommerce.servicesearchconsumer.event.Product) =
            Product(
                usin = product.usin,
                title = product.title,
                description = product.description,
                attributes = product.attributes,
                images = product.images
            )
    }
}