package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Store
import com.ultimate.ecommerce.serviceproduct.product.dto.CreateStoreRequestDTO
import java.util.*

interface StoreService {
    fun getStores(): List<Store>

    fun getStoreById(id: String): Optional<Store>

    fun createStore(createStoreRequest: CreateStoreRequestDTO): Store
}