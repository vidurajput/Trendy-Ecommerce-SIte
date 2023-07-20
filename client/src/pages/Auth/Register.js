// import React, { useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// import { toast } from "react-hot-toast";
// import "../../styles/AuthStyles.css";

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phone, setPhone] = useState("");
//     const [address, setAddress] = useState("");
//     const [answer, setAnswer] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post("/api/v1/auth/register", {
//             name,
//             email,
//             password,
//             phone,
//             address,
//             answer
//           });
//           if (res && res.data.success) {
//             toast.success(res.data && res.data.message);
//             navigate("/login");
//           } else {
//             toast.error(res.data.message);
//           }
//         } catch (error) {
//           console.log(error);
//           toast.error("Something went wrong");
//         }
//       };
//     return (
//         // <Layout title="Register">
//         //     <div className="register">
//         //         <h1>Register</h1>
//         //         <form onSubmit={handleSubmit}>
//         //             <div className="mb-3">
//         //                 <label htmlFor="exampleInputName" className="form-label">Name</label>
//         //                 <input type="name" className="form-control" id="exampleInputName" val={name} onChange={(e) => setName(e.target.value)} required/>

//         //             </div>
//         //             <div className="mb-3">
//         //                 <label htmlFor="exampleInputEmail" className="form-label">Email</label>
//         //                 <input type="email" className="form-control" id="exampleInputEmail" val={email} onChange={(e) => setEmail(e.target.value)} required/>

//         //             </div>

//         //             <div className="mb-3">
//         //                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//         //                 <input type="password" className="form-control" id="exampleInputPassword1" val={password} onChange={(e) => setPassword(e.target.value)} required/>
//         //             </div>

//         //             <div className="mb-3">
//         //                 <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
//         //                 <input type="number" className="form-control" id="exampleInputPhone" val={phone} onChange={(e) => setPhone(e.target.value)}required />
//         //             </div>

//         //             <div className="mb-3">
//         //                 <label htmlFor="exampleInputAddress" className="form-label">Address</label>
//         //                 <input type="text" className="form-control" id="exampleInputAddress" val={address} onChange={(e) => setAddress(e.target.value)} required />
//         //             </div>

//         //             <button type="submit" className="btn btn-primary">Submit</button>
//         //         </form>

//         //     </div>
//         // </Layout>
//         <Layout title="Register - Ecommer App">
//         <div className="form-container" style={{ minHeight: "90vh" }}>
//           <form onSubmit={handleSubmit}>
//             <h4 className="title">REGISTER FORM</h4>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-control"
//                 id="exampleInputName1"
//                 placeholder="Name"
//                 required
//                 autoFocus
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Email "
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="form-control"
//                 id="exampleInputPhone1"
//                 placeholder="Phone"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="form-control"
//                 id="exampleInputAddress1"
//                 placeholder="Address"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 className="form-control"
//                 id="exampleInputSports1"
//                 placeholder="Favorite sports"
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               REGISTER
//             </button>
//           </form>
//         </div>
//       </Layout>
//     )

// }
// export default Register;










import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;