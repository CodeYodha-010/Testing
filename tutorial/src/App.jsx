import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Testimonial'
import Card from './components/Card'
import NewProduct from './components/NewProduct'
import Increment from './components/Increment'
import  data from './data'
import Tours from './components/Tours'
import Testimonial from './components/Testimonial'
import Heelo from './components/Heelo'
// import Filter from './components/Filter'
// import { ToastContainer } from 'react-toastify'
// import "react-toastify/ReactToastify.css"

function App(props) {
  const[Formdata,setFormdata]=useState({
    Firstname:"",
    lastname:"",
    mobile:"",
    isVisible:true,
    mode:"",
    fav:"",
  })
  function changeHandler(event){
   const{name,value,checked,type}=event.target
  
   
    
    setFormdata(prev => {
      return {
        ...prev,
        [name]: type==='checkbox'? checked:value
      }
    })
     console.log(Formdata);


  }

  function submithandler(event){
    event.preventDefault()
    console.log(Formdata);
    
  }
//   const[courses,setCoursed]=useState(null)
// useEffect(() => {
//   const fetchData = async () => {
//     try{
//       const res=await fetch(api)
//       const show=await res.json()
//       setCoursed(show.data)

//     }
//     catch(error){
//       toast.error("wrong ")

//     }
//   }
//   fetchData()
// },[]);



   

  
  

//    const[tours,setTours]=useState(data)
  
// function removetours(id){
//   const newtours=tours.filter(tour => tour.id !=id);
//   setTours(newtours)
    
//   }
//   useEffect( ()=>{
//     console.log("ashutosh");
    
//   })
//   if(tours.length==0){
//     return(
//       <div>
        
        
//         <h2>no tours left</h2>
//         <button  className='btn-white'onClick={() => setTours(data)}>
//           refresh
//         </button>
//       </div>
//     )
//   }
  return (
    <div>

    {/* <Increment /> */}
    {/* <NewProduct />
    <Item name='tide' > hello kasie ho bhail log </Item> */}
    {/* <Card  ></Card> */}
    {/* <Tours tours={tours} removetours={removetours}></Tours> */}
    
{/* <Filter filterdata={filterdata} /> */}

{/* <Testimonial data={data} /> */}
{/* <Card reviews={data}></Card> */}
<Heelo />

<form onSubmit={submithandler}>
  <input type='text '
   placeholder='first name'
   onChange={changeHandler}
   name='Firstname'

  />
  <input type='text '
   placeholder='last name'
   onChange={changeHandler}
   name='lastname'

  />
  <input type='text '
   placeholder='mobile name'
   onChange={changeHandler}
   name='mobile'

  />

  <input 
  type='radio'
  onChange={changeHandler}
  name='mode'
  value='Online-mode'
  id='Online-mode'
  checked={Formdata.mode==='Online-mode'}
  />
  <label htmlFor='online-mode'> am i visible</label>
  <br/>
  <br/>
   <input 
  type='radio'
  onChange={changeHandler}
  name='mode'
  value='Offline-mode'
  id='Offline-mode'
  checked={Formdata.mode==='Offline-mode'}
  />
  <label htmlFor='offline-mode'> am i visible</label>

  <select 
  name="fav"


     id='fav'
     value={Formdata.fav}
     onChange={changeHandler}>
      <option vlaue="swift">swift

      </option>
      <option value="defender">defender</option>
      <option value="scorpio">scorpio</option>
      <option value="BMW">Bmw</option>
      <option value="porsche">porche</option>
      <option value="lamborgini">lamborgini</option>
     
    
   
  </select>
<button>submit</button>

  </form>
    
     </div>
 
    
  )
}


export default App







{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      <item></item> */}
    