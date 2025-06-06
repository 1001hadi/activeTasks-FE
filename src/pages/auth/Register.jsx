import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { validateEmail } from "../../utilities/helper";
import AddProfileImg from "../../components/inputs/AddProfileImg";
import Input from "../../components/inputs/Input";
import { Link } from "react-router-dom";

const Register = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Enter full name!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email must be valid!");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password required!");
      return;
    }

    setError("");
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center ">
        <h3 className="text-xl font-semibold text-black">Create Account</h3>
        <p className="text-s text-slate-700 mt-[5px] mb-6">
          Enter your info and join
        </p>

        <form onSubmit={handleRegister}>
          <AddProfileImg image={profileImg} setImage={setProfileImg} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              value={fullName}
              label="Full Name"
              onChange={({ target }) => setFullName(target.value)}
              placeholder="First & Last"
            />
            <Input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="task@login.com"
            />

            <Input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Password min 6 characters"
            />
            <Input
              type="text"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Admin Code"
              placeholder="Enter admin invite code here"
            />
          </div>

          {error && <p className="text-red-500 text-s pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            Register
          </button>

          <p className="text-[15px] text-slate-800 mt-3">
            Already a user? go to login{" "}
            <Link className="font-medium text-primary underline" to="/login">
              here
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
