package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Store
import com.ultimate.ecommerce.serviceproduct.product.dto.CreateStoreRequestDTO
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class StoreController(
    private val storeService: StoreService
) {
    @GetMapping("store")
    fun getStores(): List<Store> = storeService.getStores()

    @PostMapping("store")
    fun createStore(@RequestBody body: CreateStoreRequestDTO): Store = storeService.createStore(body)
}