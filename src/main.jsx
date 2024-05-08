import ReactDom from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import Article from './composants/Article'
import PageError from './composants/PageError'
import Contact from './composants/Contact'
import Emploi from './composants/Emploi'
import Error404 from './composants/Error404'
import Protege from './composants/Protege'
const route = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageError/>
    },
    {
        path: "propos",
        element: (
        <>
       <h1>ok ouiiiiii</h1>
    <Link to="/">retour a acceuil</Link>
    <div style={{
        display: "flex",
        gap: '1rem',
    }}>
        <Link to='/propos/contact'>Contact</Link>
        <Link to='/propos/emploi'>Emploi</Link>
    </div>
    <div>
        <Outlet/>
    </div>
    </>),
    children:[
        {
            path: "/propos/contact",
            element: <Contact/>
        },

        {
            path: "/propos/emploi",
            element: 
                <div>
                <Protege estConnect={true}>
                <Emploi />
                
                </Protege>
           
            </div>
        }
    ]
    },
    {
        path: "blog",
        element: <>
            <h1>Liste des articles</h1>
            <Link to="/blog/200">Article 1</Link>
        </>
    },
    {
        path:"/blog/:id",
        element:<>
            <Article/>
        </>
    },
    {
        path: "*",
        element: <Error404/>
    }
]);

ReactDom.createRoot(document.getElementById("roots")).render(

<React.StrictMode>

<RouterProvider router={route}/>

</React.StrictMode>
);