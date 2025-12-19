// EASY PRODUCT MANAGEMENT SYSTEM - database.js

// ============================================
// HELPER FUNCTIONS (Put these at the TOP)
// ============================================

// Auto-generate next product ID
function getNextProductId() {
    if (products.length === 0) return 1;
    return Math.max(...products.map(p => p.id)) + 1;
}

// Easy function to add new products
function addProduct(productData) {
    const newProduct = {
        id: getNextProductId(),
        ...productData
    };
    products.push(newProduct);
    console.log(`✅ Product added: ${newProduct.name} (ID: ${newProduct.id})`);
    return newProduct;
}

// Function to update existing product
function updateProduct(productId, updates) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], ...updates };
        console.log(`✅ Product updated: ${products[index].name} (ID: ${productId})`);
        return true;
    }
    console.log(`❌ Product not found: ID ${productId}`);
    return false;
}

// Function to remove product
function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        const removed = products.splice(index, 1);
        console.log(`🗑️ Product removed: ${removed[0].name} (ID: ${productId})`);
        return true;
    }
    return false;
}

// ============================================
// PRODUCT TEMPLATE (Copy & Paste for new products)
// ============================================

/*
// TEMPLATE FOR NEW PRODUCTS (Copy this and fill in):
{
    name: "Product Name",
    category: "category", // or ["category1", "category2"]
    price: 10000,
    image: "https://image-url.jpg",
    images: [
        "https://image1.jpg",
        "https://image2.jpg"
    ],
    description: {
        en: "English description",
        rw: "Kinyarwanda description"
    },
    features: {
        en: ["Feature 1", "Feature 2"],
        rw: ["Feature 1 Kinyarwanda", "Feature 2 Kinyarwanda"]
    },
    variations: {
        color: ["Red", "Blue"],
        size: ["S", "M", "L"]
    },
    badge: "New" // Optional: "Bestseller", "New", "Sale", "Trending", "Premium", "Rwandan"
}
*/

// ============================================
// PRODUCT DATABASE (Your existing products)
// ============================================

