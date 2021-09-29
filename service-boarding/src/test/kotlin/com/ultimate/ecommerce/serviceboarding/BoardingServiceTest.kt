package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.dto.Product
import com.ultimate.ecommerce.serviceboarding.dto.RegisterProductRequestDTO
import com.ultimate.ecommerce.serviceboarding.model.Usin
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.BDDMockito.given
import org.mockito.BDDMockito.verify
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
class BoardingServiceTest {

    private val usinMock = Usin("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")

    @Mock
    private lateinit var usinService: UsinService

    @Mock
    private lateinit var kafkaService: KafkaService

    @Test
    fun `boardingService sends product with generated usin to kafka`() {
        given(usinService.generateUniqueUsin()).willReturn(usinMock)

        BoardingService(usinService, kafkaService)
            .importProduct(RegisterProductRequestDTO("title-test", "description-test", emptyMap()))

        Mockito.verify(kafkaService)
            .sendProductRegisteredEvent(Product(usinMock.id, "title-test", "description-test", emptyMap()))
    }
}