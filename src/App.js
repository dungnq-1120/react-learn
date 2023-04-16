import { useState } from "react";
import "./App.css";
function App() {
  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    userNameError: "",
    passwordError: "",
  });

  function changeValueForm(value, key) {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  }

  function handleSubmit() {
    let isValid = true;
    let errors = {
      ...formErrors,
    };
    if (!formValue.userName) {
      errors.userNameError = "user name is Require";
      isValid = false;
    } else {
      errors.userNameError = "";
    }
    // password
    if (!formValue.password) {
      errors.passwordError = "password is Require";
      isValid = false;
    } else {
      errors.passwordError = "";
    }
    setFormErrors(errors);

    if (isValid) {
      console.log("dang nhap thanh cong");
    }
  }

  return (
    <div>
      <div className="p-3">
        <label className="w-[100px]">User Name</label>
        <input
          type="text"
          className="input-default"
          value={formValue.userName}
          onChange={(e) => changeValueForm(e.target.value, "userName")}
        />
        <span className="text-red-500">{formErrors.userNameError}</span>
      </div>
      <div className="p-3">
        <label className="w-[100px]">password</label>
        <input
          type="password"
          className="input-default"
          value={formValue.password}
          onChange={(e) => changeValueForm(e.target.value, "password")}
        />
        <span className="text-red-500">{formErrors.passwordError}</span>
      </div>
      <button
        className="mx-[100px] input-default"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
