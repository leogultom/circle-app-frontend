// import Navbar from "@/components/Navbar";
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  //   const onLogout = () => {
  //     localStorage.removeItem("isAuthenticated");
  //     navigate("/login");
  //   };
  return (
    <div>
      {/* <Navbar onClick={onLogout} /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PrivateLayout;
