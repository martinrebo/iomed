import React from 'react'
import SignIn from '../components/Login/SignIn'
import { auth } from '../utils/firebase'
import LayoutHome from '../components/Layout/LayoutHome'

import Weather from './Weather'

export default function Home() {
    let user;

    auth.onAuthStateChanged(function (LoggedUser) {
        return (LoggedUser ? user = LoggedUser : user = false)
    })

    return (
        <>
            { user ?
                <Weather /> :
                <LayoutHome
                    Pagetitle="Weather App"
                    Login={(<SignIn />)} />
            }
        </>
    )

}
