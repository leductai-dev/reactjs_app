import React from 'react'
import HomePage from './pages/HomePage/HomePage.js'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductsActionPage from './pages/ProductActionPage/ProductsActionPage.js';
import ProductListPage from './pages/ProductListPage/ProductListPage.js';

const routes = [
    {
        path: '/',
        exact : true,
        page: () => <HomePage/>
    },
    {
        path: '/x',
        exact : false,
        page: () => <NotFoundPage/>
    },
    {
        path: '/products-list',
        exact : false,
        page: () => <ProductListPage/>
    },
    {
        path: '/addProducts',
        exact : false,
        page: ({history}) => <ProductsActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact : false,
        page: ({match,history}) => <ProductsActionPage history={history} match={match}/>
       
    },
];

export default routes;
