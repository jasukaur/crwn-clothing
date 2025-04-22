import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <p>Please sign in to access your account.</p>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
      <p>Don't have an account? Sign up now!</p>
    </div>
  );
};

export default SignIn;
