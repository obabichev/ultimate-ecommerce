package com.ultimate.ecommerce.serviceproduct.product.repository

import com.ultimate.ecommerce.serviceproduct.product.domain.Store
import org.springframework.data.mongodb.repository.MongoRepository

interface StoreRepository : MongoRepository<Store, String> {
}
