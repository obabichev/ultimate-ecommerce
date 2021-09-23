package com.ultimate.ecommerce.serviceproduct.product.domain

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import com.ultimate.ecommerce.serviceproduct.user.domain.User
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class UserPurchase(
    @Id
    @JsonSerialize(using = ToStringSerializer::class)
    val id: ObjectId = ObjectId.get(),

    @JsonSerialize(using = ToStringSerializer::class)
    val userId: ObjectId,

    val amount: Int,

    val product: PurchasedProduct,
) {
    data class PurchasedProduct(
        val title: String,

        val price: Long,

        val currency: String,

        @JsonSerialize(using = ToStringSerializer::class)
        val originalProductId: ObjectId
    ) {
        companion object {
            fun fromEntities(product: Product) = PurchasedProduct(
                title = product.title,
                price = product.price,
                currency = product.currency,
                originalProductId = product.id
            )
        }
    }

    companion object {
        fun fromEntities(product: Product, user: User, amount: Int) = UserPurchase(
            userId = user.id,
            amount = amount,
            product = PurchasedProduct.fromEntities(product)
        )
    }
}
