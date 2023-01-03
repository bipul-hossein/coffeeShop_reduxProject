import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductsView = () => {
   const products = useSelector((state) => state.productsReducer.products);
    console.log(products)
    return (
        <div className='w-11/12 mx-auto'>
            <h2>List of Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product,i) => {
                                const { title, price } = product
                                return (
                                    <tr key={i}>
                                        <td></td>
                                        <td>{title}</td>
                                        <td>{price}</td>
                                        <td>
                                            <Link to="/edit-book">
                                                <button>Edit</button>
                                            </Link>
                                            <button
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsView;