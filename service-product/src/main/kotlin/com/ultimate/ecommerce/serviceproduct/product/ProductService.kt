package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Product
import com.ultimate.ecommerce.serviceproduct.product.domain.UserPurchase
import com.ultimate.ecommerce.serviceproduct.product.dto.BuyProductRequestDTO
import com.ultimate.ecommerce.serviceproduct.product.dto.CreateProductRequestDTO
import java.util.*

interface ProductService {
    fun getProducts(): List<Product>

    fun getProduct(id: String): Optional<Product>

    fun createProduct(dto: CreateProductRequestDTO): Product

    fun buyProducts(dto: BuyProductRequestDTO): UserPurchase
}
