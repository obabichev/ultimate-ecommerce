package com.ultimate.ecommerce.serviceproduct.search.model

import org.springframework.data.annotation.Id
import org.springframework.data.elasticsearch.annotations.Document

@Document(indexName = "product", createIndex = false)
data class Product(
    @Id
    val usin: String,
    val title: String,
    val description: String,
    val attributes: Map<String, String>,
    val images: List<String>,
    val ratings: List<Rating>,
    val sellOptions: List<SellOption>,
    val tag: String
)

data class Rating(
    val rate: Int,
    val amount: Int
)

data class SellOption(
    val price: Long,
    val currency: String,
    val type: String
)