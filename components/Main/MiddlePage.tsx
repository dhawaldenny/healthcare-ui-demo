import React from "react";
import DiagnosisHistory from "./DiagnosisHistory";
import DiagnosisList from "./DiagnosisList";

const MiddlePage = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-3">
      <DiagnosisHistory />
      <DiagnosisList />
    </div>
  );
};

export default MiddlePage;
