package com.ultimate.ecommerce.servicesearchconsumer.event

import com.fasterxml.jackson.annotation.JsonProperty

data class ProductRegisteredEvent(
    @JsonProperty("product")
    val product: Product
)

data class Product(
    @JsonProperty("usin")
    val usin: String,
    @JsonProperty("title")
    val title: String,
    @JsonProperty("description")
    val description: String,
    @JsonProperty("attributes")
    val attributes: Map<String, String>
)
