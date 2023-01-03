import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


    };
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-full md:w-2/4 lg:w-1/3 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form>
                    <input type="text" placeholder="Product Name" className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" placeholder="Price" className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" placeholder="Details" className="input input-bordered input-secondary w-full max-w-xs" />
                    <input className='btn w-full mt-3' type="submit" />
                </form>


            </div>
        </div>
    );
};

export default AddProduct;