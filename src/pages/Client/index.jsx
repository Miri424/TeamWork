import {Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default ClientLayout;
