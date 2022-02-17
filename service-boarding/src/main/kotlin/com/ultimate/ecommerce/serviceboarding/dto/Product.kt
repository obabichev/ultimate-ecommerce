package com.ultimate.ecommerce.serviceboarding.dto

data class Product(
    val usin: String,
    val title: String,
    val description: String,
    val attributes: Map<String, String>,
    val images: List<String>,
    val ratings: List<Rating>,
    val sellOptions: List<SellOption>,
    val tag: String
)
