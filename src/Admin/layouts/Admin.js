// /*!

// =========================================================
// * Argon Dashboard React - v1.2.4
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
// * Copyright 2024 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import { useLocation, Route, Routes, Navigate, Outlet } from "react-router-dom";
// // reactstrap components
// import { Container } from "reactstrap";
// // core components
// import AdminNavbar from "../components/Navbars/AdminNavbar";

// import Sidebar from "../components/Sidebar/Sidebar.js";

// import routes from "routes.js";

// const Admin = (props) => {
//   const mainContent = React.useRef(null);
//   const location = useLocation();

//   React.useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     mainContent.current.scrollTop = 0;
//   }, [location]);




//   return (
//     <>
//       <Sidebar
//         {...props}
//         routes={routes}
//         logo={{
//           innerLink: "/index",
//           imgSrc: require("../assets/img/brand/logo.png"),
//           imgAlt: "...",
//         }}
//       />
//       <div className="main-content" ref={mainContent}>
//         <AdminNavbar />
//         <Outlet />
        
//       </div>
//     </>
//   );
// };

// export default Admin;
