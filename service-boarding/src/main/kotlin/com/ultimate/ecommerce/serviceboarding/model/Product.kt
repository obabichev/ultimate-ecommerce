package com.ultimate.ecommerce.serviceboarding.model

import org.springframework.data.annotation.Id
import org.springframework.data.elasticsearch.annotations.Document

@Document(indexName = "product")
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
) {
    companion object {
        fun fromEventProduct(product: com.ultimate.ecommerce.serviceboarding.dto.Product) =
            Product(
                usin = product.usin,
                title = product.title,
                description = product.description,
                attributes = product.attributes,
                images = product.images,
                ratings = product.ratings.map { Rating.fromEventRating(it) },
                sellOptions = product.sellOptions.map { SellOption.fromEventSellOption(it) },
                tag = product.tag
            )
    }
}

data class Rating(
    val rate: Int,
    val amount: Int
) {
    companion object {
        fun fromEventRating(rating: com.ultimate.ecommerce.serviceboarding.dto.Rating) =
            Rating(
                rate = rating.rate,
                amount = rating.amount
            )
    }
}

data class SellOption(
    val price: Long,
    val currency: String,
    val type: String
) {
    companion object {
        fun fromEventSellOption(sellOption: com.ultimate.ecommerce.serviceboarding.dto.SellOption) =
            SellOption(
                price = sellOption.price,
                currency = sellOption.currency,
                type = sellOption.type
            )
    }
}
