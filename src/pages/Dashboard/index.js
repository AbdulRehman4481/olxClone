import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Product from './Product'
export default function Index() {
    return (
        <>
            <Routes>
                <Route path='product' element={<Product />} />
            </Routes>
        </>
    )
}
