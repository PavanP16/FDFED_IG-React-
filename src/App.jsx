
import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { AuthContexts } from "./Firebase/AuthContexts";

// import Login from "./pages/Login";
import Home from "./pages/Home";

import JobSeeker from "./pages/JobSeeker";
import JLanding from "./components/JobSeeker/Home/JobLanding";
import ContactUs from "./components/JobSeeker/ContactUs/ContactUs_jobseeker";

import Company from "./pages/Company";
import AboutUs from "./pages/Aboutus";
import Faqs from "./pages/Faqs";
import Login_SignUp from "./pages/Login_SignUp";
import FindJobs from "./components/JobSeeker/FindJob/FindJobs";
import Profile_Job from "./components/JobSeeker/Profile/Profile_Job";

const Root = () => {
  return <Outlet />;
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index element={<Home />} />
      <Route path="/login" element={<Login_SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/faqs" element={<Faqs />} />
      
      <Route path="/jobseeker" element={<JobSeeker />}>
        <Route index element={<JLanding />} />
        <Route path="findjobs" element={<FindJobs />} /> k
        <Route path="contactus" element={<ContactUs/>} />
        <Route path="profile" element={<Profile_Job />} />
      </Route>

      <Route path="/company" element={<Company />} />
    </Route>
  )
);

function App() {
  return (
    <AuthContexts>
      <ChakraProvider>
        <RouterProvider router={Router} />
      </ChakraProvider>
    </AuthContexts>
  );
}

export default App;
