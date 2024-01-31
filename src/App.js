import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Contact from "./Pages/Contact";
import "./App.css";
import PatientDashboard from "./Pages/PatientDashboard";
import DoctorDashboard from "./Pages/DoctorDashboard";
import FAQ from "./Pages/FAQ";
import DoctorRating from "./Pages/DoctorRating";
import HealthcareRating from "./Pages/HealthcareRating";
import ViewDoctor from "./Pages/ViewDoctor";
import ModalBody from "react-bootstrap/esm/ModalBody";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import MyMedicalRecord from "./Pages/MyMedicalRecord";
import Support from "./Pages/Support";
import SupportDoc from "./Pages/SupportDoc";
import PdashboardDrate from "./Pages/PdashboardDrate";
import PdashboardHrate from "./Pages/PdashboardHrate";
import ViewDoctorDashboard from "./Pages/ViewDoctorDashboard";
import ViewHealthcareDashboard from "./Pages/ViewHealthcareDashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdateMedicalRecord from "./Pages/UpdateMedicalRecord";
import ViewMyRating from "./Pages/ViewMyRating";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NoPage />}></Route>
          <Route
            path="/patient-dashboard"
            element={<PatientDashboard />}
          ></Route>
          <Route
            path="/physician-dashboard"
            element={<DoctorDashboard />}
          ></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/doctor-rating" element={<DoctorRating />}></Route>
          <Route path="/view-doctor/:id" element={<ViewDoctor />}></Route>
          <Route
            path="/healthcare-rating"
            element={<HealthcareRating />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
          <Route
            path="/my-medical-record"
            element={<MyMedicalRecord />}
          ></Route>
          <Route path="/support-doctor" element={<SupportDoc />}></Route>
          <Route
            path="/dashboard-doctor-rate"
            element={<PdashboardDrate />}
          ></Route>
          <Route
            path="/dashboard-healthcare-rate"
            element={<PdashboardHrate />}
          ></Route>
          <Route
            path="/view-doctor-dashboard"
            element={<ViewDoctorDashboard />}
          ></Route>
          <Route
            path="/view-healthcare-dashboard"
            element={<ViewHealthcareDashboard />}
          ></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/update-medical-record"
            element={<UpdateMedicalRecord />}
          ></Route>
          <Route path="/view-my-rating" element={<ViewMyRating />}></Route>
          <Route path="/supportDoc" element={<SupportDoc />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
