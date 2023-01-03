import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../layouts/Main";
import AddProduct from "../pages/add_product/AddProduct";
import ProductsView from "../pages/all_product/ProductsView";
import HomeView from "../pages/home/HomeView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomeView />
            },
            {
                path: 'all_product',
                element: <ProductsView />
            },
            {
                path:'add_product',
                element:<AddProduct/>
            }
        ]
    },
    {
        path:'*',
        element:<div>No page found!!<br/> Go to <Link to="/" className="underline text-primary">home page</Link></div>
    }
])

export default router;