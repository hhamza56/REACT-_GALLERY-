

import React from 'react';

const Product_App = () => {
  const poshtion = {
    price: 10,
    title: 'Product Title',
    description: 'Product Description',
    images: ['image1.jpg', 'image2.jpg'],
  };

  const Arry = [
    { price: 20,
         title: 'Product 1'
         , description: 'Description 1',
          images: 'https://bagspot.pk/cdn/shop/products/IMG_20220408_233138_493_1024x.webp?v=1652560062' },




    { price: 30,
         title: 'Product 2',
          description: 'Description 2',
           images: "https://bagspot.pk/cdn/shop/products/IMG_20220408_233138_493_1024x.webp?v=1652560062" },
    
           { price: 30,
            title: 'Product 2',
             description: 'Description 2',
              images: "https://stationers.pk/cdn/shop/files/DAKANEESpidermanCharacterSchoolBagsforBoysClass1to3_5.jpg?v=1689759778" },


              { price: 30,
                title: 'Product 2',
                 description: 'Description 2',
                  images: "https://kaisz.pk/wp-content/uploads/2023/08/school-bags-6-1-450x356.png" },
              
  ];

  return (
    <div>
      {Arry.map((item, index) => (
        <div key={index}>
          <h4>{item.price}</h4>
          <p>{item.title}</p>
          <p>{item.description}</p>
          {/* Render images as needed */}
          {item.images.map((image, imageIndex) => (
            <img key={imageIndex} src={image} alt={`Product ${index + 1} Image ${imageIndex + 1}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export {Product_App};
