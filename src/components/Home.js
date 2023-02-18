import React from "react";
import '../styles/Home.styles.css';
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";

export default function Home() {
    return (
        <>
            <HomeHeader />
            <HomeMain />
        </>
    );
}