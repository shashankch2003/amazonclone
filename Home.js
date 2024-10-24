import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg'
                    alt=''
                />
                <div className='home__row'>
                    <Product
                        title='Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall'
                        price={2344}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/A1DJoJwO2cL._AC._SR360,460.jpg'
                    />
                    <Product
                        title='Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall'
                        price={2344}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/A1DJoJwO2cL._AC._SR360,460.jpg'
                    />
                </div>
                <div className='home__row'>
                    <Product
                        title='Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall'
                        price={2344}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/A1DJoJwO2cL._AC._SR360,460.jpg'
                    />
                    <Product
                        title='Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall'
                        price={2344}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/A1DJoJwO2cL._AC._SR360,460.jpg'
                    />
                    <Product
                        title='Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall'
                        price={2344}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/A1DJoJwO2cL._AC._SR360,460.jpg'
                    />

                </div>
                <div className='home__row'>
                    <Product
                        title='Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall'
                        price={2344}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/A1DJoJwO2cL._AC._SR360,460.jpg'
                    />

                    
                </div>
            </div>
        </div>
    );
}

export default Home
