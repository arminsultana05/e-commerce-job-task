import React, { useEffect, useState } from 'react';

const InputField = () => {
    const [product, setProduct] = useState([])
    const [query, setQuery]= useState("")
   
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    })
   
    return (
        <div className="flex justify-between mid-container ">
       <div className="flex gap-2">
       <div class="form-control gap-2">
             <div class="input-group">
                 <select class="select select-bordered">
                     <option disabled selected>- Hoodies</option>
                     {
                        product.map(p=><option key ={p.id}>{p.name}</option>)
                     }
                     
                    
                 </select>
               
             </div>
         </div>
        <div class="form-control ">
             <div class="input-group">
                 <select class="select select-bordered">
                     <option className='text-bold' disabled selected>Size</option>
                     {
                        product.filter(p=>p.name.toLowerCase().includes(query)).map(p=><option key ={p.id}>{p.size}</option>)
                     }
                    
                     
                 </select>
               
             </div>
         </div>
       
       </div>
       <div className="mr-52 flex gap-2">
        <div className="">
            <span className="mr-2">Search:</span>
             <input type="text" placeholder="Search" class="input input-bordered " onChange={(e)=>setQuery(e.target.value)} /></div>
        
         <button className='bg-info text-white px-5 py-2'>Add To Cart</button>
         </div>
        </div>
    );
};

export default InputField;