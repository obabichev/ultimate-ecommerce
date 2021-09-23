package com.ultimate.ecommerce.serviceproduct.user

import com.ultimate.ecommerce.serviceproduct.user.domain.User
import java.util.*

interface UserService {
    fun getUserById(id: String): Optional<User>
    fun getOrCreateUser(username: String): User
}