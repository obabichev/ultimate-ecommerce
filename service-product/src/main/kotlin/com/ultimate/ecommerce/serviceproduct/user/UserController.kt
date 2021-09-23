package com.ultimate.ecommerce.serviceproduct.user

import com.ultimate.ecommerce.serviceproduct.user.domain.User
import com.ultimate.ecommerce.serviceproduct.user.dto.GetOrCreateUserRequestDTO
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/user")
class UserController(
    private val userService: UserService
) {
    val logger: Logger = LoggerFactory.getLogger(UserController::class.java)

    @PostMapping("/get-or-create")
    fun getOrCreateUser(@RequestBody body: GetOrCreateUserRequestDTO): ResponseEntity<User> {
        val result = userService.getOrCreateUser(body.username)
        logger.info(result.toString())
        return ResponseEntity.ok(result)
    }
}