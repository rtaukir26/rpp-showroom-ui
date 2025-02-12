// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { TOKEN } from "../../constant/localStorage";
// import { routPath } from "../../Routes/rootpath";

// const useAuthCheck = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkToken = () => {
//       const token = localStorage.getItem(TOKEN);
//       const expiryTimestamp = localStorage.getItem("tokenExpiry");

//       // If token is missing or expired, remove it and redirect to login
//       if (!token || !expiryTimestamp || Date.now() > expiryTimestamp) {
//         localStorage.removeItem(TOKEN);
//         localStorage.removeItem("tokenExpiry");
//         console.log("Token expired. Redirecting to login...");
//         navigate(routPath.landing); // Redirect to login page
//       }
//     };

//     checkToken();
//   }, [navigate]);
// };

// export default useAuthCheck;
