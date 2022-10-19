import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";

function WithHeaderFooter(props) {
  const { Component } = props;
  return (
    <>
      <NavBar className="background" />
      <Component {...props} />
      <Footer />
    </>
  );
}

export default WithHeaderFooter;
