"use client";
import React, { useState } from "react";
import form from "./Form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const session = useSession();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({});

    router.push("/");
  };
  const handleGoogle = async () => {
    await signIn("google");
    // router.push("./home");
  };

  return (
    <>
      <div className="mt-10 border-solid border-2 border-indigo-600 w-96 m-auto p-5">
        <form onSubmit={handleSubmit}>
          <label className="block">
            <span className="block  font-medium text-slate-700 text-center text-2xl font-serif ">
              LOGIN
            </span>
            {Array.isArray(form) &&
              form.map(({ type, placeholder, formData }, i) => (
                <div key={i}>
                  <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 my-4"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={formData}
                    onChange={handleChange}
                  />
                </div>
              ))}
          </label>
        </form>
        <div>
          <button
            type="submit"
            className="bg-indigo-500 p-3 rounded-md   w-80 my-3
          "
            onClick={handleSubmit}
          >
            Login
          </button>
          <br />
          <button
            type="submit"
            className="bg-indigo-500 p-3 rounded-md  w-80
          "
            onClick={handleGoogle}
          >
            Login With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
