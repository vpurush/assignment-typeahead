import {Product} from '../models/product';
import { masterData } from './master-data';

const _images = {
    shoes: [
        'shoe-1.png',
        'shoe-2.png',
        'shoe-3.png',
        'shoe-4.jpeg'
    ],
    electronics: [
        'phone-1.png',
        'phone-2.png',
        'phone-3.png',
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

const generateProductList = (product, company, price, color, noOfItemsAlreadyLoaded) => {
    // console.log("product, company, price, color, noOfItemsAlreadyLoaded", product, company, price, color, noOfItemsAlreadyLoaded);
    let output = [];
    if(noOfItemsAlreadyLoaded < 50){
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
        priceRange = maxPrice - minPrice;

        // console.log("maxPrice minPrice", maxPrice, minPrice);

        if(!product){
            if(company){
                Object.keys(masterData.company).forEach((pName) => {
                    let companyFound = masterData.company[pName].some((c) => {
                        console.log("c", c, company, c.toLowerCase() == company.toLowerCase())
                        return c.toLowerCase() == company.toLowerCase();
                    });

                    if(companyFound){
                        product = pName;
                        return;
                    }
                });
            }
        }
        product = product || 'Handbags';

        if(!company){
            if(product){
                company = masterData.company[product][0];
            }
        }
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
    }

    // console.log("generator output", output);
    return output;
}

export {
    generateProductList
}