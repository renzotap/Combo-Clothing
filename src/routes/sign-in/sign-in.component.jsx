import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebaje.utils";

const SignIn = () => {
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
        </div>
    );
};


export default SignIn;