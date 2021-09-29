package com.ultimate.ecommerce.serviceboarding.model

import org.hibernate.annotations.GenericGenerator
import javax.persistence.*

@Entity(name = "usin")
data class Usin(
    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(length = 36, nullable = false, updatable = false)
    val id: String
)
