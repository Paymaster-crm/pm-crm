import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

// Lazy load the CompleteKYC component
const CompleteKYC = lazy(() => import("./CompleteKYC"));

function EditEmployeeKyc() {
  const { username } = useParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CompleteKYC username={username} />
    </Suspense>
  );
}

export default React.memo(EditEmployeeKyc);
