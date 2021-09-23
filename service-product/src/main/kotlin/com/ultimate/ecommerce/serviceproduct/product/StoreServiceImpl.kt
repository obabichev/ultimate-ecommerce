package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Store
import com.ultimate.ecommerce.serviceproduct.product.dto.CreateStoreRequestDTO
import com.ultimate.ecommerce.serviceproduct.product.repository.StoreRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class StoreServiceImpl(
    private val storeRepository: StoreRepository
) : StoreService {
    override fun getStores(): List<Store> {
        return storeRepository.findAll().toList()
    }

    override fun getStoreById(id: String): Optional<Store> {
        return storeRepository.findById(id)
    }

    override fun createStore(createStoreRequest: CreateStoreRequestDTO): Store {
        return storeRepository.save(Store(name = createStoreRequest.name))
    }
}