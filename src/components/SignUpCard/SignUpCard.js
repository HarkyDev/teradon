import React from 'react'
import { useState } from 'react'
import './index.css'
import { Button } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from '@firebase/auth';
import {auth} from '../../firebaseConfig'


function SignUpCard() {

const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState('')

const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

  return (
    <div className="signUpFormContainer">
      <div>
        <h2> Sign Up </h2>
      </div>
      <form className="signUpForm">
        <div className="inputContainer">
          <PersonIcon className="signUpFormIcon" />
          <input
            className="formUsername"
            name="username"
            placeholder="Username"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          ></input>
        </div>

        <div className="inputContainer">
          <PasswordIcon className="signUpFormIcon" />
          <input
            className="formPassword"
            name="password"
            type="Password"
            placeholder="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          ></input>
        </div>

        <div>
          <Link to="/login" className="signUpLoginLink">
            <p>Already have an account?</p>
          </Link>
        </div>
        <Button
          className="signUpSubmitBtn"
          type="button"
          onClick={register}
          fullWidth
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default SignUpCard