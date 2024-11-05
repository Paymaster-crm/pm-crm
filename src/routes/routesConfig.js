// Home
import Home from "../components/home/Modules.js";
import Assign from "../components/home/Assign.js";
import Profile from "../components/profile/Profile.js";
// Employee KYC
import EmployeeKYC from "../components/hrManagement/employeeKyc/EmployeeKYC.js";
import ViewIndividualKyc from "../components/hrManagement/employeeKyc/ViewIndividualKyc.js";
import EditEmployeeKyc from "../components/hrManagement/employeeKyc/EditEmployeeKyc.js";
// Employee Onboarding
import EmployeeOnboarding from "../components/hrManagement/employeeOnboarding/EmployeeOnboarding.js";
// Employee Management
import PreRecruitment from "../components/employeeManagement/preRecruitmentProcess/PreRecruitment.js";
import RecruitmentProcess from "../components/employeeManagement/recruitmentProcess/Recruitment.js";
import ExitFeedback from "../components/employeeManagement/exitFeedback/ExitFeedback.js";
import Appraisal from "../components/employeeManagement/appraisal/Appraisal.js";
import TrainingAndDevelopment from "../components/employeeManagement/training/TrainingAndDevelopment.js";
import EmployeeRelation from "../components/employeeManagement/employeeRelation/EmployeeRelation.js";
import IsoCompliance from "../components/employeeManagement/iso/IsoCompliance.js";
// Attendance
import Attendance from "../components/hrManagement/attendance/Attendance.js";
import Dashboard from "../components/dashboard/Dashboard.js";
// Document Request Form
import DocumentRequest from "../components/hrManagement/documentRequest/DocumentRequest.js";
// DRA Profile
import DraProfile from "../components/hrManagement/dra/DraProfile.js";
// Resignation
import Resignation from "../components/hrManagement/resignation/Resignation.js";
// Salaries and Commissions
import SalariesAndCommissions from "../components/hrManagement/salariesAndCommissions/SalariesAndCommissions.js";
// Interview
import Interview from "../components/interview/Interview.js";

const routesConfig = [
  {
    path: "/profile",
    element: <Profile />,
    allowedModules: [],
    name: "Profile",
    category: null,
  },
  {
    path: "/",
    element: <Dashboard />,
    allowedModules: [],
    name: "Dashboard",
    category: null,
  },
  {
    path: "/modules",
    element: <Home />,
    allowedModules: [],
    name: "Modules",
    category: null,
  },
  {
    path: "/assign",
    element: <Assign />,
    allowedModules: [],
    name: "Assign",
    category: null,
  },
  {
    path: "/kyc",
    element: <EmployeeKYC />,
    allowedModules: ["Basic KYC Details"],
    name: "Basic KYC Details",
    category: "HR & Management",
  },
  {
    path: "/view-kyc/:username",
    element: <ViewIndividualKyc />,
    allowedModules: ["Basic KYC Details"],
    name: "View KYC Details",
    category: "HR & Management",
  },
  {
    path: "/edit-kyc/:username",
    element: <EditEmployeeKyc />,
    allowedModules: ["Basic KYC Details"],
    name: "Edit KYC Details",
    category: "HR & Management",
  },
  {
    path: "/employee-onboarding",
    element: <EmployeeOnboarding />,
    allowedModules: ["Employee Onboarding"],
    name: "Employee Onboarding",
    category: "HR & Management",
  },
  {
    path: "/pre-recruitment",
    element: <PreRecruitment />,
    allowedModules: ["Pre-Recruitment Process"],
    name: "Pre-Recruitment Process",
    category: "Employee Management",
  },
  {
    path: "/recruitment",
    element: <RecruitmentProcess />,
    allowedModules: ["Recruitment Process"],
    name: "Recruitment Process",
    category: "Employee Management",
  },
  {
    path: "/exit-feedback",
    element: <ExitFeedback />,
    allowedModules: ["Exit Feedback"],
    name: "Exit Feedback",
    category: "Employee Management",
  },
  {
    path: "/performance-appraisal",
    element: <Appraisal />,
    allowedModules: ["Performance Appraisal"],
    name: "Performance Appraisal",
    category: "Employee Management",
  },
  {
    path: "/training",
    element: <TrainingAndDevelopment />,
    allowedModules: ["Training And Development"],
    name: "Training And Development",
    category: "Employee Management",
  },
  {
    path: "/employee-relation",
    element: <EmployeeRelation />,
    allowedModules: ["Employee Relation"],
    name: "Employee Relation",
    category: "Employee Management",
  },
  {
    path: "/iso-and-statutory-compliance",
    element: <IsoCompliance />,
    allowedModules: ["ISO and Statutory Compliance"],
    name: "ISO and Statutory Compliance",
    category: "Employee Management",
  },
  {
    path: "/attendance",
    element: <Attendance />,
    allowedModules: ["Attendance"],
    name: "Attendance",
    category: "HR & Management",
  },
  {
    path: "/document-request",
    element: <DocumentRequest />,
    allowedModules: ["Document Request"],
    name: "Document Request",
    category: "HR & Management",
  },
  {
    path: "/dra-profile",
    element: <DraProfile />,
    allowedModules: ["DRA Profile"],
    name: "DRA Profile",
    category: "HR & Management",
  },
  {
    path: "/resignation-process",
    element: <Resignation />,
    allowedModules: ["Resignation Process"],
    name: "Resignation Process",
    category: "HR & Management",
  },
  {
    path: "/salaries",
    element: <SalariesAndCommissions />,
    allowedModules: ["Salaries and Commission Details"],
    name: "Salaries and Commission Details",
    category: "HR & Management",
  },
  {
    path: "/interview",
    element: <Interview />,
    allowedModules: ["Interview"],
    name: "Interview",
    category: "Interview",
  },
];

export default routesConfig;
