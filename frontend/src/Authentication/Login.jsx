import React, { useState } from "react";
import * as Mui from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!formData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters with at least one uppercase and one lowercase letter";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your login logic here
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  return (
    <div className="container-fluid bg-slate-50 py-10 h-svh">
      <div className="container-row justify-center content-center flex-start items-center m-auto">
        <div className="col-lg-1 max-md:block hidden max-sm:block mt-0">
          {" "}
          <h3 className="text-[50px] font-serif font-bold text-slate-800 mb-10 mt-8">
            OrderNow
          </h3>
        </div>
        <div className="col-lg-5 col-md-9 max-sm:w-full">
          <div className="login-form bg-base-100 max-sm:p-10  p-16 border rounded-xl shadow-lg  ">
            <h3 className="text-3xl font-semibold text-slate-800 ">Login</h3>
            <p className="my-2 text-slate-500">
              Don't have an account?
              <a
                href="#"
                className="font-semibold text-slate-600 hover:text-slate-800 hover:underline"
              >
                {" "}
                Register
              </a>
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center flex-col mt-5"
            >
              <TextField
                fullWidth
                className="!border-slate-700 "
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors.username}
                margin="normal"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                  "& .MuiInputBase-formControl": { borderRadius: "10px" },
                  "& .MuiInputBase-input": {
                    paddingBottom: "10px",
                    paddingTop: "22px",
                  },
                  "& .MuiInputLabel-shrink": {
                    transform: "translate(12px, 9px) scale(0.75)",
                    paddingBottom: "10px",
                  },
                  "& .Mui-focused": {
                    color: "rgb(2 132 199) !important",
                  },

                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(2 132 199)",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                margin="normal"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                  "& .MuiInputBase-formControl": { borderRadius: "10px" },
                  "& .MuiInputBase-input": {
                    paddingBottom: "10px",
                    paddingTop: "22px",
                  },
                  "& .MuiInputLabel-shrink": {
                    transform: "translate(12px, 9px) scale(0.75)",
                    paddingBottom: "10px",
                  },
                  "& .Mui-focused": {
                    color: "rgb(2 132 199) !important",
                  },

                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(2 132 199)",
                    },
                  },
                }}
              />
              <div className="form-control float-end flex-row w-full">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checked:!bg-slate-600"
                  />
                  <span className="label-text ml-5">Remember me</span>
                </label>
              </div>
              <button
                type="btn"
                className="mt-5 rounded-full p-0 font-semibold w-full  bg-slate-700 btn hover:bg-slate-600 text-slate-100 overflow-hidden"
              >
                <Mui.ListItemButton
                  className="!flex !justify-center"
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    padding: "0px 20px",
                  }}
                >
                  Continue
                </Mui.ListItemButton>
              </button>
              <label className="label mt-3">
                <a
                  href="#"
                  className="label-text-alt link link-hover hover:!text-slate-800"
                >
                  Forgot password?
                </a>
              </label>
            </form>
          </div>
        </div>
        <div className="col-lg-6 lg:block hidden">
          <div className=" p-16 dtl-login">
            <h3 className="text-[50px] font-bold font-serif text-slate-800">
              OrderNow
            </h3>
            <p className="p-2 text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio adipisci eveniet, sunt officia praesentium maiores
              suscipit, iure unde consequatur, esse et laborum! Sed et
              architecto, totam eum tempore nemo odit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}