import { useState } from "react";
import axios from "axios"
export default function Register() {
  const [imgurl, setImgurl] = useState();
  const [image,setImage]=useState()
  const [data, setData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  async function onSubmit(event) {
    event.preventDefault();
    // console.log(data);
    // console.log(imgurl);
    // Add logic for form submission here if needed
    try {
        const formData = new FormData();
        formData.append("fullname", data.fullname);
        formData.append("email", data.email);
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("avatar", image);
    
        const res = await axios.post("http://localhost:8000/api/v1/users/register", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    
  }

  function handleChnage(event) {
    const { name, value, type } = event.target;
    setData(prev => ({
      ...prev,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
  }

  function sameImage(event) {
    setImgurl(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0])
  }

  return (
    <>
      <div>
        <input type="file" name="image" onChange={sameImage} />
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          onChange={handleChnage}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChnage}
        />
        <label>User Name</label>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          onChange={handleChnage}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChnage}
        />

        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
}
