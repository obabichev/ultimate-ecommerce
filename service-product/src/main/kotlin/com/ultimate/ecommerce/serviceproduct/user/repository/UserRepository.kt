package com.ultimate.ecommerce.serviceproduct.user.repository

import com.ultimate.ecommerce.serviceproduct.user.domain.User
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository : MongoRepository<User, String> {
    fun findOneByUsername(username: String): User?
}