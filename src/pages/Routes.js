import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'
import PrivateRoute from 'components/PrivateRoute'

export default function CustomRoutes() {
    return (
        <>
            <Routes>
                <Route path='/*' element={< Frontend />} />
                {/* <Route path='/*' element={<PrivateRoute Component={Frontend} />} /> */}
                {/* <Route path='/auth/*' element={<Auth />} /> */}
                <Route path='/dashboard/*' element={<Dashboard/>} />
            </Routes>
        </>
    )
}
