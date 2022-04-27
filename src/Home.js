import React from 'react';
import Product from "./Product";
import './Home.css';

    function Home() {
        return (
            <div className="home">
                <img 
                className="home__image"
                src="https://amazon.com/images/I/71+6X396igL._SX3000_.jpg"
                alt=""
                />

                {/* id do produto, titulo, preço, avaliações, imagens*/}
                <div className="home__row">
                    <Product 
                        id="10101010"
                        title="National Best Seller Winter Stroll - Elin Hilderbrand (Winter Street Book 2) Original Version" 
                        price={8.97}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/517y5hkhLPL._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
                    />
                    <Product 
                        id="10101011"
                        title="Certified Refurbished Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa" 
                        price={44.97}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51ydNSj0AiL._AC_SX184_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="10101012"
                        title="Apple iPhone 11 Pro, US Version, 512GB, Space Gray - Unlocked" 
                        price={547.00}
                        rating={5}
                        image="https://amazon.com/images/I/81x9I9qXbmL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="10101014"
                        title="Apple Watch Series 3 - Silver Aluminum Case with White Sport Band" 
                        price={147.00}
                        rating={5}
                        image="https://amazon.com/images/I/71UJtA8cFJL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="10101015"
                        title="Amazon Smart Thermostat – ENERGY STAR certified, Works with Alexa – C-wire" 
                        price={47.99}
                        rating={4}
                        image="https://amazon.com/images/I/61oJZ4W8B3L._AC_SL1000_.jpg"
                    />
                    
                </div>
                <div className="home__row">
                    <Product 
                        id="10101016"
                        title="Sceptre Curved 49 inch (5120x1440) Dual QHD 32:9 Gaming Monitor up to 120Hz DisplayPort HDMI" 
                        price={1.297}
                        rating={5}
                        image="https://amazon.com/images/I/61jZXu6Y1dL._AC_SX679_.jpg"
                    />
                </div>
                {/* produto */}

            </div>
        );
        }

export default Home