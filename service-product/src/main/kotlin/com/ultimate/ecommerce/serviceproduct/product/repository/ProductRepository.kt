package com.ultimate.ecommerce.serviceproduct.product.repository

import com.ultimate.ecommerce.serviceproduct.product.domain.Product
import org.springframework.data.mongodb.repository.MongoRepository

interface ProductRepository : MongoRepository<Product, String> {
}