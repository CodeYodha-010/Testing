
import { useState } from 'react';
import './ProductForm.css'

function ProductForm(){

  const[title,setTitle]=useState("")
  const[date,setdate]=useState("")
  function titlechanger(event){
    setTitle(event.target.value);
    
    
  }

  function datechanger(event){
    setdate(event.target.value);
    console.log("printing");
    
    console.log(title);
    
    console.log(date);

    
    
  }

  function prevent(event){
    event.preventDefault();

    const product={
      name:title,
      tarikh:date

    }
    console.log(product);
    setTitle("")
    setdate("")
    

  }
  return(
    <>
    <form onSubmit={prevent}>
    <div className='newtitle'>
    <label>title</label>
    <input type="text" value={title} onChange={titlechanger}></input>
    </div>
    <div className='newdate'>
      <label>Date</label>
    <input type="date" value={date} min='2025-01-01' max =' 2023-12-12' onChange={datechanger}></input>
    </div>
    <div>
      <button type="submit">add to cart</button>
      </div>
    
    </form>
    </>
  )
}


export default ProductForm;