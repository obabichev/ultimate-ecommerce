package com.ultimate.ecommerce.serviceproduct.tag

import com.ultimate.ecommerce.serviceproduct.tag.model.MOCK_TAGS
import com.ultimate.ecommerce.serviceproduct.tag.model.Tag
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TagController {
    @GetMapping("/api/service-product/tag")
    fun getTags(): List<Tag> {
        return MOCK_TAGS
    }
}