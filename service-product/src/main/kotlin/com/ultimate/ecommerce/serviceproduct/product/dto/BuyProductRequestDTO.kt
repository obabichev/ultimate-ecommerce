package com.ultimate.ecommerce.serviceproduct.product.dto

data class BuyProductRequestDTO(
    val userId: String,
    val productId: String,
    val amount: Int
)
