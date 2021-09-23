package com.ultimate.ecommerce.serviceproduct.user

import com.ultimate.ecommerce.serviceproduct.user.domain.User
import com.ultimate.ecommerce.serviceproduct.user.repository.UserRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.ArgumentMatchers.any
import org.mockito.BDDMockito.*
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean

@SpringBootTest
class UserServiceTest {

    @MockBean
    lateinit var userRepository: UserRepository

    lateinit var service: UserService

    @BeforeEach
    fun setupTest() {
        service = UserServiceImpl(userRepository)
    }

    @Test
    fun `when user is found in database then it is returned from findOneByUsername`() {
        val mockUser = User(username = "test")

        given(userRepository.findOneByUsername("test"))
            .willReturn(mockUser)

        val user = service.getOrCreateUser("test")

        assertThat(user).isEqualTo(mockUser)
    }

    @Test
    fun `when user is not found in database then new user is created`() {
        val mockUser = User(username = "test")

        given(userRepository.findOneByUsername("test"))
            .willReturn(null)
        given(userRepository.save(any()))
            .willReturn(mockUser)

        val user = service.getOrCreateUser("test")

        verify(userRepository).save(any())
        assertThat(user).isEqualTo(mockUser)
    }
}