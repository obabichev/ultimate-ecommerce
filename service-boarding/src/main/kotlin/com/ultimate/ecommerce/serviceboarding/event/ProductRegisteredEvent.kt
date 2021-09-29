package com.ultimate.ecommerce.serviceboarding.event

import com.ultimate.ecommerce.serviceboarding.dto.Product

data class ProductRegisteredEvent(
    val product: Product
)