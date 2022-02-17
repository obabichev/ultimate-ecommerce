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
    val attributes: Map<String, String>,
    @JsonProperty("images")
    val images: List<String>,
    @JsonProperty("ratings")
    val ratings: List<Rating>,
    @JsonProperty("sellOptions")
    val sellOptions: List<SellOption>,
    @JsonProperty("tag")
    val tag: String
)

data class Rating(
    @JsonProperty("rate")
    val rate: Int,
    @JsonProperty("amount")
    val amount: Int
)

data class SellOption(
    @JsonProperty("price")
    val price: Long,
    @JsonProperty("currency")
    val currency: String,
    @JsonProperty("type")
    val type: String
)