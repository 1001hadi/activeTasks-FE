import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/inputs/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AuthLayout>
        <div className="lg:w-[70% h-3/4 md:h-full flex flex-col justify-center">
          <h3 className="text-xl front-semibold text-black">
            Welcome To Active Tasks
          </h3>
          <p className="text-md text-slate-700 mt-[5px] mb-6">
            Enter your credentials to login
          </p>
          <form onSubmit="handleLogin">
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
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
