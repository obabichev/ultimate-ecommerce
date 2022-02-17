package com.ultimate.ecommerce.serviceproduct.tag.model

data class Tag(
    val key: String,
    val parent: String?,
    val title: String
)

val MOCK_TAGS = listOf(
    Tag("books", null, "Books"),
    Tag("computing-and-internet", "books", "Computing & Internet"),

    Tag("computing-and-internet-databases", "computing-and-internet", "Computing & Internet Databases"),
    Tag("programming-and-web-design", "computing-and-internet", "Programming & Web Design"),

//    Tag("programming-languages", "programming-and-web-design", "Programming Languages"),

    Tag("it-training-and-professions", "computing-and-internet", "IT Training & Professions"),
    Tag("graphics-and-multimedia-software", "computing-and-internet", "Graphics & Multimedia Software"),
    Tag("hardware", "computing-and-internet", "Hardware"),
    Tag("video-game-strategy-guides", "computing-and-internet", "Video Game Strategy Guides"),
    Tag("mac-os-applications", "computing-and-internet", "Mac OS Applications"),
    Tag("unix-and-linux", "computing-and-internet", "Unix & Linux"),
    Tag("business-and-careers", "books", "Business & Careers"),
    Tag("business-finance-and-law-cvs", "business-and-careers", "Business, Finance & Law CVs"),
    Tag("accounting", "business-and-careers", "Accounting"),
    Tag("e-business", "business-and-careers", "E-Business"),
    Tag("professional-finance", "business-and-careers", "Professional Finance")
)
