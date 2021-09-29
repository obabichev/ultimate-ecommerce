package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.model.Usin
import com.ultimate.ecommerce.serviceboarding.model.repository.UsinRepository
import org.springframework.stereotype.Service

@Service
class UsinService(
    private val usinRepository: UsinRepository
) {
    fun generateUniqueUsin(): Usin {
        return usinRepository.save(Usin(""))
    }
}