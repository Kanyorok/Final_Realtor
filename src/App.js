import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Forgotpassword from "./Pages/Forgotpassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "/offers" element={<Offers/>} />
          <Route path= "/profile" element={<Profile/>} />
          <Route path= "/sign-in" element={<Signin/>} />
          <Route path= "/sign-up" element={<Signup/>} />
          <Route path= "/forgot-password" element={<Forgotpassword/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
