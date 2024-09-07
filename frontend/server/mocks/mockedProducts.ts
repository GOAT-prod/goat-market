interface Products {
  items: Product[];
}

export const mockedProducts: Products = {
  items: [
    {
      id: 1,
      name: "Кроссовки Nike Air Zoom Pegasus 37",
      price: 8990,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 10,
      description: "Удобные кроссовки для бега с мягкой амортизацией.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/107/978/001/593/074/2/100060751803b0.jpg"
      ],
      rating: {
        rate: 4.5,
        feedback_count: 56
      },
      size: ["40", "41", "42", "43", "44"],
      color: ["Черный", "Белый"],
      shop: "Спортмастер"
    },
    {
      id: 2,
      name: "Кроссовки Adidas Ultraboost 21",
      price: 11990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: true,
      purpose: "Для фитнеса",
      discountPercent: 0,
      description: "Кроссовки с технологией Boost для превосходного комфорта.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-57/557/167/644/104/600016994811b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 78
      },
      size: ["41", "42", "43", "44", "45"],
      color: ["Синий", "Серый"],
      shop: "Adidas"
    },
    {
      id: 3,
      name: "Кроссовки Puma RS-X3",
      price: 7490,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 15,
      description: "Стильные и удобные кроссовки для повседневного использования.",
      category: "Кроссовки",
      material: "Текстиль, синтетика",
      images: [
        "https://main-cdn.sbermegamarket.ru/mid9/hlr-system/-13/558/000/477/181/030/600019604418b0.jpg"
      ],
      rating: {
        rate: 4.2,
        feedback_count: 35
      },
      size: ["40", "41", "42"],
      color: ["Черный", "Красный"],
      shop: "Puma"
    },
    {
      id: 4,
      name: "Кроссовки Reebok Nano X1",
      price: 9990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для тренажерного зала",
      discountPercent: 20,
      description: "Универсальные кроссовки для тренировок с высокой прочностью.",
      category: "Кроссовки",
      material: "Синтетика, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-82/840/499/529/133/4/100048828071b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 92
      },
      size: ["39", "40", "41", "42", "43"],
      color: ["Серый", "Черный"],
      shop: "Reebok"
    },
    {
      id: 5,
      name: "Кроссовки Asics Gel-Kayano 27",
      price: 13990,
      clothesType: "Кроссовки",
      brand: "Asics",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 15,
      description: "Кроссовки с гелевой амортизацией для максимального комфорта.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-19/154/389/281/232/6/100058881481b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 85
      },
      size: ["40", "41", "42", "43", "44"],
      color: ["Синий", "Черный"],
      shop: "Asics"
    },
    {
      id: 6,
      name: "Кроссовки Nike Air Max 270",
      price: 11490,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Кроссовки с амортизацией Air Max для комфортной ходьбы.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-93/669/763/322/121/6/600016608814b0.jpg"
      ],
      rating: {
        rate: 4.5,
        feedback_count: 120
      },
      size: ["40", "41", "42", "43"],
      color: ["Белый", "Красный"],
      shop: "Nike"
    },
    {
      id: 7,
      name: "Кроссовки Adidas Yeezy Boost 350 V2",
      price: 21990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 0,
      description: "Культовые кроссовки, созданные в сотрудничестве с Kanye West.",
      category: "Кроссовки",
      material: "Текстиль, синтетика",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/122/042/332/693/074/6/100060756593b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 230
      },
      size: ["41", "42", "43", "44"],
      color: ["Черный", "Серый"],
      shop: "Adidas"
    },
    {
      id: 8,
      name: "Кроссовки New Balance 990v5",
      price: 15990,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Легендарные кроссовки для ежедневного комфорта и стиля.",
      category: "Кроссовки",
      material: "Кожа, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-20/597/764/943/152/4/100064190260b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 145
      },
      size: ["39", "40", "41", "42"],
      color: ["Серый", "Белый"],
      shop: "New Balance"
    },
    {
      id: 9,
      name: "Кроссовки Reebok Classic Leather",
      price: 7990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Классические кожаные кроссовки для повседневного стиля.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/199/976/269/971/192/100068523398b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 112
      },
      size: ["40", "41", "42"],
      color: ["Белый", "Черный"],
      shop: "Reebok"
    },
    {
      id: 10,
      name: "Кроссовки Asics Gel-Nimbus 23",
      price: 13990,
      clothesType: "Кроссовки",
      brand: "Asics",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 0,
      description: "Кроссовки для бега с превосходной амортизацией и поддержкой.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/199/976/366/071/193/100068523399b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 98
      },
      size: ["39", "40", "41", "42"],
      color: ["Синий", "Черный"],
      shop: "Asics"
    },
    {
      id: 11,
      name: "Кроссовки Nike React Infinity Run",
      price: 12990,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: false,
      purpose: "Для бега",
      discountPercent: 15,
      description: "Кроссовки с технологией React для комфортного бега.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-86/005/868/326/143/100063092036b0.jpg"
      ],
      rating: {
        rate: 4.5,
        feedback_count: 76
      },
      size: ["40", "41", "42", "43"],
      color: ["Черный", "Белый"],
      shop: "Nike"
    },
    {
      id: 12,
      name: "Кроссовки Puma Future Rider",
      price: 8490,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Легкие кроссовки для ежедневного использования.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-16/049/596/811/218/203/6/600014808279b0.jpeg"
      ],
      rating: {
        rate: 4.4,
        feedback_count: 82
      },
      size: ["39", "40", "41", "42", "43"],
      color: ["Белый", "Зеленый"],
      shop: "Puma"
    },
    {
      id: 13,
      name: "Кроссовки New Balance 574",
      price: 8990,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Иконные кроссовки для повседневного стиля.",
      category: "Кроссовки",
      material: "Текстиль, замша",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/326/716/812/524/191/100027524320b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 94
      },
      size: ["40", "41", "42"],
      color: ["Серый", "Белый"],
      shop: "New Balance"
    },
    {
      id: 14,
      name: "Кроссовки Adidas ZX 2K Boost",
      price: 12990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Современные кроссовки с амортизацией Boost.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-34/906/986/941/020/40/600017130709b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 120
      },
      size: ["41", "42", "43"],
      color: ["Черный", "Синий"],
      shop: "Adidas"
    },
    {
      id: 15,
      name: "Кроссовки Reebok Zig Kinetica",
      price: 10990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для фитнеса",
      discountPercent: 20,
      description: "Кроссовки с инновационной подошвой для тренировок.",
      category: "Кроссовки",
      material: "Текстиль, синтетика",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-15/588/532/751/151/145/100061662340b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 108
      },
      size: ["40", "41", "42", "43"],
      color: ["Красный", "Черный"],
      shop: "Reebok"
    },
    {
      id: 16,
      name: "Кроссовки Asics Gel-Quantum 360",
      price: 12990,
      clothesType: "Кроссовки",
      brand: "Asics",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 15,
      description: "Кроссовки с гелевой амортизацией для максимального комфорта.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-20/161/527/131/216/2/100066764809b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 97
      },
      size: ["39", "40", "41", "42"],
      color: ["Синий", "Черный"],
      shop: "Asics"
    },
    {
      id: 17,
      name: "Кроссовки Puma RS-X",
      price: 8990,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Стильные кроссовки для города.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-16/049/346/951/218/213/1/600014808284b0.jpeg"
      ],
      rating: {
        rate: 4.5,
        feedback_count: 115
      },
      size: ["40", "41", "42"],
      color: ["Белый", "Черный"],
      shop: "Puma"
    },
    {
      id: 18,
      name: "Кроссовки Reebok Royal Glide",
      price: 6990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Классические кроссовки для ежедневного использования.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/531/684/460/615/191/600018814624b0.jpg"
      ],
      rating: {
        rate: 4.3,
        feedback_count: 104
      },
      size: ["39", "40", "41", "42"],
      color: ["Черный", "Белый"],
      shop: "Reebok"
    },
    {
      id: 19,
      name: "Кроссовки New Balance 997H",
      price: 9490,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Современная версия классических кроссовок 997.",
      category: "Кроссовки",
      material: "Замша, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/mid9/hlr-system/136/643/467/449/151/4/100028398991b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 92
      },
      size: ["40", "41", "42", "43"],
      color: ["Серый", "Синий"],
      shop: "New Balance"
    },
    {
      id: 20,
      name: "Кроссовки Adidas Superstar",
      price: 8490,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 0,
      description: "Легендарные кроссовки с кожаным верхом и фирменными полосками.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-20/319/071/014/110/41/600017130671b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 150
      },
      size: ["40", "41", "42"],
      color: ["Белый", "Черный"],
      shop: "Adidas"
    },
    {
      id: 21,
      name: "Кроссовки Puma Cali",
      price: 7490,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Современные кроссовки в ретро-стиле.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-85/922/261/326/141/6/100063092060b0.jpeg"
      ],
      rating: {
        rate: 4.4,
        feedback_count: 110
      },
      size: ["39", "40", "41", "42", "43"],
      color: ["Белый", "Розовый"],
      shop: "Puma"
    },
    {
      id: 22,
      name: "Кроссовки Reebok Club C 85",
      price: 7990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Классические теннисные кроссовки в современном исполнении.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/597/415/469/121/422/15/100063212369b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 140
      },
      size: ["40", "41", "42"],
      color: ["Белый", "Зеленый"],
      shop: "Reebok"
    },
    {
      id: 23,
      name: "Кроссовки Nike Air Force 1",
      price: 9990,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 0,
      description: "Культовые кроссовки с верхом из натуральной кожи.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/145/099/026/882/515/51/100059584727b0.jpg"
      ],
      rating: {
        rate: 4.9,
        feedback_count: 170
      },
      size: ["40", "41", "42", "43"],
      color: ["Белый", "Черный"],
      shop: "Nike"
    },
    {
      id: 24,
      name: "Кроссовки Adidas NMD_R1",
      price: 11990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Современные кроссовки с амортизацией Boost.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/mid9/hlr-system/-13/754/653/564/151/318/600015917334b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 130
      },
      size: ["41", "42", "43", "44"],
      color: ["Черный", "Серый"],
      shop: "Adidas"
    },
    {
      id: 25,
      name: "Кроссовки Reebok Pump Omni Zone II",
      price: 10990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для баскетбола",
      discountPercent: 15,
      description: "Баскетбольные кроссовки с технологией Pump для идеальной посадки.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-18/745/625/563/151/031/600016400899b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 125
      },
      size: ["40", "41", "42", "43"],
      color: ["Белый", "Синий"],
      shop: "Reebok"
    },
    {
      id: 26,
      name: "Кроссовки New Balance 1080v11",
      price: 12990,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 10,
      description: "Кроссовки с амортизацией Fresh Foam для комфортного бега.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-11/345/475/406/302/20/100056331890b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 110
      },
      size: ["39", "40", "41", "42", "43"],
      color: ["Черный", "Синий"],
      shop: "New Balance"
    },
    {
      id: 27,
      name: "Кроссовки Nike Blazer Mid '77",
      price: 8490,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Классические кроссовки в стиле ретро.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/122/002/276/531/510/18/600016400908b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 130
      },
      size: ["40", "41", "42"],
      color: ["Белый", "Черный"],
      shop: "Nike"
    },
    {
      id: 28,
      name: "Кроссовки Asics Gel-Cumulus 23",
      price: 11990,
      clothesType: "Кроссовки",
      brand: "Asics",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 10,
      description: "Амортизирующие кроссовки для длительных пробежек.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-19/200/382/381/141/43/600014013070b0.jpeg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 98
      },
      size: ["39", "40", "41", "42", "43"],
      color: ["Черный", "Синий"],
      shop: "Asics"
    },
    {
      id: 29,
      name: "Кроссовки Puma Suede Classic",
      price: 7990,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Классические замшевые кроссовки для городского стиля.",
      category: "Кроссовки",
      material: "Замша, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-1/43/63/83/53/63/15/100026321430b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 87
      },
      size: ["40", "41", "42"],
      color: ["Черный", "Зеленый"],
      shop: "Puma"
    },
    {
      id: 30,
      name: "Кроссовки Reebok Question Mid",
      price: 11990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для баскетбола",
      discountPercent: 15,
      description: "Баскетбольные кроссовки с уникальным дизайном.",
      category: "Кроссовки",
      material: "Кожа, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/205/427/160/132/516/23/100067053771b0.JPG"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 115
      },
      size: ["40", "41", "42", "43"],
      color: ["Белый", "Красный"],
      shop: "Reebok"
    },
    {
      id: 31,
      name: "Кроссовки New Balance 5740",
      price: 10490,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Современные кроссовки с ретро-дизайном.",
      category: "Кроссовки",
      material: "Замша, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-11/345/734/876/302/20/100056331884b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 124
      },
      size: ["40", "41", "42", "43"],
      color: ["Серый", "Синий"],
      shop: "New Balance"
    },
    {
      id: 32,
      name: "Кроссовки Nike Air Max 95",
      price: 13490,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Культовые кроссовки с многослойной конструкцией и амортизацией Air.",
      category: "Кроссовки",
      material: "Кожа, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/107/103/734/042/616/34/600017588231b0.jpg"
      ],
      rating: {
        rate: 4.9,
        feedback_count: 165
      },
      size: ["40", "41", "42"],
      color: ["Черный", "Белый"],
      shop: "Nike"
    },
    {
      id: 33,
      name: "Кроссовки Adidas Terrex Swift R2",
      price: 11990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: true,
      purpose: "Для трекинга",
      discountPercent: 10,
      description: "Кроссовки для активного отдыха и походов.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-14/913/546/574/211/011/600017440482b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 132
      },
      size: ["41", "42", "43", "44"],
      color: ["Серый", "Черный"],
      shop: "Adidas"
    },
    {
      id: 34,
      name: "Кроссовки Puma Future Rider Play On",
      price: 7990,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Яркие кроссовки в стиле ретро для города.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-92/959/737/391/923/49/600013420094b0.jpeg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 112
      },
      size: ["40", "41", "42", "43"],
      color: ["Синий", "Красный"],
      shop: "Puma"
    },
    {
      id: 35,
      name: "Кроссовки Nike Air Max 270 React",
      price: 12990,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: false,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Кроссовки с технологией React для максимального комфорта.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-27/287/895/922/211/21/100066347736b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 150
      },
      size: ["41", "42", "43"],
      color: ["Белый", "Черный"],
      shop: "Nike"
    },
    {
      id: 36,
      name: "Кроссовки Reebok Zig Dynamica",
      price: 8990,
      clothesType: "Кроссовки",
      brand: "Reebok",
      inStock: true,
      purpose: "Для фитнеса",
      discountPercent: 10,
      description: "Инновационные кроссовки для тренировок с амортизацией.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-19/218/815/796/518/28/600018674878b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 132
      },
      size: ["40", "41", "42"],
      color: ["Черный", "Зеленый"],
      shop: "Reebok"
    },
    {
      id: 37,
      name: "Кроссовки New Balance 327",
      price: 9990,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Модные кроссовки с ретро-дизайном.",
      category: "Кроссовки",
      material: "Замша, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/130/445/886/452/911/2/600018036400b0.jpg"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 140
      },
      size: ["39", "40", "41", "42"],
      color: ["Синий", "Белый"],
      shop: "New Balance"
    },
    {
      id: 38,
      name: "Кроссовки Adidas ZX Flux",
      price: 7990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 0,
      description: "Современные кроссовки с минималистичным дизайном.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/805/770/081/732/32/100056357190b0.jpg"
      ],
      rating: {
        rate: 4.5,
        feedback_count: 125
      },
      size: ["40", "41", "42", "43"],
      color: ["Черный", "Белый"],
      shop: "Adidas"
    },
    {
      id: 39,
      name: "Кроссовки Nike Air Zoom Structure 23",
      price: 13990,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 15,
      description: "Кроссовки с поддержкой для пробежек на длинные дистанции.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-19/218/575/546/518/5/600018674882b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 118
      },
      size: ["40", "41", "42"],
      color: ["Синий", "Черный"],
      shop: "Nike"
    },
    {
      id: 40,
      name: "Кроссовки Puma RS-Fast",
      price: 8990,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Модные кроссовки с акцентом на скорость.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/474/289/832/411/519/600017130632b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 105
      },
      size: ["40", "41", "42"],
      color: ["Белый", "Черный"],
      shop: "Puma"
    },
    {
      id: 41,
      name: "Кроссовки New Balance 996",
      price: 10490,
      clothesType: "Кроссовки",
      brand: "New Balance",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 5,
      description: "Классические кроссовки в спортивном стиле.",
      category: "Кроссовки",
      material: "Замша, текстиль",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/191/956/221/41/100065795616b0.JPG"
      ],
      rating: {
        rate: 4.7,
        feedback_count: 120
      },
      size: ["40", "41", "42", "43"],
      color: ["Серый", "Белый"],
      shop: "New Balance"
    },
    {
      id: 42,
      name: "Кроссовки Adidas Ultra 4D",
      price: 15990,
      clothesType: "Кроссовки",
      brand: "Adidas",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 15,
      description: "Инновационные кроссовки с 4D-печатью для максимальной амортизации.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-48/538/805/782/514/40/600018304054b0.jpg"
      ],
      rating: {
        rate: 4.9,
        feedback_count: 135
      },
      size: ["41", "42", "43", "44"],
      color: ["Черный", "Белый"],
      shop: "Adidas"
    },
    {
      id: 43,
      name: "Кроссовки Puma RS-Fast Future",
      price: 8990,
      clothesType: "Кроссовки",
      brand: "Puma",
      inStock: true,
      purpose: "Для повседневной носки",
      discountPercent: 10,
      description: "Модные кроссовки с ярким дизайном для города.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-19/159/770/881/232/6/100058881467b0.jpg"
      ],
      rating: {
        rate: 4.6,
        feedback_count: 118
      },
      size: ["40", "41", "42"],
      color: ["Черный", "Красный"],
      shop: "Puma"
    },
    {
      id: 44,
      name: "Кроссовки Nike ZoomX Vaporfly Next%",
      price: 19990,
      clothesType: "Кроссовки",
      brand: "Nike",
      inStock: true,
      purpose: "Для бега",
      discountPercent: 5,
      description: "Ультралегкие беговые кроссовки для марафона с максимальной скоростью.",
      category: "Кроссовки",
      material: "Текстиль, резина",
      images: [
        "https://main-cdn.sbermegamarket.ru/big3/hlr-system/-87/399/131/581/315/9/100058878996b0.jpg"
      ],
      rating: {
        rate: 4.8,
        feedback_count: 140
      },
      size: ["40", "41", "42", "43"],
      color: ["Синий", "Белый"],
      shop: "Nike"
    }
  ]
};
