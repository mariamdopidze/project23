import React from 'react';
import './Main.css';
import Photo  from  '../Images/lemon.png'
import Photoo from '../Images//yellow.png'
import Photoes from '../Images/leaf.png'
import Photos from '../Images/raspberry.png'
import Photto from'../Images/tommato.png'
import Photoe from '../Images/cerrot.png'




function Main (){
    return (
        <main className= "main">
            <div className= 'container'>
             <div className="gallery"> 
            <img src ={Photo} alt="loading"/> 
            <h5>Green & Tasty Lemon</h5>
            <p>Fruits</p>
            </div> 
            <div className="gallery"> 
            <img src ={Photoo} alt="loading"/>
            <h5>Green & Tasty Lemon</h5>
            <p>Fruits</p>
            </div> 
            <div className="gallery">
            <img src ={Photoes} alt="loading"/>
            <h5>Green & Tasty Lemon</h5>
            <p>Fruits</p>
            </div>
            <div className="gallery">
            <img src ={Photos} alt="loading"/>
           <h5>Green & Tasty Lemon</h5>
            <p>Fruits</p> 
            </div>
            <div className="gallery">
            <img src = {Photto} alt ="loading"/>
           <h5>Green & Tasty Lemon</h5>
            <p>Fruits</p>
            </div>
            <div className="gallery">
            <img src ={Photoe} alt ="loading"/>
           <h5>Green & Tasty Lemon</h5>
            <p>Fruits</p>
            </div>
            </div>
           
        </main>
    )
}

export default Main;