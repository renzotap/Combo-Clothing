import { useState,  } from "react"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebaje.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password } = formFields;

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try{
        const {user} = await signInAuthUserWithEmailAndPassword(
          email,
          password
        )
        resetFormFields();

      }catch(error){
        switch(error.code){
          case 'auth/invalid-credential':
            alert('The user and/or password is incorrect')
            break;
          case 'auth/wrong-password':
            alert('The user password is incorrect')
            break;
          case 'auth/user-not-found':
            alert('The user is not found')
            break;
          default:
            console.log(error);
        }
        
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    };

    return (
      <div className="sign-up-container">
        <h2> Already have an account?</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          ></FormInput>
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          ></FormInput>
          <div className="buttons-container">
            <Button type="submit"> Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type='button'
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </Button> {/* Here is giving error when not signing in after a certain time */}
          </div>
        </form>
      </div>
    );
}
export default SignInForm