const products = [
 {
                id: 1,
                name: "Wireless Bluetooth Earbuds",
                category: "tech",
                price: 25000,
                image: "https://i.ibb.co/fV9J0vn0/earpods.png",
                images: [
                    "https://i.ibb.co/fV9J0vn0/earpods.png",
                    "https://i.ibb.co/0jH4n3kk/apple-airpods-3rd-generation-wireless.jpg"
                ],
                description: {
                    en: "Premium wireless earbuds with noise cancellation and 24-hour battery life. Perfect for music lovers and professionals.",
                    rw: "Amasuku atarimo umugozi afite ubushobozi bwo gukumira urusaku kandi afite amasaha 24 y'amashanyarazi. Byiza cyane kuri abakunda muzika n'abakora akazi."
                },
                features: {
                    en: [
                        "Active noise cancellation",
                        "24-hour battery life",
                        "IPX7 water resistance",
                        "Touch controls",
                        "Bluetooth 5.2"
                    ],
                    rw: [
                        "Gukumira urusaku",
                        "Amasaha 24 y'ubuzima bw'amashanyarazi",
                        "Kwirinda amazi IPX7",
                        "Kugenga ukoresheje ukanda",
                        "Bluetooth 5.2"
                    ]
                },
                variations: {
                    color: ["Black", "White", "Blue", "Red"],
                    type: ["Standard", "Pro Version"]
                },
                badge: "Bestseller"
            },
            {
                id: 2,
                name: "Smart Watch Series 5",
                category: ["tech", "devices"],
                price: 85000,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Advanced smartwatch with health monitoring and GPS tracking. Stay connected and healthy.",
                    rw: "Igihe kirebire cya smartwatch gifite ubushakashatsi bw'ubuzima na GPS. Komeza guhuzwa kandi wize."
                },
                features: {
                    en: [
                        "Heart rate monitoring",
                        "GPS tracking",
                        "Water resistant up to 50m",
                        "7-day battery life",
                        "OLED display"
                    ],
                    rw: [
                        "Kureba umuvuduko w'umutima",
                        "GPS yo gukurikirana",
                        "Kwirinda amazi kugeza kuri metero 50",
                        "Iminsi 7 y'ubuzima bw'amashanyarazi",
                        "OLED display"
                    ]
                },
                variations: {
                    color: ["Black", "Silver", "Rose Gold"],
                    size: ["40mm", "44mm"]
                },
                badge: "New"
            },
            {
                id: 3,
                name: "Men's Casual T-Shirt",
                category: "clothes",
                price: 12000,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Comfortable cotton t-shirt perfect for casual wear. Available in multiple colors and sizes.",
                    rw: "T-shirt y'ipira yoroshye cyane kugirango ukoreshe mu minsi yose. Birashoboka mu ibara ryinshi n'imizingo."
                },
                features: {
                    en: [
                        "100% premium cotton",
                        "Machine washable",
                        "Regular fit",
                        "Available in multiple colors"
                    ],
                    rw: [
                        "100% ipira yiza",
                        "Koyamba mu mashini",
                        "Gukwira neza",
                        "Bibarwa mu ibara ryinshi"
                    ]
                },
                variations: {
                    color: ["Black", "White", "Blue", "Gray", "Green"],
                    size: ["S", "M", "L", "XL", "XXL"]
                }
            },
            {
                id: 4,
                name: "LED Wall Art - Mountain",
                category: "arts",
                price: 45000,
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Beautiful LED backlit wall art with remote-controlled colors. Transform your space with amazing lighting effects.",
                    rw: "Ubugeni bwa LED ku rukuta bwiza bukoresha ibara ryinshi bikoresheje umuyoboro. Hindura aho utuye ukoresheje itara rihebuje."
                },
                features: {
                    en: [
                        "Multiple color modes",
                        "Remote controlled",
                        "Energy efficient LEDs",
                        "Easy to install"
                    ],
                    rw: [
                        "Uburyo bwinshi bw'amabara",
                        "Bikoresheje umuyoboro",
                        "LED zikoresha amashanyarazi make",
                        "Byoroshye gushyiramo"
                    ]
                },
                variations: {
                    size: ["Small (30x40cm)", "Medium (50x70cm)", "Large (70x100cm)"],
                    color: ["Warm White", "Multicolor", "Blue Theme"]
                }
            },
            {
                id: 5,
                name: "Rwandan Crafts - Agaseke Basket",
                category: "crafts",
                price: 18000,
                image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Traditional Rwandan hand-woven Agaseke basket. Beautiful craftsmanship representing Rwandan culture.",
                    rw: "Agaseke k'umuco Rwandais cyahanzwe n'abantu. Ubuhanga bwiza bwerekana umuco w'u Rwanda."
                },
                features: {
                    en: [
                        "Hand-woven by local artisans",
                        "Natural materials",
                        "Traditional Rwandan design",
                        "Durable and practical"
                    ],
                    rw: [
                        "Cyahanzwe n'abahanzi bo mu gihugu",
                        "Ibikoresho by'ikirimwa",
                        "Imiterere y'umuco w'u Rwanda",
                        "Bikomeye kandi bikora neza"
                    ]
                },
                variations: {
                    size: ["Small", "Medium", "Large"],
                    color: ["Natural", "Colored", "Patterned"]
                },
                badge: "Rwandan"
            },
            {
                id: 7,
                name: "Fresh Avocados (Pack of 5)",
                category: "food",
                price: 5000,
                image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Fresh, ripe avocados perfect for salads and guacamole. Grown in Rwandan farms.",
                    rw: "Avoka nziza, ziribwa neza kugirango ukoreshe mu salade na guacamole. Byaribye mu mirima yo mu Rwanda."
                },
                features: {
                    en: [
                        "Organically grown in Rwanda",
                        "Rich in nutrients",
                        "Perfectly ripe",
                        "Pack of 5 medium-sized avocados"
                    ],
                    rw: [
                        "Byaribye mu buryo bw'ikirimwa mu Rwanda",
                        "Bifite ibiribwa byinshi",
                        "Ziribwa neza",
                        "Igipande cya 5 cy'avoka"
                    ]
                },
                variations: {
                    type: ["Regular", "Organic", "Large Size"],
                    ripeness: ["Ready to eat", "Will ripen in 2-3 days"]
                }
            },
            // {
            //     id: 8,
            //     name: "Gaming Laptop",
            //     category: ["tech", "devices"],
            //     price: 450000,
            //     image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            //     images: [
            //         "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            //     ],
            //     description: {
            //         en: "High-performance gaming laptop with RTX graphics. Perfect for gamers and content creators.",
            //         rw: "Laptop y'umukino ifite imikorere myiza kandi ifite RTX graphics. Byiza cyane kuri abakinnyi n'abarema ibirimo."
            //     },
            //     features: {
            //         en: [
            //             "RTX 3060 GPU",
            //             "Intel i7 processor",
            //             "16GB RAM, 1TB SSD",
            //             "144Hz display",
            //             "RGB keyboard"
            //         ],
            //         rw: [
            //             "RTX 3060 GPU",
            //             "Intel i7 processor",
            //             "16GB RAM, 1TB SSD",
            //             "Display ya 144Hz",
            //             "Mwandiko wa RGB"
            //         ]
            //     },
            //     variations: {
            //         storage: ["512GB SSD", "1TB SSD", "1TB SSD + 1TB HDD"],
            //         ram: ["16GB", "32GB"]
            //     },
            //     badge: "Premium"
            // },
            // {
            //     id: 8,
            //     name: "Women's Summer Dress",
            //     category: "clothes",
            //     price: 22000,
            //     image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            //     images: [
            //         "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            //     ],
            //     description: {
            //         en: "Light and comfortable summer dress with floral pattern. Perfect for warm Rwandan weather.",
            //         rw: "Ikanzu yoroshye kandi yoroheje y'impeshyi ifite imyambarire y'uburabyo. Byiza cyane kuri ikirere cy'u Rwanda."
            //     },
            //     features: {
            //         en: [
            //             "Lightweight cotton blend",
            //             "Floral pattern",
            //             "Machine washable",
            //             "Available in multiple sizes"
            //         ],
            //         rw: [
            //             "Igipimo cyoroshye cy'ipira",
            //             "Imyambarire y'uburabyo",
            //             "Koyamba mu mashini",
            //             "Bibarwa mu mizingo myinshi"
            //         ]
            //     },
            //     variations: {
            //         color: ["Blue Floral", "Pink Floral", "Yellow Floral", "White"],
            //         size: ["XS", "S", "M", "L", "XL"]
            //     },
            //     badge: "Trending"
            // },
            {
                id: 6,
                name: "Cordless Drill Set",
                category: "tools",
                price: 35000,
                image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Powerful cordless drill with multiple attachments and batteries. Essential for home improvements.",
                    rw: "Drill ifite ingufu ntabwo ifite umugozi ifite ibikoresho byinshi na batterie. Byingenzi kugirango ukore imishinga yo murugo."
                },
                features: {
                    en: [
                        "20V lithium-ion battery",
                        "Variable speed control",
                        "Includes 30 drill bits",
                        "2-hour fast charging",
                        "LED work light"
                    ],
                    rw: [
                        "Batterie ya 20V lithium-ion",
                        "Guhindura umuvuduko",
                        "Ifite 30 y'amaboko ya drill",
                        "Kugira amasaha 2 yo kwishyura byihuse",
                        "Itara rya LED ry'akazi"
                    ]
                },
                variations: {
                    type: ["Standard", "Heavy Duty", "Compact"]
                }
            },
            {
                id: 7,
                name: "LED Galaxy Projector",
                category: "arts",
                price: 32000,
                image: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Projector that creates a stunning galaxy effect on walls and ceilings. Perfect for bedrooms and relaxation.",
                    rw: "Projector ikora ibyiza bya galaksi ku rukuta n'ubuso. Byiza cyane mu cyumba cyo kuruhukira."
                },
                features: {
                    en: [
                        "Multiple galaxy patterns",
                        "Remote controlled",
                        "Adjustable rotation speed",
                        "Timer function",
                        "USB powered"
                    ],
                    rw: [
                        "Imyambarire myinshi ya galaksi",
                        "Bikoresheje umuyoboro",
                        "Guhindura umuvuduko w'uruziga",
                        "Umuyoboro w'igihe",
                        "Ikoresha USB"
                    ]
                },
                variations: {
                    color: ["Blue Galaxy", "Multicolor", "Nebula Effect"]
                }
            },
            {
                id: 8,
                name: "Organic Banana Bunch",
                category: "food",
                price: 3000,
                image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                 "https://i.ibb.co/n857gRQn/image.png",
                 "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                 "https://i.ibb.co/yczs5Q7f/images.jpg"
                ],
                description: {
                    en: "Fresh organic bananas, rich in potassium and vitamins. Grown in the fertile lands of Rwanda.",
                    rw: "Ibitoki byiza by'ikirimwa, bifite potasiyumu na vitamin byinshi. Byaribye mu butaka bwiza bwo mu Rwanda."
                },
                features: {
                    en: [
                        "Organically grown in Rwanda",
                        "Rich in potassium",
                        "Perfectly ripe",
                        "Bunch of 6-8 bananas"
                    ],
                    rw: [
                        "Byaribye mu buryo bw'ikirimwa mu Rwanda",
                        "Bifite potasiyumu byinshi",
                        "Biribwa neza",
                        "Igipande cya 6-8 cy'ibitoki"
                    ]
                },
                variations: {
                    type: ["Regular", "Organic", "Plantain"],
                    size: ["Small Bunch", "Medium Bunch", "Large Bunch"]
                }
            },
            {
                id: 9,
                name: "LED Wall Art - Mountain",
                category: "arts",
                price: 45000,
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Beautiful LED backlit wall art with remote-controlled colors. Transform your space with amazing lighting effects.",
                    rw: "Ubugeni bwa LED ku rukuta bwiza bukoresha ibara ryinshi bikoresheje umuyoboro. Hindura aho utuye ukoresheje itara rihebuje."
                },
                features: {
                    en: [
                        "Multiple color modes",
                        "Remote controlled",
                        "Energy efficient LEDs",
                        "Easy to install"
                    ],
                    rw: [
                        "Uburyo bwinshi bw'amabara",
                        "Bikoresheje umuyoboro",
                        "LED zikoresha amashanyarazi make",
                        "Byoroshye gushyiramo"
                    ]
                },
                variations: {
                    size: ["Small (30x40cm)", "Medium (50x70cm)", "Large (70x100cm)"],
                    color: ["Warm White", "Multicolor", "Blue Theme"]
                },
                badge: "Trending"
            },
            {
                id: 10,
                name: "LED Wall Art - Mountain",
                category: "arts",
                price: 45000,
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Beautiful LED backlit wall art with remote-controlled colors. Transform your space with amazing lighting effects.",
                    rw: "Ubugeni bwa LED ku rukuta bwiza bukoresha ibara ryinshi bikoresheje umuyoboro. Hindura aho utuye ukoresheje itara rihebuje."
                },
                features: {
                    en: [
                        "Multiple color modes",
                        "Remote controlled",
                        "Energy efficient LEDs",
                        "Easy to install"
                    ],
                    rw: [
                        "Uburyo bwinshi bw'amabara",
                        "Bikoresheje umuyoboro",
                        "LED zikoresha amashanyarazi make",
                        "Byoroshye gushyiramo"
                    ]
                },
                variations: {
                    size: ["Small (30x40cm)", "Medium (50x70cm)", "Large (70x100cm)"],
                    color: ["Warm White", "Multicolor", "Blue Theme"]
                },
                badge: "Premium"
            },
];

