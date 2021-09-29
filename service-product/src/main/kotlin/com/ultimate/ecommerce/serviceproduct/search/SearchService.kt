package com.ultimate.ecommerce.serviceproduct.search

import com.ultimate.ecommerce.serviceproduct.search.model.Product
import org.elasticsearch.index.query.QueryBuilders
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate
import org.springframework.data.elasticsearch.core.query.IndexQueryBuilder
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder
import org.springframework.stereotype.Service
import kotlin.streams.toList

@Service
class SearchService(
    private val elasticsearchTemplate: ElasticsearchRestTemplate
) {
    fun searchByText(text: String): List<Product> {

        val query = NativeSearchQueryBuilder()
            .withQuery(QueryBuilders.queryStringQuery(text))
            .build()

        return elasticsearchTemplate.search(query, Product::class.java)
            .get().toList().map { it.content }
    }

    fun getByUsin(usin: String): Product? {
        return elasticsearchTemplate.get(usin, Product::class.java)
    }
}