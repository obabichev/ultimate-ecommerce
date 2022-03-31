package com.ultimate.ecommerce.serviceboarding.dto

import javax.validation.constraints.NotBlank

data class UpdateProductRequestDTO(
    @field:NotBlank(message = "usin is mandatory")
    val usin: String,

    @field:NotBlank(message = "Name is mandatory")
    val title: String,

    @field:NotBlank
    val description: String,

//    @field:NotBlank
    val attributes: Map<String, String>,

//    @field:NotBlank
    val images: List<String>,

    val ratings: List<Rating>,

    val sellOptions: List<SellOption>,

    val tag: String
) {

}