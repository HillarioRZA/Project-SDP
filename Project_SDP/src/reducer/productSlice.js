import {createSlice} from "@reduxjs/toolkit"
//testing
const initialState = {
    PRODUCTS:[
        {
          "id": 1,
          "productName": "Ikan Aligator",
          "price": 1250000,
          "productImage": "/src/assets/products/aligator.jpeg",
          "categori": "Carnivora"
        },
        {
          "id": 2,
          "productName": "Aquarium 120X60X60",
          "price": 800000,
          "productImage": "/src/assets/products/aq120.jpeg",
          "categori": "Aquarium"
        },
        {
          "id": 3,
          "productName": "Aquarium 100X50X50",
          "price": 450000,
          "productImage": "/src/assets/products/aquarium.jpeg",
          "categori": "Aquarium"
        },
        {
          "id": 4,
          "productName": "Arwana Super Red",
          "price": 12000000,
          "productImage": "/src/assets/products/arwanaSR.jpeg",
          "categori": "Carnivora"
        },
        {
          "id": 5,
          "productName": "Bibit Rumput",
          "price": 15000,
          "productImage": "/src/assets/products/bibit.jpeg",
          "categori": "Pelengkap"
        },
        {
          "id": 6,
          "productName": "Clean Pump",
          "price": 100000,
          "productImage": "/src/assets/products/cleanPump.jpeg",
          "categori": "Alat"
        },
        {
          "id": 7,
          "productName": "Ikan Cupang Half Moon",
          "price": 50000,
          "productImage": "/src/assets/products/cupang.jpeg",
          "categori": "Ikan Hias"
        },
        {
          "id": 8,
          "productName": "Filter",
          "price": 150000,
          "productImage": "/src/assets/products/filter1.jpeg",
          "categori": "Alat"
        },
        {
          "id": 9,
          "productName": "Ikan Guppy",
          "price": 15000,
          "productImage": "/src/assets/products/guppy.jpeg",
          "categori": "Ikan Hias"
        },
        {
          "id": 10,
          "productName": "Ikan Koi Kohaku Slayer Kumpay",
          "price": 1500000,
          "productImage": "/src/assets/products/kohaku.jpeg",
          "categori": "Koi"
        },
        {
          "id": 11,
          "productName": "Ikan Koki",
          "price": 25000,
          "productImage": "/src/assets/products/koki.jpeg",
          "categori": "Ikan Hias"
        },
        {
          "id": 12,
          "productName": "Filter",
          "price": 250000,
          "productImage": "/src/assets/products/filter2.jpeg",
          "categori": "Alat"
        },
        {
          "id": 13,
          "productName": "Ikan Koi Kommet",
          "price": 30000,
          "productImage": "/src/assets/products/komet.jpeg",
          "categori": "Koi"
        },
        {
          "id": 14,
          "productName": "Bibit Lucky Clover",
          "price": 20000,
          "productImage": "/src/assets/products/lucky.jpeg",
          "categori": "Pelengkap"
        },
        {
          "id": 15,
          "productName": "Pembersih Kaca",
          "price": 120000,
          "productImage": "/src/assets/products/pemkaca.jpeg",
          "categori": "Alat"
        },
      ]
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
      
    }
})

export default productSlice.reducer

