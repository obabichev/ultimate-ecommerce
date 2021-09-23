package com.ultimate.ecommerce.serviceproduct.product.repository

import com.ultimate.ecommerce.serviceproduct.product.domain.UserPurchase
import org.springframework.data.mongodb.repository.MongoRepository

interface UserPurchaseRepository : MongoRepository<UserPurchase, String> {
}