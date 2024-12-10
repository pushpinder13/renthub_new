import  Navbar  from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/Categories'
import Listings from "../components/Listings"
import Footer from "../components/Footer"
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer/>

    </>
  )
}

export default HomePage;

// import { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Slide from '../components/Slide';
// import Categories from '../components/Categories';
// import Listings from "../components/Listings";
// import Footer from "../components/Footer";
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is an admin from localStorage or a global state (e.g., Redux)
//     const userRole = localStorage.getItem('userRole'); // or from context / Redux state
//     if (userRole === 'admin') {
//       setIsAdmin(true);
//     }
//   }, []);

//   const handleAdminRedirect = () => {
//     // Redirect to admin panel
//     navigate('/admin');
//   };

//   return (
//     <>
//       <Navbar />
//       <Slide />
//       <Categories />
//       <Listings />
      
//       {isAdmin && (
//         <button onClick={handleAdminRedirect}>Go to Admin Panel</button>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default HomePage;
