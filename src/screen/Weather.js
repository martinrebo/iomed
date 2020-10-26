import React, { useContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import Card from '../components/Card/'
import Logout from '../components/Login/Logout'
import Searchbox from '../components/Searchbox'
import SavedList from '../components/SavedList'
import { store } from '../store/store'
import { auth } from '../utils/firebase'
import Layout from '../components/Layout/LayoutWeather'



export default function Weather() {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [user, setUser] = useState()
    let history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(function (LoggedUser) {
            if (LoggedUser) {
                setUser(LoggedUser)
    
    
            } else {
                history.push('/')
            }
        })
    }, [])


    return (
            <Layout
                Pagetitle="Weather Page"
                Searchbox={(<Searchbox />)}
                Logout={(<Logout />)}
                Card={(<Card uid={user?.uid} />)}
                SearchList={(<SavedList uid={user?.uid} />)}
            />
    )
}
