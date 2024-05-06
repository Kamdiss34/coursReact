import ReactDom from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import Article from './composants/Article'
import PageError from './composants/PageError'

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
       <h1>ok oui</h1>
    <Link to="/">retour</Link>
    </>),
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
    }
]);

ReactDom.createRoot(document.getElementById
    ("roots")).render(

<React.StrictMode>

<RouterProvider router={route}/>

</React.StrictMode>
);