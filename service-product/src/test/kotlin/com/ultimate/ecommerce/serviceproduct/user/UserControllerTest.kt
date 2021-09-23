package com.ultimate.ecommerce.serviceproduct.user

import com.ultimate.ecommerce.serviceproduct.user.domain.User
import com.ultimate.ecommerce.serviceproduct.user.dto.GetOrCreateUserRequestDTO
import org.assertj.core.api.BDDAssertions.then
import org.junit.jupiter.api.Test
import org.mockito.BDDMockito.given
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post

@WebMvcTest(UserController::class)
@AutoConfigureJsonTesters
class UserControllerTest {
    @MockBean
    lateinit var userService: UserService

    @Autowired
    lateinit var mvc: MockMvc

    @Autowired
    lateinit var jsonGetOrCreateUserRequest: JacksonTester<GetOrCreateUserRequestDTO>

    @Autowired
    lateinit var jsonUser: JacksonTester<User>

    @Test
    fun `return user received from service`() {
        val username = "test"

        val dto = GetOrCreateUserRequestDTO(username)

        val expectedResponse = User(username = username)

        given(userService.getOrCreateUser(username))
            .willReturn(expectedResponse)

        val response = mvc.perform(
            post("/api/user/get-or-create").contentType(MediaType.APPLICATION_JSON)
                .content(jsonGetOrCreateUserRequest.write(dto).json)
        ).andReturn().response

        then(response.status).isEqualTo(HttpStatus.OK.value())
        then(response.contentAsString).isEqualTo(jsonUser.write(expectedResponse).json)
    }
}