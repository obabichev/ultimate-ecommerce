package com.ultimate.ecommerce.serviceproduct.product

import com.ultimate.ecommerce.serviceproduct.product.domain.Product
import com.ultimate.ecommerce.serviceproduct.product.domain.Store
import com.ultimate.ecommerce.serviceproduct.product.dto.BuyProductRequestDTO
import com.ultimate.ecommerce.serviceproduct.product.exception.NotEnoughProductsToBut
import com.ultimate.ecommerce.serviceproduct.product.repository.ProductRepository
import com.ultimate.ecommerce.serviceproduct.product.repository.UserPurchaseRepository
import com.ultimate.ecommerce.serviceproduct.user.UserService
import com.ultimate.ecommerce.serviceproduct.user.domain.User
import org.bson.types.ObjectId
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.ArgumentMatchers.any
import org.mockito.BDDMockito.given
import org.mockito.BDDMockito.verify
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import java.util.*

@SpringBootTest
class ProductServiceTest {

    lateinit var productService: ProductServiceImpl

    @MockBean
    lateinit var productRepository: ProductRepository

    @MockBean
    lateinit var userPurchaseRepository: UserPurchaseRepository

    @MockBean
    lateinit var storeService: StoreService

    @MockBean
    lateinit var userService: UserService

    val mockUser = User(
        id = ObjectId.get(),
        username = "test-user-name"
    )

    val mockProduct = Product(
        id = ObjectId.get(),
        title = "test-product-title",
        price = 10,
        currency = "EUR",
        amount = 100,
        store = Store(
            id = ObjectId.get(),
            name = "test-store"
        ),
        technicalDetails = mapOf(Pair("color", "red"))
    )

    @BeforeEach
    fun setUp() {
        productService = ProductServiceImpl(productRepository, userPurchaseRepository, storeService, userService)

        given(userService.getUserById(mockUser.id.toString()))
            .willReturn(Optional.of(mockUser))
        given(productRepository.findById(mockProduct.id.toString()))
            .willReturn(Optional.of(mockProduct))
    }

    @Test
    fun `when user buys products then related entities updated in database`() {
        val dto = BuyProductRequestDTO(
            userId = mockUser.id.toString(),
            productId = mockProduct.id.toString(),
            amount = 3
        )

        given(userPurchaseRepository.save(any()))
            .will { it.arguments[0] }

        productService.buyProducts(dto)

        verify(productRepository).save(mockProduct.copy(amount = 97))

        // TODO how to check for partial match (id is different for every new entity)
        // TODO can I verify with predicate instead of const object
//        verify(userPurchaseRepository).save(
//            UserPurchase(
//                userId = mockUser.id,
//                amount = dto.amount,
//                product = UserPurchase.PurchasedProduct.fromEntities(mockProduct)
//            )
//        )
    }

    @Test
    fun `user can not buy too many products`() {
        val dto = BuyProductRequestDTO(
            userId = mockUser.id.toString(),
            productId = mockProduct.id.toString(),
            amount = 1000
        )

        assertThrows<NotEnoughProductsToBut> {
            productService.buyProducts(dto)
        }
    }
}