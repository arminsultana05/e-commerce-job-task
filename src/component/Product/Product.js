import React, { useEffect, useState } from 'react';

const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <div className="">
           <div className="flex">
           <div class="form-control mid-container">
                <div class="input-group">
                    <select class="select select-bordered">
                        <option disabled selected>Pick category</option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                    </select>
                  
                </div>
            </div>
           <div class="form-control mid-container">
                <div class="input-group">
                    <select class="select select-bordered">
                        <option disabled selected>Pick category</option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                    </select>
                  
                </div>
            </div>
           </div>


            <div class="overflow-x-auto w-full mid-container mt-20">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Buy</th>

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
                                <td className='text-primary'>{p.name}</td>
                                <td>{p.color}</td>
                                <td>{p.Stock}</td>
                                <td>{p.price}</td>

                            </tr>)
                        }

                        {/* <!-- row 2 --> */}

                    </tbody>
                    {/* <!-- foot --> */}


                </table>
            </div>
        </div>
    );
};

export default Product;