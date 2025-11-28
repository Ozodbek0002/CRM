import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import UsersTable from "./components/tables/UsersTable";
import TeachersTable from "./components/tables/TeachersTable";
import StudentsTable from "./components/tables/StudentsTable";
import RoomsTable from "./components/tables/RoomsTable";
import GroupsTable from "./components/tables/GroupsTable";
import CoursesTable from "./components/tables/CoursesTable";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/users-table" element={<UsersTable />} />
            <Route path="/teachers-table" element={<TeachersTable />} />
            <Route path="/students-table" element={<StudentsTable />} />
            <Route path="/rooms-table" element={<RoomsTable />} />
            <Route path="/groups-table" element={<GroupsTable />} />
            <Route path="/courses-table" element={<CoursesTable />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
