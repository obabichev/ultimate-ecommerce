package com.ultimate.ecommerce.serviceboarding.dto

import javax.validation.constraints.NotBlank


data class RegisterProductRequestDTO(
    @field:NotBlank
    val title: String,

    val description: String,

    val attributes: Map<String, String>,

    val images: List<String>
)
