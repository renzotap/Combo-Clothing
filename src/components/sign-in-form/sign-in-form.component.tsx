import { useState, FormEvent, ChangeEvent  } from "react"
import { useDispatch } from "react-redux";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,

} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles'
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";


const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
  const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password } = formFields;

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
      dispatch(googleSignInStart())
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try{
        dispatch(emailSignInStart(email, password))
        resetFormFields();

      }catch(error){
        switch(error){
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    };

    return (
      <SignInContainer>
        <h2> Already have an account?</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={ handleSubmit}>
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
          <ButtonsContainer>
            <Button type="submit"> Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              // type='button'
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </Button>{" "}
            {/* Here is giving error when not signing in after a certain time */}
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
}
export default SignInForm