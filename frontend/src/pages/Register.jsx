import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { name, email, password, confirm_password } = formData;

  const onChange = (e) =>{
    // setFormData({...formData, [e.target.name]: e.target.value})
    setFormData((prevState)=>({
      ...prevState, [e.target.name]: e.target.value,
    }))
  }

  const submitForm = (e) => {}

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Do you have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={submitForm} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              placeholder="John Doe"
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={onChange}
              placeholder="promise@gmail.com"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              required
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Sign up
          </button>
          <div className="text-center">
            <a href="/" className="hover:text-indigo-600">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
