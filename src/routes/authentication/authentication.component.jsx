import { 
    // signInWithGoogleRedirect
} from "../../utils/firebase/firebaje.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

//Everything with {/*  */} is used for Google Redirect sign in method

const Authentication = () => {
    
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
    return(
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
            {/* <button onClick={signInWithGoogleRedirect} > 
                Sign in with google redirect
            </button> */}
        </div>
    );
};


export default Authentication;