// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth, uiConfig } from '../../utils/firebase'


export default function SignIn() {




    return (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={ auth } />
    );

}
