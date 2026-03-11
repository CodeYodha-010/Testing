import { useState } from "react";
import "./Card.css";
// import {FcLike} from 'react-icons';
// import {FaQuoteLeft ,FaQuoteRight} from 'react-icons/fc';
import { FaQuoteRight,FaQuoteLeft,FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
import Testimonial from "./Testimonial";
 // separate style file imported into the component [web:32]



export default function Card(props) {
  let reviews=props.reviews;
  // const[readmore,setReadmore]=useState(false);
  // const ninfo= readmore ? info:`${info.substring(0,10)}....`
  
  function read(){
    setReadmore(!readmore);
  }
  
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute">
       <img  src={reviews.image} className='aspect square  rounded-full-w-[140px] h-[140px] z-25'></img>
       <div className="w-[144px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[20] left-[10px]" >

      </div>
      </div>
      

      
      <div className="text-center mt-7">
        <p className="fonnt-bols text-2xl capitalize">{reviews.name}</p>
      </div>
  <div className="text-center mt-7">
    <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
    
  </div>
  <div className="text-violet-400 mx-auto mt-5">
   <FaQuoteLeft />
  </div>
  <div>
    {reviews.review}
  </div>
  <div className="text-violet-400 mx-auto mt-5">
    <FaQuoteRight />
  </div>
 
    </div>

   
  );
}
