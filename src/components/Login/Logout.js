import React from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../utils/firebase'

import {
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';

export default function Logout() {

    let history = useHistory()
    const handleLogOut = () => {
        auth.signOut().then(function () {
            // Sign-out successful.
            console.log("user out")
            history.push("/")
        }).catch(function (error) {
            // An error happened.
            console.log(error)
        });
    }



    return (

        <EuiFlexItem grow={false}>
            <EuiButton onClick={handleLogOut}>Log Out</EuiButton>
        </EuiFlexItem>
    )
}
