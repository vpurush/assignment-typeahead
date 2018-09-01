import {Product} from '../models/product';

const _images = {
    shoes: [
        'shoe-1.png',
        'shoe-2.png',
        'shoe-3.png',
        'shoe-4.jpeg'
    ],
    electronics: [
        'phone1.png',
        'phone2.png',
        'phone3.png',
        'camera-2.png',
        'camera-3.jpeg'
    ],
    grooming: [
        'grooming-1.png',
        'grooming-2.png',
        'grooming-3.png',
        'grooming-4.png'
    ],
    handbags:[
        'hb-1.png',
        'hb-2.png',
        'hb-3.jpeg',
        'hb-4.jpeg'
    ],
    kitchen: [
        'kitchen-1.png',
        'kitchen02.png',
        'kitchen-3.png',
        'kitchen-4.png'
    ],
    fashion: [
        'fashion-1.jpeg',
        'fashion-2.jpeg',
        'fashion-3.jpeg',
    ]
}

const generateProductList = (product, company, price, color) => {
    let output = [];
    let minPrice, maxPrice, priceRange;
    if(price.indexOf('to') != -1){
        let priceParts = price.split('to');
        minPrice = parseInt(priceParts[0].replace('$', ''));
        maxPrice = parseInt(priceParts[1].replace('$', ''));
    }else if(price.indexOf('<') != -1){
        minPrice = 0;
        maxPrice = parseInt(price.replace('<', '').replace('$', ''));
    }else{
        minPrice = parseInt(price.replace('>', '').replace('$', ''));
        maxPrice = 99999999;
    }
    priceRange = maxPrice = minPrice;

    console.log("maxPrice minPrice", maxPrice, minPrice);

    product = product || 'Handbags';
    company = company || 'Gucci';
    price = price || "$401 to $1000";
    color = color || "orange";

    for(let i=0; i<20; i++){
        let imgUrls = _images[product.toLowerCase()];
        output.push(new Product(product, 
            company, 
            Math.ceil(Math.random() * priceRange + minPrice), 
            color,
            imgUrls[Math.floor(Math.random() * imgUrls.length)]
        ));
    }

    return output;
}

export {
    generateProductList
}