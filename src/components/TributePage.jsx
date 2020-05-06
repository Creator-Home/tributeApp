import React from 'react'
import Header from "./Header";
import FirstTribute from './FirstTribute/FirstTribute';
import SecondTribute from './SecondTribute/SecondTribute';
import ThirdTribute from './ThirdTribute/ThirdTribute';






export default function TributePage() {

    return (
        <div>
            <Header/>
            <FirstTribute/>
           <SecondTribute/>
           <ThirdTribute/>
        </div>
    )
}