addProduct({
    name: "Adidas Equipment Predator Running Shoes",
    category: ["clothes"],
    price: 85000,
    image: "https://i.ibb.co/tMB2w1Ws/adidas.png",
    images: [
        "https://i.ibb.co/tMB2w1Ws/adidas.pn"
    ],
    description: {
        en: "Premium adidas running shoes with predator technology for maximum grip and comfort. Perfect for athletes and fitness enthusiasts.",
        rw: "Adidas y'amacumu y'iruhande y'ubushobozi bwo kumvikanisha neza kandi ikomeye kuri abakinnyi n'abifuza gukora sport."
    },
    features: {
        en: [
            "Predator rubber outsole for superior grip",
            "Breathable mesh upper",
            "Cloudfoam midsole cushioning",
            "Lightweight design",
            "Available in multiple colors"
        ],
        rw: [
            "Ubusanzwe bwa Predator bwo kumvikanisha neza",
            "Icyerekezo cyo hejuru cyo guhumeka",
            "Cloudfoam yo hagati yo gutanga umutekano",
            "Imyitwarire yoroshye",
            "Birashoboka mu ibara ryinshi"
        ]
    },
    variations: {
        color: ["White/Black", "Black/White", "Blue/White", "Red/Black"],
        size: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"]
    },
    badge: "Premium"
});

