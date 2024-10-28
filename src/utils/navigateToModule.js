export const navigateToModule = (module, navigate) => {
  switch (module) {
    case "Employee Onboarding":
      return navigate("/employee-onboarding");
    case "Basic KYC Details":
      return navigate("/kyc");
    case "Pre-Recruitment Process":
      return navigate("/pre-recruitment-process");
    case "Recruitment Process":
      return navigate("/recruitment-process");
    case "Exit Feedback":
      return navigate("/exit-feedback");
    case "Performance Appraisal":
      return navigate("/performance-appraisal");
    case "Training And Development":
      return navigate("/training-and-development");
    case "Employee Relation":
      return navigate("/employee-relation");
    case "ISO and Statutory Compliance":
      return navigate("/iso-and-statutory-compliance");
    case "Attendance":
      return navigate("/attendance");
    case "Complement / document request":
      return navigate("/document-request");
    case "DRA Profile":
      return navigate("/dra-profile");
    case "Resignation process":
      return navigate("/resignation-process");
    case "Salary + commission details":
      return navigate("/salaries-and-commissions");
    case "Interview":
      return navigate("/interview");
    default:
      return navigate("/");
  }
};
