const productGroups = [
  {
    category: "Women's Fashion",
    items: [
      { name: "Floral Summer Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=85" },
      { name: "Classic Cotton Kurti",image: "https://www.neerus.com/cdn/shop/products/4133-SC8179OFFWHITE_1.jpg?v=1755193049"},
      { name: "Elegant Silk Saree", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85" },
      { name: "Casual Denim Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85" },
      { name: "Linen Co-ord Set",image: "https://suta.in/cdn/shop/files/DawntoDusk_10of10.jpg?v=1709870720",},
      { name: "Printed Anarkali Dress", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85" },
      { name: "Everyday Straight Kurti",image: "https://www.neerus.com/cdn/shop/products/4695-A2653OFFWHITE_1.jpg"},
      { name: "Pleated Midi Skirt", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=85" },
      { name: "Satin Party Top",image:"https://m.media-amazon.com/images/I/61b083pKSzL._AC_SL750_.jpg"},
      { name: "Classic White Shirt", image: "https://rukminim2.flixcart.com/image/669/669/xif0q/shirt/s/a/6/l-womshirtsolovsslb-04-white-urbano-fashion-original-imahhxjsxzyq2hv9.jpeg?q=90" },
      { name: "High-Waist Trousers", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=85" },
      { name: "Embroidered Kurta Set", image: "https://peachmode.com/cdn/shop/products/pink-floral-embroidered-pure-cotton-kurti-pant-set-with-dupatta-peachmode-2.jpg?v=1669052860&width=2000"},
      { name: "Pastel Chiffon Saree",image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=85)"},
      { name: "Ruffle Sleeve Blouse",image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6f17b4VF-0460-WHTE_1.jpg?rnd=20200526195200&tr=w-720"},
      { name: "Relaxed Fit T-Shirt", image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=85" },
      { name: "Wide-Leg Denim Jeans", image: "https://www.ownd.in/cdn/shop/files/1274075-32759405.jpg?format=webp&v=1792314020&width=1200", },
      { name: "Floral Maxi Dress", image: "https://www.missmosa.in/cdn/shop/files/Hannah_Floral_Maxi_Dress_1.jpg?v=1782883272", },
      { name: "Minimalist Black Dress",image :"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTKLTw59c7CcFkFbDSkUiQWsvQit4BQzlOS_qmF7V0zbXFhRMBeTuTAl_DlAs4uhwrSkOBS5E_n2wIxbgoRHQqaye9u5-uz" },
      { name: "Cotton Palazzo Pants", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY19AcIcF47wne1mjyPlAYAbd59hjdqmjNRqJ3bwYV4y17Pr0RFOMroS9LX_K3F3dlgbbS9_YR6l9-ivLt5vnoVLXhSQfHRxH3-yyqen6oWHnUrD8pz_Uh9w" },
      { name: "Festive Lehenga Set", image: "https://www.bullionknot.com/cdn/shop/files/LaxmiRedlehenga3.jpg?v=1782679646&width=700" }
    ]
  },
  {
    category: "Men's Fashion",
    items: [
      { name: "Classic Oxford Shirt", image: "https://levi.in/cdn/shop/files/004JH0144.jpg?v=1791531068&width=960" },
      { name: "Slim Fit Denim Jeans", image: "https://rukminim2.flixcart.com/image/669/669/xif0q/jean/y/v/n/34-4je034-02-snitch-resized-original-imahnjjun5jz4xyd.jpeg?q=90" },
      { name: "Cotton Polo T-Shirt", image: "https://thehouseofrare.com/cdn/shop/files/RR260348_1.webp?v=1765457040&width=540" },
      { name: "Casual Linen Shirt", image: "https://www.likenlike.in/cdn/shop/files/IMG20261016202422-nQjSE.jpg?v=1792183781&width=713" },
      { name: "Everyday Chinos", image: "https://nobero.com/cdn/shop/files/ChatGPTImageAug6_2026_02_21_42PM_4.png?v=1786006433&width=360" },
      { name: "Essential Crew Neck Tee", image: "https://m.media-amazon.com/images/I/51GobBJ0RPL._SX569_.jpg" },
      { name: "Formal Black Trousers", image: "https://m.media-amazon.com/images/I/51zDmqltiAL._AC_UL480_FMwebp_QL65_.jpg" },
      { name: "Striped Casual Shirt", image: "https://www.powerlook.in/cdn/shop/files/dp21200121_1.jpg?v=1755940051&width=710" },
      { name: "Lightweight Hoodie", image: "https://m.media-amazon.com/images/I/71f2nZ6wHoL._AC_SX644_CB1169409_QL70_.jpg" },
      { name: "Classic Denim Jacket", image: "https://wrogn.com/cdn/shop/files/1_8f62c754-b8cd-4143-a8c4-ea378d91b238.webp?v=1791546367" },
      { name: "Checked Flannel Shirt", image: "https://wrogn.com/cdn/shop/files/WWSH0683MAZ.webp?v=1792738519" },
      { name: "Relaxed Fit Jeans", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAxIDFHO1VRTchvngWRU9efmBJ_BPCHgJgxYHIaWBM0Z8-AYSqyZAuSsYbeN5qK2iX0zcbjtD-K24y7I99Fsu986Nb184S6CR4g5bCXw635WPurlnNLJuIzA" },
      { name: "Textured Polo Shirt", image: "https://veirdo.in/cdn/shop/files/Artboard1-2026-09-02T101453.518.jpg?v=1788324641&width=360" },
      { name: "Cotton Kurta", image: "https://apisap.fabindia.com/medias/20312659-01.jpg?context=bWFzdGVyfGltYWdlc3w5MTkzMTN8aW1hZ2UvanBlZ3xhRFUzTDJnMk9TOHhOVFF6TmpZMk1UazVOREk1TkRJdk1qQXpNVEkyTlRsZk1ERXVhbkJufDUyNjkzYjEyMzFjOTVhZTY1NjJkOTMxNDE0ZmJhNTVmYjBmYmE5M2FjYmVkM2ZhZDRiMWExNWM1NGU1YjRiYzI&aio=w-500" },
      { name: "Traditional Nehru Jacket", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/6/16e3482INJOWC-4032Cream_1.jpg?rnd=20200526195200&tr=w-720" },
      { name: "Formal White Shirt", image: "https://rukminim2.flixcart.com/image/662/662/xif0q/shirt/t/w/8/s-fiora-mens-shirt-white-rare-rabbit-original-imahrx8fjwdyacyw.jpeg?q=90" },
      { name: "Casual Cargo Pants", image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260424/EpCu/69eb3ed4fcb5bb61d27ae455/-473Wx593H-703274821-khaki-MODEL.jpg" },
      { name: "Minimalist Sweatshirt", image: "https://image.hm.com/assets/hm/1d/34/1d348ad5a1887410dc77c6bef22ab692f364fd75.jpg?imwidth=768" },
      { name: "Printed Resort Shirt", image: "https://image.hm.com/assets/hm/d5/dc/d5dc37e29488c76668465ae743aad62a7a33a808.jpg?imwidth=657" },
      { name: "Smart Casual Blazer", image: "https://rukminim2.flixcart.com/image/669/669/xif0q/blazer/k/k/s/36-31100586-mr-bowerbird-original-imahhazd3kqydgnu.jpeg?q=90" }
    ]
  },
  {
    category: "Accessories",
    items: [
      { name: "Classic Leather Handbag", image: "https://static.zara.net/assets/public/d0aa/ef48/6bee409cb428/196a8def9f40/16319810709-e2/16319810709-e2.jpg?ts=1788168868678&w=1430" },
      { name: "Minimalist Shoulder Bag", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iCT22L36Zzp30T7blkBEDjJucOnPhOlYajFNSZsJ0hrq6D3lJCkqiouP&s=10" },
      { name: "Everyday Tote Bag", image: "https://maishalifestyle.com/cdn/shop/files/C383CB72-4B1B-414C-B9BB-276C5927FFD8.jpg?v=1755596244&width=1000" },
      { name: "Quilted Crossbody Bag", image: "https://m.media-amazon.com/images/I/81cLIuduzwL._AC_UL480_FMwebp_QL65_.jpg" },
      { name: "Compact Card Holder", image: "https://m.media-amazon.com/images/I/814ww4b+kAL._SX679_.jpg" },
      { name: "Classic Leather Wallet", image: "https://m.media-amazon.com/images/I/61849mHyvzL._AC_UL480_FMwebp_QL65_.jpg" },
      { name: "Gold-Tone Hoop Earrings", image: "https://cdn.caratlane.com/media/catalog/product/U/E/UE06523-1Y0000_1_lar.avif" },
      { name: "Pearl Stud Earrings", image: "https://highsparksilver.com/cdn/shop/files/freshwater-gold-pearl-stud-earrings-in-925-sterling-silver-with-18k-gold-finish-highspark-dL5.png?v=1782827014&width=493" },
      { name: "Layered Pendant Necklace", image: "https://www.svarnjewels.com/cdn/shop/files/imgi_341_H4618259ce7ac4ac2ac07a287cb1fbc2ak.jpg?v=1769601012&width=1000" },
      { name: "Minimalist Bracelet", image: "https://images.cltstatic.com/media/product/350/AT00269-SS0000-twinkling-stars-bracelet-in-gold-plated--silver-prd-1-model.jpg" },
      { name: "Statement Ring Set", image: "https://jewelpanda.in/cdn/shop/files/Luxury-White-Gold-Color-Tibetan-Silver-Rings-Set-For-Women-Vintage-Round-Cubic-Zirconia-Finger-Rings_1024x1024.webp?v=1775493599" },
      { name: "Elegant Analog Watch", image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1d48a746/images/Titan/Catalog/2608QM02_1.jpg?sw=360&sh=360" },
      { name: "Classic Aviator Sunglasses", image: "https://m.media-amazon.com/images/I/41BU96G+X9L._SX679_.jpg" },
      { name: "Round Frame Sunglasses", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQb3N0SRJl9FnhNzajooriiKB0B297G-7Msg67ZfunmJ29_e8wYMbBYoDS-ohOqa26KK7Alasq8pnRCug4pWYK8MhGRCsI6qfHVc6VR2MEaDBsc0IYmzd8C" },
      { name: "Silk Print Scarf", image: "https://m.media-amazon.com/images/I/61o++X4Cx-L._SY741_.jpg" },
      { name: "Everyday Baseball Cap", image: "https://m.media-amazon.com/images/I/51jzG-XbAjL._SX679_.jpg" },
      { name: "Soft Knit Beanie", image: "https://img201.savana.com/v1/goods-pic/40edaa5567144445814d825968aa3b92_w1440_q90.webp" },
      { name: "Classic Leather Belt", image: "https://m.media-amazon.com/images/I/51j-WcLQH5L._SX679_.jpg" },
      { name: "Evening Clutch Bag", image: "https://m.media-amazon.com/images/I/81LwL4OY4WL._SY675_.jpg" },
        { name: "Canvas Backpack", image: "https://rukminim2.flixcart.com/image/662/662/xif0q/backpack/d/c/d/7-canvas-travel-daypack-drawstring-backpack-flip-laptop-bag-for-resized-original-imahd4rk3hthwum8.jpeg?q=90"},
    ]
  },
  {
    category: "Home & Living",
    items: [
      { name: "Soft Cotton Cushion Cover", image: "https://m.media-amazon.com/images/I/51tojAEMLUL._SX300_SY300_QL70_FMwebp_.jpg" },
      { name: "Textured Throw Blanket", image: "https://m.media-amazon.com/images/I/71k0UrxjIgL._SX679_.jpg" },
      { name: "Ceramic Coffee Mug", image: "https://spcdn.shortpixel.ai/spio/ret_img+q_cdnize+to_webp+s_webp/theplushrepublic.com/wp-content/uploads/2026/05/01-main-squareThe-Plush-Republic-Handcrafted-Bunny-Face-Mug-White-with-Pink-Ears--1024x1024.webp" },
      { name: "Minimalist Table Lamp", image: "https://m.media-amazon.com/images/I/610mNUnu4-L._SX522_.jpg" },
      { name: "Decorative Ceramic Vase", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vEr67D4KtczbNzUBvFRwU3hixXTOP5ryNBjNbUT74w&s" },
      { name: "Cotton Bedsheet Set", image: "https://mytrident.com/cdn/shop/files/1_ad43cb24-2cef-489e-9464-60e26634b59a_638x.progressive.webp.jpg?v=1779188167" },
      { name: "Floral Pillow Cover", image: "https://images.meesho.com/images/products/980903015/oitwx_512.webp?width=512" },
      { name: "Woven Storage Basket", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/storage-basket/c/e/i/1-wr-sb-01-shobhira-original-imahrbf2qzv2ychd.jpeg?q=70" },
      { name: "Scented Candle", image: "https://m.media-amazon.com/images/I/41TDEdWjeSL._SX342_SY445_QL70_FMwebp_.jpg" },
      { name: "Glass Water Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=85" },
      { name: "Wooden Serving Tray", image: "https://m.media-amazon.com/images/I/51wBSt1e1XL._SY300_SX300_QL70_FMwebp_.jpg" },
      { name: "Modern Wall Clock", image: "https://m.media-amazon.com/images/I/81lzkxfm7dL._SX679_.jpg" },
      { name: "Decorative Table Runner", image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/table-runner/a/a/l/57-0-12-0-tcmh536-craftvatika-original-imahscmn4ezdjghp.jpeg?q=90" },
      { name: "Soft Bath Towel Set", image: "https://m.media-amazon.com/images/I/51D0aFhwIjL._SY300_SX300_QL70_FMwebp_.jpg" },
      { name: "Minimalist Planter Pot", image: "https://www.urbanplant.in/cdn/shop/files/Secondarywebp_0ac0e5b3-1cee-4b93-b351-d527a08ceee4.webp?v=1791979369&width=1200" },
      { name: "Artificial Leaf Arrangement", image: "https://m.media-amazon.com/images/I/61VYfg0T0LL._SY300_SX300_QL70_FMwebp_.jpg" },
      { name: "Framed Wall Art", image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/wall-decoration/y/4/y/set-of-2-abstract-leaf-framed-wall-paintings-for-home-decor-2-original-imahpf4fgwtbuuvf.jpeg?q=90" },
      { name: "Ceramic Dinner Plate Set", image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/dinner-set/u/u/l/yes-12-yd-0033-001-yourowndcor-original-imahkuhnx92vn4hh.jpeg?q=90" },
      { name: "Stoneware Bowl Set", image: "https://m.media-amazon.com/images/I/51vUjngd6fL._SX300_SY300_QL70_FMwebp_.jpg" },
      { name: "Glass Storage Jar", image: "https://m.media-amazon.com/images/I/81TUU7ZnMSL._AC_SL750_.jpg" }
    ]
  }
];

const categoryPricing = {
  "Women's Fashion": { base: 499, step: 137 },
  "Men's Fashion": { base: 599, step: 149 },
  Accessories: { base: 199, step: 83 },
  "Home & Living": { base: 249, step: 97 }
};

const badgeOptions = ["Bestseller", "New Arrival", "Popular", ""];

const descriptions = {
  "Women's Fashion": [
    "A breezy floral dress with a feminine silhouette, perfect for sunny days and summer outings.",
    "A comfortable cotton kurti designed for effortless everyday ethnic styling.",
    "An elegant silk saree with a graceful drape for celebrations and special occasions.",
    "Versatile denim jeans that pair easily with your favourite casual tops.",
    "A coordinated linen outfit offering a relaxed, breathable and polished look.",
    "A beautiful printed Anarkali dress with a flowing silhouette for festive occasions.",
    "A versatile straight-cut kurti made for comfortable everyday wear.",
    "A pleated midi skirt that adds graceful movement to your everyday wardrobe.",
    "A smooth satin party top that brings an elegant finish to evening outfits.",
    "A timeless white shirt that works beautifully with both casual and formal looks.",
    "Smart high-waist trousers designed to create a clean and flattering silhouette.",
    "A coordinated embroidered kurta set for graceful traditional styling.",
    "A lightweight pastel chiffon saree with an elegant, flowing drape.",
    "A stylish blouse featuring delicate ruffle sleeves for a feminine touch.",
    "A relaxed cotton T-shirt made for easy, comfortable everyday outfits.",
    "Wide-leg denim jeans offering a relaxed fit and contemporary style.",
    "A flowy floral maxi dress suited to holidays, brunches and casual occasions.",
    "A timeless black dress with a minimalist design for effortless elegance.",
    "Comfortable cotton palazzo pants that pair beautifully with kurtis and tops.",
    "A festive lehenga set designed to make celebrations feel extra special."
  ],

  "Men's Fashion": [
    "A classic Oxford shirt with a smart finish for work and casual occasions.",
    "Slim-fit denim jeans designed for a clean, modern everyday look.",
    "A comfortable cotton polo T-shirt with a timeless casual style.",
    "A breathable linen shirt made for relaxed days and warm weather.",
    "Versatile chinos that offer a smart alternative to everyday denim.",
    "An essential crew-neck T-shirt for simple and comfortable daily outfits.",
    "Formal black trousers designed for polished office and occasion wear.",
    "A striped casual shirt that adds a fresh touch to everyday styling.",
    "A lightweight hoodie for comfortable layering on cooler days.",
    "A classic denim jacket that brings effortless style to casual outfits.",
    "A checked flannel shirt with a relaxed feel for everyday layering.",
    "Relaxed-fit jeans designed for easy movement and casual comfort.",
    "A textured polo shirt that combines classic style with a modern finish.",
    "A comfortable cotton kurta for traditional and festive occasions.",
    "A traditional Nehru jacket that adds a refined layer to ethnic outfits.",
    "A crisp white formal shirt for office wear and special occasions.",
    "Practical cargo pants with a relaxed fit and utility-inspired styling.",
    "A minimalist sweatshirt designed for comfortable everyday layering.",
    "A printed resort shirt that brings a relaxed holiday-inspired look.",
    "A smart casual blazer that adds a polished finish to your outfit."
  ],

  Accessories: [
    "A classic leather handbag with versatile styling for everyday essentials.",
    "A minimalist shoulder bag designed for practical and elegant daily use.",
    "A spacious tote bag for carrying your everyday essentials with ease.",
    "A quilted crossbody bag that combines compact storage with timeless style.",
    "A compact card holder for keeping your essential cards organised.",
    "A classic leather wallet designed for practical everyday storage.",
    "Gold-tone hoop earrings that add a warm, elegant accent to your look.",
    "Pearl stud earrings offering a delicate and timeless finishing touch.",
    "A layered pendant necklace that adds dimension to simple outfits.",
    "A minimalist bracelet designed for subtle everyday elegance.",
    "A statement ring set that adds personality to your accessory collection.",
    "An elegant analog watch combining practical timekeeping with classic style.",
    "Classic aviator sunglasses for a timeless and confident look.",
    "Round-frame sunglasses with a distinctive, contemporary finish.",
    "A silk print scarf that adds colour and elegance to your styling.",
    "An everyday baseball cap for relaxed and sporty outfits.",
    "A soft knit beanie offering cosy comfort in cooler weather.",
    "A classic leather belt that completes casual and formal outfits.",
    "An elegant evening clutch for carrying your party essentials.",
    "A practical canvas backpack for everyday outings and essentials."
  ],

  "Home & Living": [
    "A soft cotton cushion cover that adds comfort and texture to your space.",
    "A cosy textured throw blanket for relaxing evenings and stylish interiors.",
    "A ceramic coffee mug for enjoying your favourite hot beverages.",
    "A minimalist table lamp that brings warm lighting to your room.",
    "A decorative ceramic vase for displaying flowers or styling shelves.",
    "A comfortable cotton bedsheet set for a fresh and inviting bedroom.",
    "A floral pillow cover that adds a decorative touch to your sofa or bed.",
    "A woven storage basket for keeping everyday household items organised.",
    "A scented candle that creates a warm and welcoming atmosphere.",
    "A reusable glass water bottle for convenient everyday hydration.",
    "A wooden serving tray for presenting drinks and snacks beautifully.",
    "A modern wall clock that combines useful timekeeping with home decor.",
    "A decorative table runner to give your dining table a refined finish.",
    "A soft bath towel set designed for everyday bathroom comfort.",
    "A minimalist planter pot for displaying your favourite indoor plants.",
    "An artificial leafy arrangement that adds greenery to your interiors.",
    "Framed wall art to bring character and visual interest to your walls.",
    "A ceramic dinner plate set for elegant everyday dining.",
    "A stoneware bowl set for serving meals and presenting food.",
    "A glass storage jar for keeping kitchen essentials neatly organised."
  ]
};

export const products = productGroups.flatMap((group, groupIndex) =>
  group.items.map((item, index) => {
    const pricing = categoryPricing[group.category];
    const price = pricing.base + ((index * pricing.step) % 1800);
    const id = groupIndex * 20 + index + 1;

    return {
      id,
      name: item.name,
      category: group.category,
      price,
      originalPrice: Math.ceil((price * 1.25) / 10) * 10,
      image: item.image,
      badge: badgeOptions[index % badgeOptions.length],
      rating: Number((4.1 + ((id * 7) % 9) / 10).toFixed(1)),
      reviews: 20 + ((id * 13) % 180),
      description: descriptions[group.category][index],
      inStock: id % 17 !== 0,
      link: `/products/${id}`
    };
  })
);

export default products;
console.log("Total Style Nest products:", products.length);