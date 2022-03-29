package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductResponseDTO
import com.ultimate.ecommerce.serviceboarding.model.Usin
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.BDDMockito.given
import org.assertj.core.api.BDDAssertions.then
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.json.JacksonTester
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc

@ExtendWith(SpringExtension::class)
@AutoConfigureJsonTesters
@WebMvcTest(BoardingController::class)
class BoardingControllerTest {

    @MockBean
    private lateinit var boardingService: BoardingService

    @Autowired
    private lateinit var mvc: MockMvc

    @Autowired
    private lateinit var jsonRequestRegisterProduct: JacksonTester<RegisterProductRequestDTO>

    @Autowired
    private lateinit var jsonResponseRegisterProduct: JacksonTester<RegisterProductResponseDTO>

//    @Test
//    fun `registerProduct post enpoint returns usin for registered product`() {
//        val requestDTO = RegisterProductRequestDTO(
//            "title-test", "description-test",
//            mapOf(Pair("param", "value"))
//        )
//
//        val usin = Usin("id-usin-test")
//
//        given(boardingService.importProduct(requestDTO)).willReturn(usin)
//
//        val response = mvc.perform(
//            post("/boarding").contentType(MediaType.APPLICATION_JSON)
//                .content(jsonRequestRegisterProduct.write(requestDTO).json)
//        ).andReturn().response
//
//        then(response.status).isEqualTo(HttpStatus.OK.value())
//        then(response.contentAsString).isEqualTo(
//            jsonResponseRegisterProduct.write(
//                RegisterProductResponseDTO(usin.id)
//            ).json
//        )
//    }

//    @Test
//    fun `registerProduct post return error in the case of empty title`() {
//        val requestDTO = RegisterProductRequestDTO(
//            "", "description-test",
//            mapOf(Pair("param", "value"))
//        )
//
//        val response = mvc.perform(
//            post("/boarding").contentType(MediaType.APPLICATION_JSON)
//                .content(jsonRequestRegisterProduct.write(requestDTO).json)
//        ).andReturn().response
//
//        then(response.status).isEqualTo(HttpStatus.BAD_REQUEST.value())
//    }
}