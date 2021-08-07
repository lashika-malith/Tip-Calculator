import React from 'react'
import './clac.css'
import logo from './logo.svg'
import {Collector} from './Collector'

export default function Calc() {
   
    return (
        <div className="content">

         <img alt='logo' className="Logo" src={logo}></img>
            <div className="calc-box">
                <div>
                 <Collector/>        
                </div>
            </div>
        </div>
    )
}
