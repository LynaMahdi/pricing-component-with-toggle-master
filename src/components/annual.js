import './annual.css'
import React from 'react'
import { useState } from 'react'
import des1 from '.././bg-bottom.svg'
import des2 from '.././bg-top.svg'


const Annual=()=>{

    const [annual,setAnnual]=useState(false)
    
    const Toggle=()=>{
        if(annual===true){
            setAnnual(false)
        }else{setAnnual(true)}
        console.log({annual})
        if(annual===false){
            document.getElementById("bt").style.left="20px"
        }else{
            document.getElementById("bt").style.left="3px"
        }
    }

    return(
        <>
            
            <img className="droite" src={des2} alt="des1"/>    
            <img className="gauche" src={des1} alt="des1"/>
            <p>Our Pricing</p>
            <label1>Annually</label1>
            <label1 style={{left:`762px`}}>Monthly</label1>
            <div className='Switcher'>
                <div id="bt" className='boule' onClick={Toggle} ></div>
            </div>
          
            <div className='container'>
                <h1>Basic</h1>
                {annual===true?  <> <h3>$</h3> <h2> 19.99 </h2></> : <> <h3>$</h3> <h2> 199.99 </h2></> }                
                <line style={{top:`205px`}}></line>
                <h4>500 GB Storage</h4>
                <line style={{top:`250px`}} ></line>
                <h4 style={{top:`250px`}} >2 Users Allowed</h4>
                <line style={{top:`300px`}} ></line>
                <h4 style={{top:`300px`}} >Send up to 3 GB</h4>
                <line style={{top:`350px`}} ></line>
                <btn><label>Learn More</label></btn>
            </div>
            <div className='container' style={{left:`950px`}}>
                <h1>Master</h1>
                {annual===true ?  <> <h3>$</h3> <h2> 39.99 </h2></> : <> <h3>$</h3> <h2> 399.99 </h2></> }
                <line style={{top:`205px`}}></line>
                <h4>2 TB Storage</h4>
                <line style={{top:`250px`}} ></line>
                <h4 style={{top:`250px`}} >10 Users Allowed</h4>
                <line style={{top:`300px`}} ></line>
                <h4 style={{top:`300px`}} >Send up to 20 GB</h4>
                <line style={{top:`350px`}} ></line>
                <btn><label>Learn More</label></btn>
            </div>
            <div className='container' style={{left:`585px` , height:`500px` , top: `218px` , backgroundImage: `linear-gradient(hsl(236, 72%, 79%) ,hsl(237, 63%, 64%))`}}>
                <h1 style={{color:`white`, left:`110px` ,top:`40px`}}>Professional</h1>
                {annual===true ?  <> <h3 style={{color:`white` , top:`80px`}}>$</h3>
                <h2 style={{color:`white`, top:`40px`}}> 24.99 </h2></> : <> <h3 style={{color:`white` , top:`80px`}}>$</h3>
                <h2 style={{color:`white`, top:`40px`}}> 249.99 </h2></> }
                
                <line style={{top:`225px`}} ></line>
                <h4 style={{color:`white`, top:`220px`}}>1 TB Storage</h4>
                <line style={{top:`270px`}} ></line>
                <h4 style={{color:`white`, top:`270px`}}>5 Users Allowed</h4>
                <line style={{top:`320px`}} ></line>
                <h4 style={{color:`white`, top:`320px`}}>Send up to 10 GB</h4>
                <line style={{top:`370px`}} ></line>
                <btn style={{top:`390px`,backgroundImage:` linear-gradient(to right, white , white)`}}><label style={{color:`hsl(237, 63%, 64%)`}}>Learn More</label></btn>
                
            </div>

      </>
    )
}


export default Annual;