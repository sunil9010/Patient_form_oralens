import React from "react";
import PatientInfo from "./PatientInfo";
import Symptoms from "./Symptoms";
import ClinicalFindings from "./ClinicalFindings";
import InvestigationInputs from "./InvestigationInputs";
import Diagnosis from "./Diagnosis";
import AudioRecording from "./AudioRecording";
import AdditionalNotes from "./AdditionalNotes";
import Submission from "./Submission";
import '../styles/FormLayout.css'

const FormLayout = () => {
  return (
    <div id="wrapper">
      <div className="container">
      <PatientInfo />
      <Symptoms />
      <ClinicalFindings />
      <InvestigationInputs />
      <Diagnosis />
      <AudioRecording /> 
     <AdditionalNotes /> 
      <Submission />  
      </div>
    </div>
  );
};

export default FormLayout;
