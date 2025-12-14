 // Sample product data with local image paths
        const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Earbuds",
                category: "tech",
                price: 25000,
                image: "https://i.ibb.co/BHV851M3/Untitleddesign-10.webp",
                images: [
                    "https://i.ibb.co/BHV851M3/Untitleddesign-10.webp",
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
                name: "Professional Tool Kit",
                category: "tools",
                price: 65000,
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Complete tool kit for professional and home use. Durable and reliable for all your projects.",
                    rw: "Igikoresho cyuzuye cy'ibikoresho kugirango ukoreshe mu mishinga no murugo. Cyakozwe neza kandi gikora neza."
                },
                features: {
                    en: [
                        "125-piece set",
                        "Durable steel construction",
                        "Portable case",
                        "Lifetime warranty"
                    ],
                    rw: [
                        "Igikoresho cy'ibice 125",
                        "Yakozwe mu cyuma kikomeye",
                        "Igisanduku cyoroshye guhanagura",
                        "Garanti y'ubuzima bwose"
                    ]
                },
                variations: {
                    type: ["Standard", "Premium", "Heavy Duty"]
                },
                badge: "Sale"
            },
            {
                id: 5,
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
                id: 6,
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
            {
                id: 8,
                name: "Gaming Laptop",
                category: ["tech", "devices"],
                price: 450000,
                image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "High-performance gaming laptop with RTX graphics. Perfect for gamers and content creators.",
                    rw: "Laptop y'umukino ifite imikorere myiza kandi ifite RTX graphics. Byiza cyane kuri abakinnyi n'abarema ibirimo."
                },
                features: {
                    en: [
                        "RTX 3060 GPU",
                        "Intel i7 processor",
                        "16GB RAM, 1TB SSD",
                        "144Hz display",
                        "RGB keyboard"
                    ],
                    rw: [
                        "RTX 3060 GPU",
                        "Intel i7 processor",
                        "16GB RAM, 1TB SSD",
                        "Display ya 144Hz",
                        "Mwandiko wa RGB"
                    ]
                },
                variations: {
                    storage: ["512GB SSD", "1TB SSD", "1TB SSD + 1TB HDD"],
                    ram: ["16GB", "32GB"]
                },
                badge: "Premium"
            },
            {
                id: 9,
                name: "Women's Summer Dress",
                category: "clothes",
                price: 22000,
                image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                ],
                description: {
                    en: "Light and comfortable summer dress with floral pattern. Perfect for warm Rwandan weather.",
                    rw: "Ikanzu yoroshye kandi yoroheje y'impeshyi ifite imyambarire y'uburabyo. Byiza cyane kuri ikirere cy'u Rwanda."
                },
                features: {
                    en: [
                        "Lightweight cotton blend",
                        "Floral pattern",
                        "Machine washable",
                        "Available in multiple sizes"
                    ],
                    rw: [
                        "Igipimo cyoroshye cy'ipira",
                        "Imyambarire y'uburabyo",
                        "Koyamba mu mashini",
                        "Bibarwa mu mizingo myinshi"
                    ]
                },
                variations: {
                    color: ["Blue Floral", "Pink Floral", "Yellow Floral", "White"],
                    size: ["XS", "S", "M", "L", "XL"]
                },
                badge: "Trending"
            },
            {
                id: 10,
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
                id: 11,
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
                id: 12,
                name: "Organic Banana Bunch",
                category: "food",
                price: 3000,
                image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                images: [
                    "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                 "https://i.ibb.co/n857gRQn/image.png",
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
            }
        ];
