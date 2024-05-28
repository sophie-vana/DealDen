import React from "react";
import Product from "../components/product";
import "../App.css";

import TotalPrice from "../components/totalPrice";
import { useState } from "react";

function Products() {

    // State for managing cart items and total price display
    const [cartItems, setCartItems] = useState([]);
    const [showTotalPrice, setShowTotalPrice] = useState(false);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setShowTotalPrice(true);
    };

    return (
        <div className="productsPage">
            {/* Introduction section */}
            <div className="productsIntro">
                <h2 className="productsHeading">Products</h2>
                <p className="productsHeading">
                    Welcome to our Products section! Here you will find a diverse range of
                    high-quality items that cater to all your needs.
                    <br />
                    Browse through our collection to discover the perfect products that
                    combine functionality, style, and value. <br />
                    Each product is crafted with care to ensure the best experience for you.
                    Enjoy shopping!
                </p>
            </div>
            {/* Main content section */}
            <div className="productsMain">
                {/* Section for displaying products */}
                <div className="productsSection">
                    <Product products={productsList} addToCart={addToCart} />
                </div>
                {/* Section for displaying total price */}
                <div className="cartSection">
                    {showTotalPrice && <TotalPrice cartItems={cartItems} />}
                </div>
            </div>
        </div>
    );
}

export default Products;

// Array containing product data
export const productsList = [
    {
      id: 1,
      title: "Apple Watch Series 9 GPS Aluminium Case with Sport Band",
      description:
        "Always-On technology keeps the display on so you can see information at a glance. The edge-to-edge design accommodates your favorite complications and makes tapping, typing, and swiping easy",
      price: 8570,
      image:
        "https://media.takealot.com/covers_images/1cee1fbf5d3547d6becae15b1f5e39f3/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 2,
      title:
        "Rizzen 200W, 177Wh Portable Power Station equipped with 6 Output Ports",
      description:
        "200W | 177.6Wh | Lithium-Ion | Load shedding | Inverter | Generator | Powerstation | Power Supply | Powerbank",
      price: 1250,
      image:
        "https://media.takealot.com/covers_images/5f4a1bf1c99b45418fad9d339966a7fd/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 3,
      title: "Hisense - 36 Litre Microwave Oven - Mirror Silver",
      description:
        "Hisense - 36 Litre Microwave Oven with digital control, 10 power settings and a silver exterior.",
      price: 1899,
      image:
        "https://media.takealot.com/covers_images/dacebcdd1541420fa65ebd95ce6fd49c/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 4,
      title: "Rogueware Gaming Monitor",
      description:
        '180Hz 1ms FreeSync Compatible FHD 1080P IPS LED 24" gaming monitor.',
      price: 2250,
      image:
        "https://media.takealot.com/covers_images/1168faeb26c5469f8b636711a136d70b/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 5,
      title: "Canon Zoemini S2 Instant Camera Printer - Teal",
      description:
        "Put power in your palm with this 2-in-1 mini photo printer camera. Snap and print from one device!",
      price: 1799,
      image:
        "https://media.takealot.com/covers_images/0d66f1757dc441f7a5b6fae0a3318f7b/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 6,
      title: "Hisense 13 Place Dishwasher with LED Display - Silver",
      description:
        "Slimline Dishwasher with 13 Place Setting and a silver finish",
      price: 4100,
      image:
        "https://media.takealot.com/covers_images/fe1da46f2e7b4dc68a6a39291264cb6c/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 7,
      title: "George & Mason Baby Cot",
      description:
        "4-in-1 Convertible Cot to Bed. The cot has 3 shelves integrated for storage purposes. Once converted into a mini bed, the remainder of the cot converts into a table, toy trunk and whiteboard.",
      price: 5000,
      image:
        "https://media.takealot.com/covers_images/e8e938ec7e24407caadb3fa761ddd4c6/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 8,
      title: "Woof Stairs 3-Step Dog Steps - Cream",
      description:
        "Woof Stairs are designed for puppies, small to medium dog breeds as well as senior dogs who struggle to move on and off the bed.",
      price: 1199,
      image:
        "https://media.takealot.com/covers_tsins/57157186/57157186-4-zoom.jpeg",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 9,
      title: "Casa-cart Bar Cart",
      description: "Serving Bar Cart on Wheels with Storage and Steel Frame",
      price: 780,
      image:
        "https://media.takealot.com/covers_images/9711dd85e0bb4afeb5473cf0bdc335c1/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
    {
      id: 10,
      title: "Xiaomi Smart Humidifier 2",
      description:
        "Enjoy fresh mountain air in the comfort of your own home with the Xiaomi Smart Humidifier 2.",
      price: 1340,
      image:
        "https://media.takealot.com/covers_images/ed7bc984e60e473faa4210405e0e525e/s-zoom.file",
      colors: ["Black", "White", "Blue"],
    },
  ];
