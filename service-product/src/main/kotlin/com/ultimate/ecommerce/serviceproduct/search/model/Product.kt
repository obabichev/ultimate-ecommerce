package com.ultimate.ecommerce.serviceproduct.search.model

import org.springframework.data.annotation.Id
import org.springframework.data.elasticsearch.annotations.Document

@Document(indexName = "product", createIndex = false)
data class Product(
    @Id
    val usin: String,
    val title: String,
    val description: String,
    val attributes: Map<String, String>
)
