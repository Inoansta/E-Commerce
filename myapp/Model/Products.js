

var products = function(){

var jerseys = [
    {   'img':[
        'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/5/8/581b3a1f6a142d79aa9cb9420364f4e47eabc6165bea035626414e3105f083d9.jpeg',
        'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/f/a/fa12501798b578a775e6265e62b0d650442f01f5ac0a4e8b0baab23be6753551.jpeg',
        'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/4/b/4bfea55bd6ef6f33fbab457381185e000a9250b8c74356f990ed95569ec0e0b1.jpeg'
    ],
        'productId': '11',
        'brand': 'FCbarcelona',
        'name': 'Pedri',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/3/7/374d66445fd547c0c8faa2d27e60565fc924463f62e6a49049252e723282e150.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/e/6/e6ffa0adf04ed0d351cb021b0c94e1ae7752f3d78879bd3510cfd5c0fb647a68.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/4/a/4ae58e42a48a8acfc1f5b47a6f8fb2ec000a88793b7211c3be6c2c53edf4dfcd.jpeg'
    
    ],
        'productId': '12',
        'brand': 'FCbarcelona',
        'name': 'Dembele',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/3/e/3e5dae74e2adb0b113ea98f6b98fecfeb9ae9b6658b8747d7439ef6af6c634d7.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/3/c/3c4ebda655bc26a773d846df5572a99a8c284aecef435085a81decf0083f1b41.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/d/8/d8b272c948719baf13f229a2ac66e95c6bb251aa4833fbbf7ad1b6d1c1f38042.jpeg'
        ],
        'productId': '13',
        'brand': 'FCbarcelona',
        'name': 'Memphis',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/8/6/86fd443f1e716aaafa8d1d22af3b8d20558f6e705f886237522476f1537d2066.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/4/f/4fe26f9dd9ce0dbb195eddbeb2ecc9e8df8f74131156c6526a8bb314a49ca6be.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/f/4/f4a98efb2bd5e34a5fb1ec836ff7b1f3d9b62333cac766f71091d5e4112007a3.jpeg'
        ],
        'productId': '21',
        'brand': 'Juventus',
        'name': 'Chiesa',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/9/6/966a197aee2bd56f0c6910844dcd141f98b386101133677295c79c37582aac2f.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/c/0/c07b586edf00085ef3ecfa0c024fbfee34105a82f8b1d464329865f841d77f94.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/4/9/49aa964aa6399aeebdc0711b7fb8866771916f196da2024f43d98e927cab92e7.jpeg'
        ],
        'productId': '22',
        'brand': 'Juventus',
        'name': 'Vlahovic',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/5/0/50a39ebc5611b483729d74b6b478862389fd666cb06c6f5efdc648d7fb759c4b.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/6/6/663b9f0dc8b43cf922e87fa867bc161823be9c7a19fa490603ab0721f3f9afb0.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/f/4/f4a98efb2bd5e34a5fb1ec836ff7b1f3d9b62333cac766f71091d5e4112007a3.jpeg'
        ],
        'productId': '23',
        'brand': 'Juventus',
        'name': 'Locatelli',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/7/1/717917cd1986a93b0d5efa462a6fc28a220ea55c093891ba0b8c2415876bb4dd.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/b/f/bff37f543000eefc7684fb99164096c82d6948e0ddb68881a9a85b1b36b9c3b6.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/1/6/16cbce73c5db54c09ea22a568c34a2bd5351425c45d924fd771643e75d9b7027.jpeg'
        ],
        'productId': '31',
        'brand': 'Arsenal',
        'name': 'Jesus',
        'price': 100
    },
    {
        'img':[
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/9/0/90e30cde927db3823c8f63dc8841c35ec79ea39bf13314cda47bbbc07a8a4669.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/1/a/1a1ecad9396e90bdb79e9237973e6c3e6d5e80ae704e56d15cd6bad8b2a4efb8.jpeg',
            'https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/1/e/1e5255f172199af24cfd5f0f95aee8968a5c1369466675f8b56e52564c5f8c50.jpeg'
        ],
        'productId': '32',
        'brand': 'Arsenal',
        'name': 'Odegaard',
        'price': 100
    },
    {
        'img':[
            'https://cdn.shopify.com/s/files/1/0871/5558/products/zinchenko_5000x.png?v=1660701851',
            'https://cdn.shopify.com/s/files/1/0871/5558/products/arsenalepl1_f3e33a47-359c-4a95-8f8d-e7345f7dc82e_5000x.png?v=1660701851',
            'https://cdn.shopify.com/s/files/1/0871/5558/products/arsenalhome2_7f72f4b7-70fd-4cca-9772-bfd0881a3487_5000x.png?v=1660701851'
        ],
        'productId': '33',
        'brand': 'Arsenal',
        'name': 'Zinchenko',
        'price': 100
    }
]
 return jerseys;
}
