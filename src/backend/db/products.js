import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName:"Armani-sundigioia- 150ml (MEN)",
    quantity:"150 ml",
    brand:"Armani",
    rating:"4.5",
    isRatingGood:true,
    originalPrice:15000,
    sellingPrice:12000,
    discountOffer:"20% off",
    isSoldOut:false,
    fastDelivery:false,
    image:"/assets/MEN/armanisundigioia_men.jpg",
    categoryName: "Men",
    description:"Sun di Gioia captures the warmth of the Mediterranean sun. Radiant and feminine, shiny and joyful, the fragrance evokes the scent of salty skin and like a second skin, it is in complete, joyful harmony with the Female who wears it. The scent starts off with solar flowers."
  },
  {
    _id: uuid(),
    productName:"Chanel-paris-1957-150ml (MEN)",
    qunatity:"150 ml",
    brand:"Chanel",
    rating:"4.6",
    isRatingGood:true,
    originalPrice:13000,
    sellingPrice:10400,
    discountOffer:"20% off",
    isSoldOut:true,
    fastDelivery:false,
    image:"/assets/MEN/chanel-paris-men.jpg",
    categoryName: "Men",
    description:"A sensual accord of white musk is delicately fashioned with floral notes of bergamot, iris and neroli, woody notes of cedar, powdery accents and a hint of honey. A luminous scent, a statement to the timeless style of CHANEL."
  },
  {
    _id: uuid(),
    productName:"Acqua-di-Gio-Essenza- 150ml (MEN)",
    quantity:"150 ml",
    brand:"Armani",
    rating:"4.5",
    isRatingGood:true,
    originalPrice:1300,
    sellingPrice:1040,
    discountOffer:"20% off",
    isSoldOut:true,
    fastDelivery:false,
    image:"/assets/MEN/Acqua-di-Gio-Essenza-Giorgio-Armani_men.jpg",
    categoryName: "Men",
    description:"The essence of a classic. Acqua di Gio Essenza, a more intense and sensual interpretation of Acqua di Gio. At its heart is the blend of two new extraordinary eleMalets: Cascalone, with fresh and powerful aquatic accents, and the luminous Paradisone, which brings out each of the fragrance?s subtle notes. All the founding eleMalets are present, reinvented to create a more vibrant, sensual fragrance. Top Notes - Bergamot, Grapefruit and Water Notes. Mid Notes - Jasmine, Basil and Sage. Base Notes - Patchouli, Cedar, Vetiver, Ambrox, Ambergris, Pepper and Clary Sage."
  },
  {
   _id: uuid(),
    productName:"Allure-Homme-Sport-Chanel - 100ml (MEN)",
    quantity:"100 ml",
    brand:"Chanel",
    rating:"3.5",
    isRatingGood:false,
    originalPrice:1500,
    sellingPrice:1200,
    discountOffer:"20% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/MEN/Allure-Homme-Sport_chanel-men.jpg",
    categoryName: "Men",
    description:"A generous citrus freshness is subtly heightened by spicy lovage and elemi notes, and set against a backdrop of cedar and white musk."
  },
  {
    _id: uuid(),
    productName:"Armani-prive-cuir- 100ml (MEN)",
    quantity:"100 ml",
    brand:"Armani",
    rating:"3.8",
    isRatingGood:false,
    originalPrice:1800,
    sellingPrice:1260,
    discountOffer:"30% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/MEN/armani-prive-cuir_men.jpg",
    categoryName: "Men",
    description:"Cuir Noir was inspired by the art of Arabian tanners.Leather is an art. From Cordoba, Spain to the borders of the Atlas Mountains. With a wine patina, it takes the name of “cordovan”. Tattooed with gold, it is called “maroquin”. The perfume composition consists of Australian Sandalwood, Rose essence, Coriander, Nutmeg (in the top); Leather, Smoky Guaiac and Oud (in the heart); Tahitian Vanilla absolute and Benzoin balm (in the base)."
  },
  {
    _id: uuid(),
    productName:"Armani-Royal_Oud- 150ml (MEN)",
    quantity:"150 ml",
    brand:"Armani",
    rating:"4",
    isRatingGood:true,
    originalPrice:3000,
    sellingPrice:2010,
    discountOffer:"33% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/MEN/Armani-Royal-Oud_men.jpg",
    categoryName: "Men",
    description:"To preserve their unique characteristics, Armani decided to work with oud oil in a luxury fragrance the same way he would approach a rich gold and silver brocade. “With Oud Royal, I wanted to capture the spirit of Eastern alchemy by elevating oud wood — the precious symbol of the Orient itself. Treating it as a piece of jewellery is the only way to do justice to its magnificent richness."
  },
  
  {
    _id: uuid(),
    productName:"Chanel-platinum-egoiste- 150ml (MEN)",
    quantity:"150 ml",
    brand:"Chanel",
    rating:"4.8",
    isRatingGood:true,
    originalPrice:3000,
    sellingPrice:1799,
    discountOffer:"40% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/MEN/chanel-platinum-egoiste_men.jpg",
    categoryName: "Men",
    description:"Egoiste Platinum by Chanel is a Woody Floral Musk fragrance for men. Egoiste Platinum was launched in 1993. The nose behind this fragrance is Jacques Polge. Top notes are Lavender, Rosemary, Neroli and Petitgrain; middle notes are Geranium, Clary Sage, Galbanum and Jasmine; base notes are Oakmoss, Vetiver, Cedar, Sandalwood and Amber."
  },
  {
    _id: uuid(),
    productName:"Gucci-IntenseOud-UseMe-100ml (MEN)",
    quantity:"100 ml",
    brand:"Gucci",
    rating:"4.9",
    isRatingGood:true,
    originalPrice:3000,
    sellingPrice:899,
    discountOffer:"70% off",
    isSoldOut:true,
    fastDelivery:false,
    image:"/assets/MEN/Gucci-IntenseOud-UseMe_men.png",
    categoryName: "Men",
    description:"Intense Oud has refreshing accords of incense, woody notes, leather, and amber.Intense Oud by Gucci can be worn by both the genders thanks to its universal appeal. The EDP is famous for its scintillating fragrance ever since its inception in 2016. The composition is dreamed and brought into the existence by famous perfumer Aurelien Guichard."
  },
  {
    _id: uuid(),
    productName:"Gucci-oriental-base- 150ml (MEN)",
    quantity:"150 ml",
    brand:"Gucci",
    rating:"3.9",
    isRatingGood:true,
    originalPrice:4000,
    sellingPrice:2400,
    discountOffer:"40% off",
    isSoldOut:false,
    fastDelivery:false,
    image:"/assets/MEN/gucci-oud_men.jpg",
    categoryName: "Men",
    description:"The new version of the Gucci by Gucci fragrance from 2007, also known as Gucci Ambre, is following the trend of the oud-orientals and is named Gucci Oud. The perfume comes out in July of 2014 and it is announced as a unisex fragrance that is glamorous, opulent and mysterious. Rich and intense, the composition contains essence of oud from Laos, which is 100% natural.The opening accords include pear, raspberry and saffron. The heart captures essences of Bulgarian rose and orange blossom, followed by the oriental base of oud, patchouli, amber and musk."
  },
  {
    _id: uuid(),
    productName:"Zara-nuit-EAU-DE- 150ml (MEN)",
    quantity:"150 ml",
    brand:"Zara",
    rating:"2.7",
    isRatingGood:false,
    originalPrice:2000,
    sellingPrice:1599,
    discountOffer:"20% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/MEN/zara-nuit-men.jpg",
    categoryName: "Men",
    description:"Eau de parfum. The scent reveals notes of apricot, lily of the valley and vanilla. It’s an elegant, captivating and intense fragrance."
  },
  {
    _id: uuid(),
    productName:"Giorgio Armani Si Edp 150ml (WOMEN)",
    quantity:"150 ml",
    brand:"Armani",
    rating:"3.8",
    isRatingGood:false,
    originalPrice:7600,
    sellingPrice:5320,
    discountOffer:"30% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/WOMEN/Armani-Si_women.jpg",
    categoryName: "Women",
    description:"Si by Giorgio Armani is a Chypre Fruity fragrance for women. Si was launched in 2013. The nose behind this fragrance is Christine Nagel. Top note is Cassis; middle notes are May Rose and Freesia; base notes are Vanilla, Patchouli, Ambroxan and Woody Notes."
  },
  {
    _id: uuid(),
    productName:"Giorgio Armani Si Edp 150ml (WOMEN)",
    quantity:"150 ml",
    brand:"Armani",
    rating:"4",
    isRatingGood:true,
    originalPrice:7000,
    sellingPrice:5599,
    discountOffer:"20% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/WOMEN/ArmaniSIFioriforWomen.jpg",
    categoryName: "Women",
    description:"Si by Giorgio Armani is a Chypre Fruity fragrance for women. Si was launched in 2013. The nose behind this fragrance is Christine Nagel. Top note is Cassis; middle notes are May Rose and Freesia; base notes are Vanilla, Patchouli,lily, Ambroxan and Woody Notes."
  },
  {
    _id: uuid(),
    productName:"Modern-muse-estee-lauder- 150ml (WOMEN)",
    quantity:"150 ml",
    brand:"Estee Lauder",
    rating:"3.1",
    isRatingGood:false,
    originalPrice:1000,
    sellingPrice:799,
    discountOffer:"21% off",
    isSoldOut:false,
    fastDelivery:false,
    image:"/assets/WOMEN/MODERN-MUSE-ESTEE-LAUDER-women.jpg",
    categoryName: "Women",
    description:"Two distinctively different accords—sparkling jasmine accord and sleek woods accord—provide an intriguing dual impression. It's a true innovation in fragrance design, as complex and fascinating as the woman who inspires it."
  },
  {
    _id: uuid(),
    productName:"Estee-Lauder-Pleasures-100ml (WOMEN)",
    quantity:"100 ml",
    brand:"Estee Lauder",
    rating:"4",
    isRatingGood:true,
    originalPrice:5000,
    sellingPrice:1599,
    discountOffer:"73% off",
    isSoldOut:true,
    fastDelivery:true,
    image:"/assets/WOMEN/Estee-Lauder-Pleasures-For-Women_.jpg",
    categoryName: "Women",
    description:"Sheer, spirited, shimmering. One of life's simple pleasures. Fresh as flowers after a spring rain, this sheer, shimmering floral is a spirited blend of lilies, white peonies and jasmine, all tingling with the rare essence of exotic baie rose. Never sweet, ever fresh, it delights your senses with pleasure after pleasure."
  },
  {
    _id: uuid(),
    productName:"Zara-women-fruity-100ml (WOMEN)",
    quantity:"100 ml",
    brand:"Zara",
    rating:"4.2",
    isRatingGood:true,
    originalPrice:5000,
    sellingPrice:2500,
    discountOffer:"50% off",
    isSoldOut:true,
    fastDelivery:true,
    image:"/assets/WOMEN/zara-fruity-women.jpg",
    categoryName: "Women",
    description:"Fruity eau de toilette. The scent reveals notes of tangerine, currant and lily of the valley. It’s a luminous, captivating and comfortable fragrance."
  },
  {
    _id: uuid(),
    productName:"zara-oriental-women- 100ml (WOMEN)",
   quantity:"100 ml",
    brand:"Zara",
    rating:"4.8",
    isRatingGood:true,
    originalPrice:5600,
    sellingPrice:4032,
    discountOffer:"28% off",
    isSoldOut:false,
    fastDelivery:true,
    image:"/assets/WOMEN/zara-oriental-women.jpg",
    categoryName: "Women",
    description:"Oriental by Zara is a Amber Floral fragrance for women. Top notes are Freesia, Rose and Bergamot; middle notes are Vanilla and Jasmine; base notes are Caramel, Patchouli and Musk."
  },
  {
    _id: uuid(),
    productName:"zara-red-vanilla-women- 100ml (WOMEN)",
    quantity:"100 ml",
    brand:"Zara",
    rating:"2.5",
    isRatingGood:false,
    originalPrice:4000,
    sellingPrice:2000,
    discountOffer:"50% off",
    isSoldOut:false,
    fastDelivery:false,
    image:"/assets/WOMEN/zara-red-vanila-women.jpg",
    categoryName: "Women",
    description:"Oriental eau de toilette. The scent reveals notes of blackcurrant, iris and vanilla. It’s a warm, elegant and long-lasting fragrance."
  },
];
