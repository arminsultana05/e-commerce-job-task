import React, { useEffect, useState } from 'react';

const InputField = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <div className="flex mid-container gap-2">
        <div class="form-control ">
             <div class="input-group">
                 <select class="select select-bordered">
                     <option disabled selected>- Hoodies</option>
                     {
                        product.map(p=><option>{p.name}</option>)
                     }
                     
                    
                 </select>
               
             </div>
         </div>
        <div class="form-control ">
             <div class="input-group">
                 <select class="select select-bordered">
                     <option className='text-bold' disabled selected>Size</option>
                     {
                        product.map(p=><option>{p.size}</option>)
                     }
                    
                     
                 </select>
               
             </div>
         </div>
        </div>
    );
};

export default InputField;