import React, { useEffect, useState } from 'react';
import InputField from '../InputField';
import { BsCart3 } from 'react-icons/bs';

const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <div className="mt-20">
            <InputField></InputField>
          


            <div class="overflow-x-auto w-full mid-container ">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <div className="w-full">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Buy</th>
                            </div>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(p => <tr>

                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={p.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className='text-info'>{p.name}</td>
                                <td>{p.color}</td>
                                <td>{p.Stock}</td>
                                <td>{p.price}</td>
                                <div className="ml-21">
                                <td>
                                <button className='bg-base-200 px-5 py-1 '>1</button></td>
                                <td><button class="btn btn-sm "><BsCart3></BsCart3></button></td>
                                <td>   <input type="checkbox" class="checkbox"/></td>
                                </div>

                            </tr>)
                            
                            
                            
                        }

                     

                    </tbody>
                    {/* <!-- foot --> */}


                </table>
            </div>
        </div>
    );
};

export default Product;