import React from 'react'
import { useState } from 'react'
import './index.css'
import { Button } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";


function SignUpCard() {

const [formData, setFormData] = useState({
  username: "",
  displayname: "",
  password: "",
  email: ""
});

const onChangeHandler = (event) => {
  setFormData(() => ({
    ...formData,
    [event.target.name]: event.target.value,
  }));
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
            onChange={onChangeHandler}
          ></input>
        </div>

        <div className="inputContainer">
          <PasswordIcon className="signUpFormIcon" />
          <input
            className="formDisplayName"
            name="displayname"
            placeholDer="Display name"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="inputContainer">
          <AlternateEmailIcon className="signUpFormIcon" />
          <input
            className="formPassword"
            name="password"
            type="Password"
            placeholder="password"
            onChange={onChangeHandler}
          ></input>
        </div>

        <div className="inputContainer">
          <MailOutlineIcon className="signUpFormIcon" />
          <input
            className="formEmail"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler}
          ></input>
        </div>
        <Button
          className="signUpSubmitBtn"
          type="button"
          onClick={() => console.log(formData)}
          fullWidth
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default SignUpCard