addProduct({
    name: "Fanta Orange Mexico",
    category: ["food"],
    price: 1000,
    image: "https://i.ibb.co/cnSvJL8/fanta-mexico.png",
    images: [
        "https://i.ibb.co/cnSvJL8/fanta-mexico.png"
    ],
    description: {
        en: "Single glass bottle of Fanta Orange. This crisp, orange fruit-flavored soft drink is full of fizzy refreshment and deliciousness.",
        rw: "Single glass bottle of Fanta Orange. This crisp, orange fruit-flavored soft drink is full of fizzy refreshment and deliciousness."
    },
    features: {
        en: [
            "Total Fat 0g     0%",
            "Sodium 75mg      3%",
            "Total Carbohydrate 43g     15%",
            "Total Sugars 42g      -",
            "Includes Added Sugars 42g     84%",
            "Protein 0g     -"
        ],
        rw: [
            "Ubusanzwe bwa Predator bwo kumvikanisha neza",
            "Icyerekezo cyo hejuru cyo guhumeka",
            "Cloudfoam yo hagati yo gutanga umutekano",
            "Imyitwarire yoroshye",
            "Birashoboka mu ibara ryinshi"
        ]
    },
    variations: {
        color: ["Orange", "Sprite", "Coke", "Citron"],
        size: ["12 fl oz", "16.9 fl oz"]
    },
    badge: "Premium"
});

