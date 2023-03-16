// import { Button } from 'bootstrap';
import React,{useState} from 'react';
import { createElement } from 'react';
import Memories from './Memories';




const Gallary = () => {
const [state,setState]=useState();

    const h1=createElement("img",{src:'./assets/img/car.gif',height:'400px',width:"100%"})
    const inputHandler=()=>{
        setState(h1)

    }
    return (
        <>
            <div className='mt-2' style={{width:'100vw',height:"100vh"}}>
            <h1 data-aos="zoom-in" style={{color:"white"}} >Gallary</h1>
            <div className='mt-3'>{state}</div>
            <button data-aos="zoom-in" className='btn btn-primary' onClick={inputHandler}>Show More..</button>
            </div>
            <Memories/>
        </>        
    );
}

export default Gallary;
