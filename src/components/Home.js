import React from "react";
import '../styles/Home.styles.css';
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeSub from "./HomeSub";

export default function Home() {
    return (
        <>
            <HomeHeader />
            <HomeMain />
            <HomeSub />
        </>
    );
}