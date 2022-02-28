package com.ultimate.ecommerce.serviceproduct.search

import com.ultimate.ecommerce.serviceproduct.search.model.Product
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class SearchController(
    private val searchService: SearchService
) {
    @GetMapping("/api/service-product/search")
    fun searchProducts(@RequestParam text: String, @RequestParam tag: String): List<Product> {
        return searchService.searchByText("$text $tag")
    }

    @GetMapping("/api/service-product/search/{usin}")
    fun getProduct(@PathVariable usin: String): Product? {
        return searchService.getByUsin(usin)
    }
}
