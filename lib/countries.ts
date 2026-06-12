export interface Dish {
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

export interface TouristPlace {
  name: string;
  description: string;
  image: string;
  type: string;
}

export interface Country {
  slug: string;
  name: string;
  nameEn: string;
  capital: string;
  capitalEn: string;
  flag: string;
  currency: string;
  currencyEn: string;
  language: string;
  languageEn: string;
  population: string;
  continent: string;
  lat: number;
  lng: number;
  color: string;
  shortDesc: string;
  shortDescEn: string;
  history: string;
  historyEn: string;
  culture: string;
  cultureEn: string;
  curiosities: string[];
  curiositiesEn: string[];
  gastronomy: Dish[];
  tourism: TouristPlace[];
  gallery: string[];
}

export const countries: Country[] = [
  {
    slug: "espana",
    name: "España",
    nameEn: "Spain",
    capital: "Madrid",
    capitalEn: "Madrid",
    flag: "🇪🇸",
    currency: "Euro (€)",
    currencyEn: "Euro (€)",
    language: "Español",
    languageEn: "Spanish",
    population: "47.8 millones",
    continent: "Europa",
    lat: 40.4168,
    lng: -3.7038,
    color: "#ef4444",
    shortDesc: "Cuna del flamenco, el sol y una de las culturas más vibrantes de Europa.",
    shortDescEn: "Birthplace of flamenco, the sun, and one of Europe's most vibrant cultures.",
    history: "España es una nación con una historia milenaria que abarca desde los íberos y romanos hasta el Imperio Español, la Edad de Oro y la transición democrática. Su diversidad cultural es el resultado de influencias fenicias, griegas, romanas, visigodas, árabes y cristianas.",
    historyEn: "Spain is a nation with a millennia-old history spanning from the Iberians and Romans to the Spanish Empire, the Golden Age, and the democratic transition. Its cultural diversity is the result of Phoenician, Greek, Roman, Visigothic, Arab, and Christian influences.",
    culture: "España destaca por su pasión por el arte, la música y la fiesta. El flamenco, declarado Patrimonio de la Humanidad, representa la esencia emocional del sur. La gastronomía mediterránea, el cine de Almodóvar, el fútbol y las fiestas populares como la Tomatina o San Fermín definen su identidad vibrante y hospitalaria.",
    cultureEn: "Spain stands out for its passion for art, music, and celebration. Flamenco, declared a World Heritage, represents the emotional essence of the south. Mediterranean gastronomy, Almodóvar's cinema, football, and popular festivals like La Tomatina or San Fermín define its vibrant and hospitable identity.",
    curiosities: [
      "España tiene el mayor número de bares por habitante del mundo.",
      "El primer viaje alrededor del mundo fue iniciado por Magallanes y completado por Juan Sebastián Elcano, ambos españoles.",
      "El Prado es uno de los museos más importantes del planeta con obras de Velázquez, Goya y El Greco."
    ],
    curiositiesEn: [
      "Spain has the highest number of bars per inhabitant in the world.",
      "The first trip around the world was started by Magellan and completed by Juan Sebastián Elcano, both Spanish.",
      "The Prado is one of the most important museums on the planet with works by Velázquez, Goya, and El Greco."
    ],
    gastronomy: [
      {
        name: "Paella Valenciana",
        description: "El plato más icónico de España. Arroz con mariscos, pollo, conejo y verduras, cocinado en sartén de hierro.",
        ingredients: ["Arroz bomba", "Gambas", "Pollo", "Conejo", "Judías verdes", "Azafrán"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Jamón Ibérico",
        description: "Tesoro gastronómico español. Jamón curado de cerdos ibéricos alimentados con bellotas.",
        ingredients: ["Jamón ibérico de bellota", "Pan con tomate", "Aceite de oliva"],
        image: "https://picsum.photos/id/312/800/600"
      },
      {
        name: "Gazpacho Andaluz",
        description: "Sopa fría refrescante perfecta para el verano, hecha con tomate, pepino, pimiento y ajo.",
        ingredients: ["Tomate", "Pepino", "Pimiento verde", "Ajo", "Pan", "Aceite de oliva", "Vinagre"],
        image: "https://picsum.photos/id/106/800/600"
      }
    ],
    tourism: [
      {
        name: "Alhambra de Granada",
        description: "Palacio nazarí del siglo XIV, obra maestra del arte islámico en Europa. Un sueño de mármol, fuentes y jardines.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Sagrada Familia",
        description: "Obra maestra inconclusa de Antoni Gaudí en Barcelona. Una catedral orgánica que parece esculpida por la naturaleza.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Arquitectura Moderna"
      },
      {
        name: "Camino de Santiago",
        description: "Ruta de peregrinación milenaria que termina en la Catedral de Santiago de Compostela. Experiencia espiritual y cultural única.",
        image: "https://picsum.photos/id/251/800/600",
        type: "Patrimonio Cultural"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1015/1200/800",
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/29/1200/800",
      "https://picsum.photos/id/160/1200/800"
    ]
  },
  {
    slug: "japon",
    name: "Japón",
    nameEn: "Japan",
    capital: "Tokio",
    capitalEn: "Tokyo",
    flag: "🇯🇵",
    currency: "Yen (¥)",
    currencyEn: "Yen (¥)",
    language: "Japonés",
    languageEn: "Japanese",
    population: "124.5 millones",
    continent: "Asia",
    lat: 35.6762,
    lng: 139.6503,
    color: "#f43f5e",
    shortDesc: "Donde la tradición milenaria se encuentra con la tecnología más avanzada del planeta.",
    shortDescEn: "Where ancient tradition meets the most advanced technology on the planet.",
    history: "Japón es un archipiélago con una historia que se remonta a más de 30.000 años. Desde el período Jōmon hasta el shogunato, la restauración Meiji y la era moderna post-WWII, Japón ha mantenido una identidad única combinando aislamiento selectivo y apertura global.",
    historyEn: "Japan is an archipelago with a history dating back over 30,000 years. From the Jōmon period through the shogunate, the Meiji Restoration, and the modern post-WWII era, Japan has maintained a unique identity by combining selective isolation and global openness.",
    culture: "La cultura japonesa es un equilibrio perfecto entre respeto ancestral (bushido, té, ikebana) y vanguardia pop (anime, J-pop, videojuegos). El concepto de 'wabi-sabi' (belleza de lo imperfecto) y 'omotenashi' (hospitalidad sin igual) definen su alma.",
    cultureEn: "Japanese culture is the perfect balance between ancestral respect (bushido, tea ceremony, ikebana) and pop vanguard (anime, J-pop, video games). The concepts of 'wabi-sabi' (beauty of imperfection) and 'omotenashi' (unparalleled hospitality) define its soul.",
    curiosities: [
      "Japón tiene más de 6.800 islas, pero solo 430 están habitadas.",
      "El 98% de los japoneses se consideran de clase media.",
      "Tokio es la ciudad más grande del mundo por área metropolitana."
    ],
    curiositiesEn: [
      "Japan has more than 6,800 islands, but only 430 are inhabited.",
      "98% of Japanese people consider themselves middle class.",
      "Tokyo is the largest city in the world by metropolitan area."
    ],
    gastronomy: [
      {
        name: "Sushi & Sashimi",
        description: "El arte culinario japonés por excelencia. Pescado fresco cortado a mano sobre arroz avinagrado o solo.",
        ingredients: ["Arroz japonés", "Pescado fresco (atún, salmón, caballa)", "Wasabi", "Salsa de soja", "Jengibre encurtido"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Ramen Tonkotsu",
        description: "Sopa espesa de cerdo con fideos, huevo, nori y chashu. Un plato reconfortante que varía por región.",
        ingredients: ["Fideos ramen", "Caldo de hueso de cerdo", "Huevo marinado", "Cerdo chashu", "Nori", "Cebollino"],
        image: "https://picsum.photos/id/312/800/600"
      },
      {
        name: "Tempura",
        description: "Mariscos y verduras rebozados en masa ligera y fritos hasta quedar crujientes. Originario de Portugal pero perfeccionado en Japón.",
        ingredients: ["Camarones", "Verduras (berenjena, calabacín)", "Harina de trigo", "Huevo", "Agua helada"],
        image: "https://picsum.photos/id/106/800/600"
      }
    ],
    tourism: [
      {
        name: "Monte Fuji",
        description: "El símbolo nacional de Japón. Volcán sagrado y fuente de inspiración artística durante siglos.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Naturaleza Sagrada"
      },
      {
        name: "Kioto - Templos Antiguos",
        description: "Antigua capital imperial con más de 2.000 templos y santuarios. El corazón espiritual de Japón.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Shibuya Crossing",
        description: "El cruce peatonal más famoso del mundo. El pulso vibrante de la Tokio moderna.",
        image: "https://picsum.photos/id/251/800/600",
        type: "Cultura Urbana"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/29/1200/800",
      "https://picsum.photos/id/160/1200/800",
      "https://picsum.photos/id/1018/1200/800"
    ]
  },
  {
    slug: "mexico",
    name: "México",
    nameEn: "Mexico",
    capital: "Ciudad de México",
    capitalEn: "Mexico City",
    flag: "🇲🇽",
    currency: "Peso Mexicano (MXN)",
    currencyEn: "Mexican Peso (MXN)",
    language: "Español",
    languageEn: "Spanish",
    population: "128.5 millones",
    continent: "América",
    lat: 19.4326,
    lng: -99.1332,
    color: "#10b981",
    shortDesc: "Tierra de antiguos imperios, colores vibrantes y la gastronomía más reconocida del mundo.",
    shortDescEn: "Land of ancient empires, vibrant colors, and the most recognized gastronomy in the world.",
    history: "México es el hogar de una de las civilizaciones más avanzadas de la antigüedad: los aztecas, mayas y olmecas. Tras la conquista española en 1521, se convirtió en el centro del virreinato de Nueva España. La independencia en 1821 y la Revolución Mexicana de 1910 forjaron su identidad moderna.",
    historyEn: "Mexico is home to one of the most advanced civilizations of antiquity: the Aztecs, Maya, and Olmecs. After the Spanish conquest in 1521, it became the center of the Viceroyalty of New Spain. Independence in 1821 and the Mexican Revolution of 1910 forged its modern identity.",
    culture: "La cultura mexicana es sinónimo de color, música y tradición. El Día de los Muertos, el mariachi, el tequila, el arte de Frida Kahlo y Diego Rivera, y el cine de oro mexicano son expresiones de un pueblo orgulloso de sus raíces indígenas y su herencia mestiza.",
    cultureEn: "Mexican culture is synonymous with color, music, and tradition. Day of the Dead, mariachi, tequila, the art of Frida Kahlo and Diego Rivera, and the golden age of Mexican cinema are expressions of a people proud of their indigenous roots and mestizo heritage.",
    curiosities: [
      "México tiene 35 sitios declarados Patrimonio de la Humanidad por la UNESCO.",
      "El chocolate fue inventado por los mayas y aztecas hace más de 3.000 años.",
      "México es el país con más hispanohablantes del mundo."
    ],
    curiositiesEn: [
      "Mexico has 35 sites declared World Heritage by UNESCO.",
      "Chocolate was invented by the Maya and Aztecs more than 3,000 years ago.",
      "Mexico is the country with the most Spanish speakers in the world."
    ],
    gastronomy: [
      {
        name: "Tacos al Pastor",
        description: "El taco más famoso del mundo. Tortilla de maíz con carne de cerdo marinada al estilo de los shawarmas libaneses adaptados a México.",
        ingredients: ["Tortilla de maíz", "Carne de cerdo adobada", "Piña", "Cebolla", "Cilantro", "Salsa"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Mole Poblano",
        description: "Salsa compleja con más de 20 ingredientes incluyendo chocolate, chiles y especias. El plato nacional de México.",
        ingredients: ["Chile ancho, mulato y pasilla", "Chocolate mexicano", "Almendras", "Plátano", "Especias"],
        image: "https://picsum.photos/id/312/800/600"
      },
      {
        name: "Ceviche de Camarón",
        description: "Camarones marinados en limón con tomate, cebolla, cilantro y chile. Fresco y explosivo de sabor.",
        ingredients: ["Camarones frescos", "Limón", "Tomate", "Cebolla morada", "Cilantro", "Chile serrano"],
        image: "https://picsum.photos/id/106/800/600"
      }
    ],
    tourism: [
      {
        name: "Chichén Itzá",
        description: "Una de las nuevas 7 maravillas del mundo. Ciudad maya con la pirámide de Kukulkán, observatorio y cenote sagrado.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Cancún & Riviera Maya",
        description: "Playas de arena blanca y agua turquesa. Paraíso caribeño con ruinas mayas y vida nocturna vibrante.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Playas Paradisíacas"
      },
      {
        name: "Ciudad de México - Centro Histórico",
        description: "El corazón cultural de América Latina. Zócalo, Palacio Nacional, Catedral y el Museo Frida Kahlo.",
        image: "https://picsum.photos/id/251/800/600",
        type: "Cultura Urbana"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/29/1200/800",
      "https://picsum.photos/id/160/1200/800",
      "https://picsum.photos/id/1018/1200/800"
    ]
  },
  {
    slug: "italia",
    name: "Italia",
    nameEn: "Italy",
    capital: "Roma",
    capitalEn: "Rome",
    flag: "🇮🇹",
    currency: "Euro (€)",
    currencyEn: "Euro (€)",
    language: "Italiano",
    languageEn: "Italian",
    population: "58.9 millones",
    continent: "Europa",
    lat: 41.9028,
    lng: 12.4964,
    color: "#14b8a6",
    shortDesc: "Cuna del Imperio Romano, el Renacimiento y la gastronomía más amada del mundo.",
    shortDescEn: "Cradle of the Roman Empire, the Renaissance, and the world's most beloved cuisine.",
    history: "Italia es la cuna de la civilización occidental moderna. Desde el Imperio Romano, pasando por el Renacimiento (con figuras como Leonardo, Miguel Ángel y Dante), hasta la unificación en 1861, Italia ha sido epicentro cultural, artístico y político de Europa.",
    historyEn: "Italy is the cradle of modern Western civilization. From the Roman Empire, through the Renaissance (with figures like Leonardo, Michelangelo, and Dante), to unification in 1861, Italy has been the cultural, artistic, and political epicenter of Europe.",
    culture: "La cultura italiana es sinónimo de arte, moda, diseño y pasión. El Renacimiento, la ópera, el cine neorrealista, la moda (Gucci, Prada, Armani) y la 'dolce vita' definen su identidad. La familia y la comida son pilares fundamentales de la sociedad italiana.",
    cultureEn: "Italian culture is synonymous with art, fashion, design, and passion. The Renaissance, opera, neorealist cinema, fashion (Gucci, Prada, Armani), and 'la dolce vita' define its identity. Family and food are fundamental pillars of Italian society.",
    curiosities: [
      "Italia tiene más sitios declarados Patrimonio de la Humanidad por la UNESCO que cualquier otro país.",
      "El Coliseo de Roma es una de las siete maravillas del mundo moderno.",
      "Italia es el mayor productor de vino del mundo."
    ],
    curiositiesEn: [
      "Italy has more UNESCO World Heritage sites than any other country.",
      "The Colosseum in Rome is one of the Seven Wonders of the Modern World.",
      "Italy is the world's largest wine producer."
    ],
    gastronomy: [
      {
        name: "Pizza Margherita",
        description: "La pizza original de Nápoles. Simple pero perfecta: tomate San Marzano, mozzarella de búfala y albahaca fresca.",
        ingredients: ["Masa de pizza", "Tomate San Marzano", "Mozzarella de búfala", "Albahaca fresca", "Aceite de oliva"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Pasta Carbonara",
        description: "Plato romano icónico. Espaguetis con guanciale, huevo, pecorino romano y pimienta negra.",
        ingredients: ["Espaguetis", "Guanciale (o panceta)", "Huevo", "Pecorino romano", "Pimienta negra"],
        image: "https://picsum.photos/id/312/800/600"
      }
    ],
    tourism: [
      {
        name: "Coliseo de Roma",
        description: "El anfiteatro más grande del mundo romano. Símbolo eterno de la grandeza de Roma.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Toscana - Cinque Terre",
        description: "Pueblos coloridos en acantilados junto al mar. Uno de los paisajes más bellos de Italia.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Paisaje Natural"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/160/1200/800"
    ]
  },
  {
    slug: "china",
    name: "China",
    nameEn: "China",
    capital: "Pekín",
    capitalEn: "Beijing",
    flag: "🇨🇳",
    currency: "Yuan (¥)",
    currencyEn: "Renminbi (¥)",
    language: "Mandarín",
    languageEn: "Mandarin",
    population: "1.41 mil millones",
    continent: "Asia",
    lat: 39.9042,
    lng: 116.4074,
    color: "#ef4444",
    shortDesc: "La civilización más antigua continua del mundo y la segunda economía más grande del planeta.",
    shortDescEn: "The world's oldest continuous civilization and the second largest economy on the planet.",
    history: "China tiene una de las historias más largas y continuas del mundo, con más de 5.000 años. Desde las dinastías antiguas (Xia, Shang, Zhou), pasando por la Gran Muralla, la Ruta de la Seda, hasta la Revolución de 1949 y la apertura económica de Deng Xiaoping.",
    historyEn: "China has one of the longest and most continuous histories in the world, spanning over 5,000 years. From the ancient dynasties (Xia, Shang, Zhou), through the Great Wall, the Silk Road, to the 1949 Revolution and Deng Xiaoping's economic opening.",
    culture: "La cultura china es profunda y diversa. El confucianismo, taoísmo y budismo influyen fuertemente en la sociedad. La caligrafía, la ópera de Pekín, las artes marciales, la medicina tradicional y la cocina regional (una de las más variadas del mundo) son pilares de su identidad.",
    cultureEn: "Chinese culture is deep and diverse. Confucianism, Taoism, and Buddhism strongly influence society. Calligraphy, Beijing opera, martial arts, traditional medicine, and regional cuisine (one of the most varied in the world) are pillars of its identity.",
    curiosities: [
      "La Gran Muralla China es la estructura hecha por el hombre más larga del mundo.",
      "China tiene la población más grande del mundo.",
      "El papel, la pólvora, la brújula y la imprenta fueron inventados en China."
    ],
    curiositiesEn: [
      "The Great Wall of China is the longest man-made structure in the world.",
      "China has the largest population in the world.",
      "Paper, gunpowder, the compass, and printing were invented in China."
    ],
    gastronomy: [
      {
        name: "Pato Pekinés",
        description: "Plato imperial icónico. Pato crujiente servido con tortitas, cebollino y salsa hoisin.",
        ingredients: ["Pato", "Tortitas chinas", "Cebollino", "Pepino", "Salsa hoisin"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Dim Sum",
        description: "Variedad de pequeños platos al vapor o fritos, típicos de la cocina cantonesa. Perfectos para compartir.",
        ingredients: ["Har gow (camarón)", "Siu mai (cerdo)", "Char siu bao", "Cheung fun"],
        image: "https://picsum.photos/id/312/800/600"
      }
    ],
    tourism: [
      {
        name: "Gran Muralla China",
        description: "Una de las siete maravillas del mundo moderno. Se extiende por más de 21.000 km.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Ciudad Prohibida",
        description: "Palacio imperial en Pekín. El complejo de palacios antiguos más grande del mundo.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Patrimonio UNESCO"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/160/1200/800"
    ]
  },
  {
    slug: "peru",
    name: "Perú",
    nameEn: "Peru",
    capital: "Lima",
    capitalEn: "Lima",
    flag: "🇵🇪",
    currency: "Sol Peruano (PEN)",
    currencyEn: "Peruvian Sol (PEN)",
    language: "Español",
    languageEn: "Spanish",
    population: "34.4 millones",
    continent: "América",
    lat: -12.0464,
    lng: -77.0428,
    color: "#f97316",
    shortDesc: "Cuna del Imperio Inca y uno de los países con mayor diversidad cultural y natural del mundo.",
    shortDescEn: "Cradle of the Inca Empire and one of the countries with the greatest cultural and natural diversity in the world.",
    history: "Perú fue el centro del Imperio Inca, la civilización precolombina más grande de América. Tras la conquista española en 1532, se convirtió en el virreinato más rico de Sudamérica. La independencia en 1821 y el redescubrimiento de Machu Picchu en 1911 marcaron su historia moderna.",
    historyEn: "Peru was the center of the Inca Empire, the largest pre-Columbian civilization in the Americas. After the Spanish conquest in 1532, it became the richest viceroyalty in South America. Independence in 1821 and the rediscovery of Machu Picchu in 1911 marked its modern history.",
    culture: "La cultura peruana es una fusión única de tradiciones indígenas, españolas, africanas y asiáticas. La gastronomía peruana es considerada una de las mejores del mundo. El folclore, la música andina, los textiles y las celebraciones como el Inti Raymi son expresiones de su rica identidad.",
    cultureEn: "Peruvian culture is a unique fusion of indigenous, Spanish, African, and Asian traditions. Peruvian gastronomy is considered one of the best in the world. Folklore, Andean music, textiles, and celebrations like Inti Raymi are expressions of its rich identity.",
    curiosities: [
      "Machu Picchu es una de las siete maravillas del mundo moderno.",
      "Perú tiene 3 regiones naturales: costa, sierra y selva.",
      "El español que se habla en Perú es considerado uno de los más claros del mundo hispano."
    ],
    curiositiesEn: [
      "Machu Picchu is one of the Seven Wonders of the Modern World.",
      "Peru has 3 natural regions: coast, highlands, and jungle.",
      "The Spanish spoken in Peru is considered one of the clearest in the Hispanic world."
    ],
    gastronomy: [
      {
        name: "Ceviche",
        description: "Plato nacional. Pescado fresco marinado en limón con cebolla, cilantro y ají. Origen precolombino.",
        ingredients: ["Pescado fresco", "Limón", "Cebolla morada", "Cilantro", "Ají limo", "Camote"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Lomo Saltado",
        description: "Fusión chino-peruana. Tiras de carne salteadas con tomate, cebolla y papas fritas.",
        ingredients: ["Lomo fino", "Tomate", "Cebolla", "Papas fritas", "Sillao", "Vinagre"],
        image: "https://picsum.photos/id/312/800/600"
      }
    ],
    tourism: [
      {
        name: "Machu Picchu",
        description: "Ciudadela inca en lo alto de los Andes. Una de las maravillas arqueológicas más impresionantes del mundo.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Líneas de Nazca",
        description: "Geoglifos gigantes en el desierto. Misteriosas figuras visibles solo desde el aire.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Patrimonio UNESCO"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/160/1200/800"
    ]
  },
  {
    slug: "india",
    name: "India",
    nameEn: "India",
    capital: "Nueva Delhi",
    capitalEn: "New Delhi",
    flag: "🇮🇳",
    currency: "Rupia India (INR)",
    currencyEn: "Indian Rupee (INR)",
    language: "Hindi / Inglés",
    languageEn: "Hindi / English",
    population: "1.44 mil millones",
    continent: "Asia",
    lat: 28.6139,
    lng: 77.209,
    color: "#8b5cf6",
    shortDesc: "La democracia más grande del mundo y una de las civilizaciones más antiguas y diversas del planeta.",
    shortDescEn: "The world's largest democracy and one of the oldest and most diverse civilizations on the planet.",
    history: "India es una de las civilizaciones más antiguas del mundo, con más de 5.000 años de historia. Desde el Valle del Indo, pasando por los imperios Maurya y Gupta, el período mogol, hasta la independencia en 1947 liderada por Gandhi.",
    historyEn: "India is one of the oldest civilizations in the world, with over 5,000 years of history. From the Indus Valley, through the Maurya and Gupta empires, the Mughal period, to independence in 1947 led by Gandhi.",
    culture: "La cultura india es increíblemente diversa. El hinduismo, el budismo, el jainismo y el sijismo nacieron aquí. El yoga, la meditación, el Bollywood, la música clásica, la danza y una gastronomía regional extremadamente variada definen su identidad vibrante.",
    cultureEn: "Indian culture is incredibly diverse. Hinduism, Buddhism, Jainism, and Sikhism were born here. Yoga, meditation, Bollywood, classical music, dance, and an extremely varied regional cuisine define its vibrant identity.",
    curiosities: [
      "India es el país con mayor número de lenguas habladas del mundo.",
      "El Taj Mahal es considerado una de las siete maravillas del mundo moderno.",
      "India es el mayor productor de leche del mundo."
    ],
    curiositiesEn: [
      "India is the country with the highest number of spoken languages in the world.",
      "The Taj Mahal is considered one of the Seven Wonders of the Modern World.",
      "India is the world's largest milk producer."
    ],
    gastronomy: [
      {
        name: "Butter Chicken",
        description: "Pollo en salsa cremosa de tomate y especias. Uno de los platos más populares de la cocina india.",
        ingredients: ["Pollo", "Tomate", "Crema", "Mantequilla", "Especias (garam masala, cúrcurma)"],
        image: "https://picsum.photos/id/292/800/600"
      },
      {
        name: "Biryani",
        description: "Arroz basmati con carne o vegetales, especias y hierbas. Plato festivo originario de la cocina mogol.",
        ingredients: ["Arroz basmati", "Carne o vegetales", "Yogur", "Especias", "Cebolla frita"],
        image: "https://picsum.photos/id/312/800/600"
      }
    ],
    tourism: [
      {
        name: "Taj Mahal",
        description: "Mausoleo de mármol blanco construido por el emperador Shah Jahan. Símbolo del amor eterno.",
        image: "https://picsum.photos/id/1016/800/600",
        type: "Patrimonio UNESCO"
      },
      {
        name: "Jaipur - La Ciudad Rosa",
        description: "Capital de Rajasthan. Famosa por sus palacios, fuerte y arquitectura rosa característica.",
        image: "https://picsum.photos/id/160/800/600",
        type: "Patrimonio Cultural"
      }
    ],
    gallery: [
      "https://picsum.photos/id/1005/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/160/1200/800"
    ]
  },
  {
    slug: "brasil",