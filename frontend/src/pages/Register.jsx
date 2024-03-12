import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [imgurl, setImgurl] = useState();
  const [image, setImage] = useState();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("username", data.username);
      formData.append("password", data.password);
      
      formData.append("avatar", image);

      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(res.status==201){
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChnage(event) {
    const { name, value, type } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
  }

  function sameImage(event) {
    setImgurl(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create and account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <input type="file" name="image" onChange={sameImage} />
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Full Name"
                  name="fullname"
                  onChange={handleChnage}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChnage}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  User Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  type="text"
                  placeholder="User Name"
                  name="username"
                  onChange={handleChnage}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChnage}
                />
              </div>
              <div className="flex justify-end">
                <span className="pr-2 font-light">Already a user </span>{" "}
                <Link className="text-indigo-600 underline" to={"/signin"}>
                  Signin
                </Link>
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