addProduct({
    name: "Marble Cake Chocolate",
    category: ["food"],
    price: 3000,
    image: "https://i.ibb.co/KpD1xv8X/Marble-Cake-Chocolate.png",
    images: [
        "https://i.ibb.co/KpD1xv8X/Marble-Cake-Chocolate.png",
        "https://i.ibb.co/1txw1QFx/Chocolate-Cake.png",
        "https://i.ibb.co/4RKdgpc1/vanilla-Cake.png",
        "https://i.ibb.co/MyF296j4/Marble-Cake.png"
    ],
    description: {
        en: "Marble cake is a classic childhood cooking memory. Whether using lurid colours for a psychedelic finish, or just chocolate and vanilla, it's a teatime treat.",
        rw: "Marble cake is a classic childhood cooking memory. Whether using lurid colours for a psychedelic finish, or just chocolate and vanilla, it's a teatime treat."
    },
    features: {
        en: [
            "Marble Cake",
            "Vanilla Cake",
            "Chocolate Cake"
        ],
        rw: [
            "Kake ya Marble",
            "Kake ya Vanilla",
            "Kake ya Shokora"
        ]
    },
    variations: {
        color: ["Marble Cake", "Chocolate",  "White Cake"],
        size: ["500g", "1kg"]
    },
    badge: "New"
});
addProduct({
    name: "GoPro HERO 9 Black Action Camera",
    category: ["tech", "devices"],
    price: 578858,
    image: "https://i.ibb.co/tMrjFCgg/Go-Pro-HERO-9-Black.png",
    images: [
        "https://i.ibb.co/tMrjFCgg/Go-Pro-HERO-9-Black.png",
        " https://i.ibb.co/tpGQtGhg/gopro.png",
        "https://i.ibb.co/1J6nrZVC/gopro-2.png",
        "https://i.ibb.co/VYHGWxMj/gopro-3.png"
    ],
    description: {
        en: "GoPro HERO 9 Black Action Camera with 4K 5.2K video, 20MP sensor, color front screen. Perfect for sports, adventure, and helmet mounting.",
        rw: "GoPro HERO 9 Black Action Camera ifite video ya 4K 5.2K, sensor ya 20MP, ifoto y'imbabare imbere. Byiza cyane kuri sport, adventure, no gukoresha ku mutwe."
    },
    features: {
        en: [
            "5.2K video resolution",
            "20MP image sensor",
            "Touch screen & WiFi support",
            "Electronic Image Stabilization",
            "Interchangeable lens camera",
            "Color front screen display",
            "Helmet mount compatible"
        ],
        rw: [
            "5.2K video resolution",
            "Sensor y'amafoto ya 20MP",
            "Ifoto yo gukoresha & WiFi",
            "Electronic Image Stabilization",
            "Kamera y'igitambaro ryihinduranya",
            "Ifoto y'imbabare imbere",
            "Bishobora gukoreshwa ku mutwe"
        ]
    },
    variations: {
        color: ["Black"],
        resolution: ["5.2K", "4K"],
        "Video Quality": ["4K", "5.2K"],
        "Image Sensor": ["20MP"],
        "Screen Type": ["Color Touch Screen"]
    },
    badge: "Premium"
});
addProduct({
    name: "OEM OLED For Google Pixel 3A LCD Display Touch Digitizer Assembly",
    category: ["tech", "devices"],
    price: 60000,
    image: "https://i.ibb.co/GfCXSLmF/Google-pixel-3a-screen.png",
    images: [
        "https://i.ibb.co/GfCXSLmF/Google-pixel-3a-screen.png",
        "https://i.ibb.co/99s5QNmF/Google-pixel-3a-screen-2.png",
        "https://i.ibb.co/zH2MthWV/Google-pixel-3a-screen-3.png",
        "https://i.ibb.co/N2CLj3Nd/Google-pixel-3a-screen-4.png"
    ],
    description: {
        en: "Original OEM OLED display with touch digitizer assembly for Google Pixel 3A. Complete screen replacement repair kit.",
        rw: "OEM OLED ifoto ryerekana hamwe n'igitambaro cy'ibikoresho byo gukora Pixel 3A ya Google. Ifoto yuzuye yo kuvugurura."
    },
    features: {
        en: [
            "OEM quality OLED display",
            "Touch screen digitizer assembly",
            "Compatible with G020A, G020E, G020B, G020G, G020H",
            "Capacitive touch screen",
            "High-resolution display"
        ],
        rw: [
            "OEM ikwirakwiza OLED",
            "Ifoto y'igitambaro cy'ibikoresho",
            "Bishobora gukoreshwa na G020A, G020E, G020B, G020G, G020H",
            "Ifoto ya capacitive",
            "Ikwirakwiza ry'igihanga cyiza"
        ]
    },
    variations: {
        type: ["LCD & Touch Screen Digitizer"],
        "Touch Screen Type": ["Capacitive Screen"],
        "Material": ["OLED"],
        model: ["G020A", "G020E", "G020B", "G020G", "G020H"]
    },
    badge: "New"
});

/*
// To add more products later, just use:
addProduct({
    name: "New Product Name",
    category: "tech",
    price: 15000,
    image: "image-url.jpg",
    // ... other fields
});

// To update a product:
updateProduct(1, { price: 20000, badge: "Sale" });

// To remove a product:
removeProduct(3);
*/
