package com.ultimate.ecommerce.serviceproduct.product.domain

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Product(
    @Id
    @JsonSerialize(using = ToStringSerializer::class)
    val id: ObjectId = ObjectId.get(),

    val title: String,

    val price: Long,

    val currency: String,

    val technicalDetails: Map<String, String>,

    val store: Store,

    val amount: Int
)

