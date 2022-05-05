import React  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
//   Outlet,
//   useParams,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

// import { useState } from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//   <Router>
//     <Routes>
// {/**<Route path="/" element={<Home />} />/**/}
//       <Route path="/myapps" element={<Navigate replace to="/learn" />} />
//       <Route path="learn" element={<Learn />}>
//         <Route path="courses" element={<Courses />}>
//           <Route path=":courseid" element={<CourseId />} />
//         </Route>
//         <Route path="bundles" element={<Bundles />} />
//       </Route>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/logout" element={<Logout />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/protectedpage" element={<ProtectedPage />} />
      
//     </Routes>
//   </Router>
// );





// function Home() {
//   return (
//     <div className="homepage-bg">
//        <div className = "nav-link">
//        <NavLink className="btn btn-light" to={`/login`}>
//         login
//       </NavLink>
//       <NavLink className="btn btn-light" to={`/logout`}>
//         logout
//       </NavLink>
//       <NavLink className="btn btn-light" to={`/register`}>
//         Register
//       </NavLink>
//       <NavLink className="btn btn-light" to={`/protectedpage`}>
//         Protected page
//       </NavLink>
//        </div>
//     </div>
//   );
// }

// function Learn() {
//   return (
//     <div>
//       <h1>Learn</h1>
//       <h4>All courses are listed here</h4>
//       <Link className="btn btn-success" to="/learn/courses">
//         courses
//       </Link>{" "}
//       {}
//       <Link className="btn btn-primary" to="/learn/bundles">
//         bundle
//       </Link>
//       <Outlet />
//     </div>
//   );
// }

// function Courses() {
//   const courseList = ["React", "Angular", "Vue", "NodeJs"];
//   const randomCourseName =
//     courseList[Math.floor(Math.random() * courseList.length)];
//   return (
//     <div>
//       <h1>Courses list </h1>
//       <h1>Courses card </h1>
//       <p>More test</p>
//       <NavLink
//         style={({ isActive }) => {
//           return {
//             backgroundColor: isActive ? "pink" : "yellow",
//           };
//         }}
//         to={`/learn/courses/${randomCourseName}`}
//       >
//         {randomCourseName}
//       </NavLink>
//       <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
//         test
//       </NavLink>
//       <Outlet />
//     </div>
//   );
// }

// function Bundles() {
//   return (
//     <div>
//       <h1>Bundle list</h1>
//       <h1>Bundle list </h1>
//     </div>
//   );
// }

// function CourseId() {
//   const navigate = useNavigate();
//   const { courseid } = useParams();
//   return (
//     <div>
//       <h1>URL Params is :{courseid} </h1>
//       <button
//         className="btn btn-warning"
//         onClick={() => {
//           navigate("/dashboard", { state: courseid });
//         }}
//       >
//         Price
//       </button>

//       <Link to="/dashboard" state={"Django"}>
//         Test link
//       </Link>
//     </div>
//   );
// }

// function Dashboard() {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>Info that i got here is {location.state}</h1>
//     </div>
//   );
// }

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const auth = getAuth();
//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Singed in user: ", user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("An error occured: ", errorCode, errorMessage);
//       });
//   };


//   return (
//     <div className="bg-container d-flex flex-direction-column justify-content-center align-items-center ">
//       <div className="wrapper">
//         <h1 className="login-heading">Login</h1>
//         <br />
//         <input
//           type="text"
//           className="input-field"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder = "Enter Email Address"
//         />
//         <br />
//         <input
//           type="password"
//           className="input-field"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           placeholder = "Enter Password"
//           text-align = "center"
//         />
//         <br />
//         <div className="btn-container">
//           <button className="login-button" onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// function Logout() {
//   const [email, setEmail] = useState("");


//   const handleLogout = () => {

//   };
//   return (
//     <div className="bg-container d-flex flex-direction-column justify-content-center align-items-center ">
//       <div className="wrapper">
//         <h1 className="login-heading">Logout</h1>
//         <br />
//         <input
//           type="text"
//           className="input-field"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder  = "Enter your Email Id "
//         />
  
//         <br />
//         <div className="btn-container">
//           <button className="login-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const auth = getAuth();

//   const handleRegister = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Registered user: ", user);
//         setEmail("");
//         setPassword("");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("Error ocured: ", errorCode, errorMessage);
//       });
//   return (
//     <div className="bg-container d-flex flex-direction-column justify-content-center align-items-center ">
//       <div className="wrapper">
//         <h1 className="login-heading">Register</h1>
//         <br />
//         <input
//           type="text"
//           className="input-field"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder = "Enter Email Address"
//         />
//         <br />
//         <input
//           type="password"
//           className="input-field"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           placeholder = "Enter Password"
//           text-align = "center"
//         />
//         <br />
//         <div className="btn-container">
//           <button className="login-button" onClick={handleRegister}>
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// }

// function ProtectedPage() {
//   return (
//     <div>
//       <h1 className="protected-page">
//        This page is only visible if user is login
//       </h1>
//     </div>
//   );
// }
 

<App/>
)




// reportWebVitals();
