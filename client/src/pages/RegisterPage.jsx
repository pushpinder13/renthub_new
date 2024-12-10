
// // import React, { useState } from 'react';
// // import "../styles/Register.scss";
// // import { useNavigate } from 'react-router-dom';


// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [passwordMatch, setPasswordMatch] = useState(true);

// //   const navigate = useNavigate();

// //   const handlePasswordChange = (e) => {
// //     setPassword(e.target.value);
// //     setPasswordMatch(e.target.value === confirmPassword);
// //   };

// //   const handleConfirmPasswordChange = (e) => {
// //     setConfirmPassword(e.target.value);
// //     setPasswordMatch(password === e.target.value);
// //   };

// //   const handleChange = (e) => {
// //     const file = e.target.files[0];
// //     setProfileImage(file);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!passwordMatch) return;

// //     const formData = new FormData();
// //     formData.append("firstName", firstName);
// //     formData.append("lastName", lastName);
// //     formData.append("email", email);
// //     formData.append("password", password);
// //     if (profileImage) {
// //       formData.append("profileImage", profileImage);
// //     }

// //     try {
// //       const response = await fetch("http://localhost:3001/auth/register", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("Registration successful!");
// //         navigate("/login");
// //       } else {
// //         alert(data.message || "Registration failed. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Registration failed:", err.message);
// //       alert("An error occurred: " + err.message);
// //     }
// //   };

// //   return (
// //     <div className="register">
// //       <div className="register_content">
// //         <form className="register_content_form" onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             placeholder="First Name"
// //             value={firstName}
// //             onChange={(e) => setFirstName(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="text"
// //             placeholder="Last Name"
// //             value={lastName}
// //             onChange={(e) => setLastName(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Confirm Password"
// //             value={confirmPassword}
// //             onChange={handleConfirmPasswordChange}
// //             required
// //           />
// //           {!passwordMatch && (
// //             <p style={{ color: "red", marginTop: "5px" }}>Passwords do not match!</p>
// //           )}
// //           <input
// //             id="image"
// //             type="file"
// //             name="profileImage"
// //             accept="image/*"
// //             style={{ display: "none" }}
// //             onChange={handleChange}
// //           />
// //           <label htmlFor="image">
// //             <img src="/assets/addImage.png" alt="add profile photo" />
// //             <p>Upload Your Photo</p>
// //           </label>
// //           {profileImage && (
// //             <img
// //               src={URL.createObjectURL(profileImage)}
// //               alt="profile photo"
// //               style={{ maxWidth: "80px" }}
// //             />
// //           )}
// //           <button type="submit">REGISTER</button>
// //           <a href="/login">Already have an account? Login here</a>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };
// // export default RegisterPage;


// import React, { useState } from 'react';
// import "../styles/Register.scss";
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [passwordMatch, setPasswordMatch] = useState(true);

//   const navigate = useNavigate();

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     // Reset password match validation until confirmPassword is updated
//     if (confirmPassword !== "") {
//       setPasswordMatch(e.target.value === confirmPassword);
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     // Check passwords only when typing in confirmPassword
//     setPasswordMatch(password === e.target.value);
//   };

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!passwordMatch) return;

//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("email", email);
//     formData.append("password", password);
//     if (profileImage) {
//       formData.append("profileImage", profileImage);
//     }

//     try {
//       const response = await fetch("http://localhost:3001/auth/register", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Registration successful!");
//         navigate("/login");
//       } else {
//         alert(data.message || "Registration failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Registration failed:", err.message);
//       alert("An error occurred: " + err.message);
//     }
//   };

//   return (
//     <div className="register">
//       <div className="register_content">
//         <form className="register_content_form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             required
//           />
//           {!passwordMatch && confirmPassword !== "" && (
//             <p style={{ color: "red", marginTop: "5px" }}>Passwords do not match!</p>
//           )}
//           <input
//             id="image"
//             type="file"
//             name="profileImage"
//             accept="image/*"
//             style={{ display: "none" }}
//             onChange={handleChange}
//           />
//           <label htmlFor="image">
//             <img src="/assets/addImage.png" alt="add profile photo" />
//             <p>Upload Your Photo</p>
//           </label>
//           {profileImage && (
//             <img
//               src={URL.createObjectURL(profileImage)}
//               alt="profile photo"
//               style={{ maxWidth: "80px" }}
//             />
//           )}
//           <button type="submit">REGISTER</button>
//           <a href="/login">Already have an account? Login here</a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from 'react';
import "../styles/Register.scss";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  // Handle Password Match Validation
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword !== "") {
      setPasswordMatch(e.target.value === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  // Handle Image Upload
  const handleChange = (e) => {
    const file = e.target.files[0];
    // Validate that the uploaded file is an image
    if (file && file.type.startsWith('image/')) {
      setProfileImage(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) return;

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration failed:", err.message);
      alert("An error occurred: " + err.message);
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {!passwordMatch && confirmPassword !== "" && (
            <p style={{ color: "red", marginTop: "5px" }}>Passwords do not match!</p>
          )}

          {/* File Input for Image */}
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

          {/* Display Preview of Uploaded Image */}
          {profileImage && (
            <img
              src={URL.createObjectURL(profileImage)}  // Creates temporary URL for preview
              alt="Profile Preview"
              style={{ maxWidth: "80px", marginTop: "10px" }}
            />
          )}

          <button type="submit">REGISTER</button>
          <a href="/login">Already have an account? Login here</a>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
