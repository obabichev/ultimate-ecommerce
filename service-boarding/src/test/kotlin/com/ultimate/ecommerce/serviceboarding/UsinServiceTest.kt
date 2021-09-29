package com.ultimate.ecommerce.serviceboarding

import com.ultimate.ecommerce.serviceboarding.model.Usin
import com.ultimate.ecommerce.serviceboarding.model.repository.UsinRepository
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.ArgumentMatchers.any
import org.mockito.BDDMockito.given
import org.mockito.Mock
import org.mockito.Mockito.verify
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
class UsinServiceTest {

    private val usinMock = Usin("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")

    @Mock
    private lateinit var usinRepository: UsinRepository

    @Test
    fun `generateUniqueUsin create new row in the database`() {
        given(usinRepository.save(any()))
            .willReturn(usinMock)

        UsinService(usinRepository)
            .generateUniqueUsin()

        verify(usinRepository).save(Usin(""))
    }
}