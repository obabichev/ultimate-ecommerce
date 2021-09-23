package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Product
import com.ultimate.ecommerce.serviceproduct.product.domain.UserPurchase
import com.ultimate.ecommerce.serviceproduct.product.dto.BuyProductRequestDTO
import com.ultimate.ecommerce.serviceproduct.product.dto.CreateProductRequestDTO
import com.ultimate.ecommerce.serviceproduct.product.exception.NotEnoughProductsToBut
import com.ultimate.ecommerce.serviceproduct.product.repository.ProductRepository
import com.ultimate.ecommerce.serviceproduct.product.repository.UserPurchaseRepository
import com.ultimate.ecommerce.serviceproduct.user.UserController
import com.ultimate.ecommerce.serviceproduct.user.UserService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.lang.RuntimeException
import java.util.*

@Service
class ProductServiceImpl(
    private val productRepository: ProductRepository,
    private val userPurchaseRepository: UserPurchaseRepository,
    private val storeService: StoreService,
    private val userService: UserService
) : ProductService {

    val logger: Logger = LoggerFactory.getLogger(UserController::class.java)

    private fun getProductById(id: String): Optional<Product> {
        return productRepository.findById(id)
    }

    override fun getProducts(): List<Product> {
        return productRepository.findAll()
    }

    override fun getProduct(id: String): Optional<Product> {
        return productRepository.findById(id)
    }

    override fun createProduct(dto: CreateProductRequestDTO): Product {
        val store = storeService.getStoreById(dto.storeId)
        if (store.isEmpty) {
            throw RuntimeException("Store ${dto.storeId} not found")
        }
        return productRepository.save(
            Product(
                title = dto.title,
                price = dto.price,
                currency = dto.currency,
                technicalDetails = dto.technicalDetails,
                store = store.get(),
                amount = dto.amount
            )
        )
    }

    override fun buyProducts(dto: BuyProductRequestDTO): UserPurchase {
        val user = userService.getUserById(dto.userId)
            .orElseThrow { RuntimeException("User ${dto.userId} not found") }

        val product = getProductById(dto.productId)
            .orElseThrow { RuntimeException("Product ${dto.productId} not found") }

        if (product.amount < dto.amount) {
            throw NotEnoughProductsToBut("Product ${dto.productId} has not enough items in inventory")
        }

        productRepository.save(product.copy(amount = product.amount - dto.amount))
        logger.info("In product ${product.id} left ${product.amount} items")

        return userPurchaseRepository.save(UserPurchase.fromEntities(product, user, dto.amount))
    }
}