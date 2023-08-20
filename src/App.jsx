import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import JobSeeker from "./pages/JobSeeker";
import Company from "./pages/Company";
import Tutor from "./pages/Tutor";


const Root = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/student" element={<Student/>} />
      <Route path="/jobseeker" element={<JobSeeker/>}/>
      <Route path="/tutor" element={<Tutor/>}/>
      <Route path="/company" element={<Company/>}/>
    </Route>
  )
);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={Router} />
    </React.Fragment>
  );
}

export default App;