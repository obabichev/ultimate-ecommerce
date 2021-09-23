package com.ultimate.ecommerce.serviceproduct.product.dto

data class CreateProductRequestDTO(
    val title: String,

    val price: Long,

    val currency: String,

    val technicalDetails: Map<String, String>,

    val storeId: String,

    val amount: Int
)