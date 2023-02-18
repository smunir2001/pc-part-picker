import React from "react";
import '../styles/HomeSub.styles.css'
import Image1 from '../media/HomeSub/Image1.png.webp'
import Image2 from '../media/HomeSub/Image2.jpg.webp'
import Image3 from '../media/HomeSub/Image3.jpg'

export default function HomeSub() {
    return (
        <div className="home-sub">
            <div className="home-sub-col" id='home-sub-col1'>
                <h1>Build Guides</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Elit ut aliquam purus 
                sit amet luctus venenatis lectus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tristique senectus et netus et malesuada fames ac turpis. Eu sem integer vitae 
                justo. Purus sit amet volutpat consequat. Leo a diam sollicitudin tempor id eu. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Ipsum dolor sit amet consectetur 
                adipiscing elit duis tristique sollicitudin. Ridiculus mus mauris vitae ultricies leo. Sit amet porttitor eget dolor morbi non arcu. Orci dapibus ultrices in iaculis nunc sed 
                augue lacus viverra.
                </p>
            </div>
            <div className="home-sub-col" id='home-sub-col2'>
                <div className="home-sub-card"></div>
                <img src={Image1} alt='' />
            </div>
            <div className="home-sub-col" id='home-sub-col3'>
                <div className="home-sub-card"></div>
                <img src={Image2} alt='' />
            </div>
            <div className="home-sub-col" id='home-sub-col4'>
                <div className="home-sub-card"></div>
                <img src={Image3} alt='' />
            </div>
        </div>
    );
}