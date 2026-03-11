import React, { useState } from 'react';
import 'C:\\Users\\Ashutosh\\OneDrive\\Desktop\\love babbar\\tutorial\\src\\components\\Testimonial.css';
import Card from './Card';
import { FaCircleChevronLeft,FaCircleChevronRight } from 'react-icons/fa6';



function Testimonial(props){
  const reviews=props.data
   const [index,setindex]=useState(0);
  function lefthandler(){
    if(index-1<0){
      setindex(reviews.length-1)

    }
    else{
      setindex(index-1);
    }
    
   
  }
  function righthandler(){

    if(index+1>=reviews.length){
      setindex(0);
    }
    else{
      setindex(index+1);
    }
  }

  function surprisehandler(){
   let surprise= Math.floor(Math.random()*reviews.length);
   setindex(surprise);
  }
  return(
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-cenetr items-center mt-10 p-10 trasition-all duration-700'>
      <div className='text-center'>
         <h1 className='text-4xl font-bold'>our testimonial</h1>

      </div>
     
      <Card  reviews={reviews[index]}> </Card>
       <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center">
    <button onClick={lefthandler}
    className="cursor-pointer hover:text-violet-500  ">
      <FaCircleChevronLeft />
    </button>
  </div>
  <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center">
  <button onClick={righthandler} className="cursor-pointer hover:text-violet-500  ">
      <FaCircleChevronRight />
    </button>
  </div>
  <div>
    <button onClick={surprisehandler}
    className="bg-violet-400 hover:bg-violet-500 tranititon-all duration-200 cursor-pointer px-10 py-2 rounded-md font-boldt text-white text-lg">surprise me</button>
  </div>
    </div>
  )
}
    
export default Testimonial;