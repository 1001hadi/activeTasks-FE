import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { validateEmail } from "../../utilities/helper";
import AddProfileImg from "../../components/inputs/AddProfileImg";
import Input from "../../components/inputs/Input";

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
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
