import React from "react";
import '../styles/HomeSub.styles.css'
import Image1 from '../media/HomeSub/Image1.png.webp'
import Image2 from '../media/HomeSub/Image2.jpg.webp'
import Image3 from '../media/HomeSub/Image3.jpg'

export default function HomeSub() {
    return (
        <div className='home-sub'>
            <div className='home-sub-col' id='home-sub-col1'>
                <h1>Build Guides</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Elit ut aliquam purus 
                    sit amet luctus venenatis lectus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tristique senectus et netus et malesuada fames ac turpis. Eu sem integer vitae 
                    justo. Purus sit amet volutpat consequat. Leo a diam sollicitudin tempor id eu. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Ipsum dolor sit amet consectetur 
                    adipiscing elit duis tristique sollicitudin. Ridiculus mus mauris vitae ultricies leo. Sit amet porttitor eget dolor morbi non arcu.
                </p>
            </div>
            <div className='home-sub-col' id='home-sub-col2'>
                <div className='home-sub-card'>
                    <p className='home-sub-card-title'>Intel Core X-series Processors</p>
                    <p>Unlocked CPUs that deliver up to 18 cores for the most extreme gaming, creative production, and multi-tasking.</p>
                    <div className='home-sub-card-img-con'>
                        <img src={Image1} alt='' />
                    </div>
                    <div className='home-sub-card-info-con'>
                        <button>View more</button>
                        <p>$579.99</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Elit ut aliquam purus 
                            sit amet luctus venenatis lectus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tristique senectus et netus et malesuada fames ac turpis.
                        </p>
                    </div>
                </div>
            </div>
            <div className='home-sub-col' id='home-sub-col3'>
                <div className='home-sub-card'>
                    <p className='home-sub-card-title'>Part Finder</p>
                    <p>Search and find the best PC components for you!</p>
                    <div className='home-sub-card-img-con'>
                        <img src={Image2} alt='' />
                    </div>
                    <div className='home-sub-card-info-con'>
                        <button>View more</button>
                        <p>$779.99</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Elit ut aliquam purus 
                            sit amet luctus venenatis lectus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tristique senectus et netus et malesuada fames ac turpis.
                        </p>
                    </div>
                </div>
            </div>
            <div className='home-sub-col' id='home-sub-col4'>
                <div className='home-sub-card'>
                    <p className='home-sub-card-title'>Checkout Completed Builds</p>
                    <p>Check out some of our popular and already completed builds, ready to be shipped right to your doorstep.</p>
                    <div className='home-sub-card-img-con'>
                        <img src={Image3} alt='' />
                    </div>
                    <div className='home-sub-card-info-con'>
                        <button>View more</button>
                        <p>$1899.99</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Elit ut aliquam purus 
                            sit amet luctus venenatis lectus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tristique senectus et netus et malesuada fames ac turpis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}