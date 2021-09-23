package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Product
import com.ultimate.ecommerce.serviceproduct.product.domain.UserPurchase
import com.ultimate.ecommerce.serviceproduct.product.dto.BuyProductRequestDTO
import com.ultimate.ecommerce.serviceproduct.product.dto.CreateProductRequestDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class ProductController(
    private val productService: ProductService
) {
    @GetMapping("product")
    fun getProducts(): List<Product> = productService.getProducts()

    @GetMapping("product/{id}")
    fun getProduct(@PathVariable id: String): Product? = productService.getProduct(id).orElse(null)

    @PostMapping("product")
    fun createProduct(@RequestBody body: CreateProductRequestDTO): Product = productService.createProduct(body)

    @PostMapping("product/buy")
    fun buyProducts(@RequestBody body: BuyProductRequestDTO): UserPurchase = productService.buyProducts(body)
}