import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    // signInWithGoogleRedirect
} from "../../utils/firebase/firebaje.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";



//Everything with {/*  */} is used for Google Redirect sign in method

const SignIn = () => {
    
    {/* useEffect( () => {
        
        const signInWithGoogleRedirect = async () => {
            const response = await getRedirectResult(auth);
            console.log(response);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        signInWithGoogleRedirect();

    }, []); */}

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sin In Page</h1>
            <button onClick={logGoogleUser} > 
                Sign in with google popup
            </button>
            <SignUpForm></SignUpForm>
            {/* <button onClick={signInWithGoogleRedirect} > 
                Sign in with google redirect
            </button> */}
        </div>
    );
};


export default SignIn;