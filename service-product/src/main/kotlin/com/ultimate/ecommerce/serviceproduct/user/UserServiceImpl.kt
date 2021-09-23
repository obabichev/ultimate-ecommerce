package com.ultimate.ecommerce.serviceproduct.user

import com.ultimate.ecommerce.serviceproduct.user.domain.User
import com.ultimate.ecommerce.serviceproduct.user.repository.UserRepository
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserServiceImpl(
    private val userRepository: UserRepository
) : UserService {
    val logger: Logger = LoggerFactory.getLogger(UserServiceImpl::class.java)

    override fun getUserById(id: String): Optional<User> {
        return userRepository.findById(id)
    }

    override fun getOrCreateUser(username: String): User {
        val user = userRepository.findOneByUsername(username)
        logger.info(user.toString())

        return user ?: userRepository.save(User(username = username))
    }
}