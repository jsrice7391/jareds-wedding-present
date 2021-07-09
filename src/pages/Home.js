import React from "react";
import {JaredTimeline} from "../comps/Timeline";
import { TotalBlock } from "../comps/Total"


export const Home = () => {
    return <div>
        <h1>Welcome to Jared's Wedding Present.com</h1>
        <h3>If you are here, you know that Jared's friends and brothers are trying to help him with the adoption process of Kenzie.</h3>
        <h3>If you are here, you want to find out the status on how the adoption is going and if you can possibly help with covering the legal fees</h3>
        <h3>This website will show you those two things.</h3>
        <h3>If you have any questions, please email <a href = "mailto: jsrice7391@gmail.com">Justin Rice</a></h3>
        <TotalBlock total="$2000"/>
        <JaredTimeline/>
    </div>
}