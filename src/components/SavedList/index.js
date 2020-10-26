import React, { useState, useEffect, useContext } from 'react'
import { auth, firestore } from '../../utils/firebase'
import SavedListUI from './SavedListUI'
import PropTypes from 'prop-types'

import { store } from '../../store/store'


const SavedList = ({ uid }) => {


    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [list, setList] = useState([])


    useEffect(() => {
        auth.onAuthStateChanged(function (LoggedUser) {
            if (LoggedUser) {
                firestore.collection("users").doc(LoggedUser.uid)
                    .onSnapshot(function (doc) {
                        console.log("Current data: ", doc.data());
                        let results = doc.data().savedSearches
                       if (results?.length > 0) {
                           setList(doc.data().savedSearches)}
                        else {
                            console.log("No saved searches")
                        }

                    });
            } else {
                console.log("user not Logged in")
                return []
            }

        })
    }, [])

    const handleClick = (e) => {
        let item = JSON.parse(e.currentTarget.dataset.item)
        dispatch({ type: "SET_CURRENT_SELECTION", payload: [item] })

    }



    return (
        <>
            {list?.length > 0 ? <SavedListUI list={list} onClick={handleClick} /> : "No Saved Results"}

        </>
    )
}

SavedList.propTypes = {
    uid: PropTypes.string,

}
export default SavedList;