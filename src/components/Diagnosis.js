import React, { useState } from "react";
import {diagnosisOptions} from '../data/DiagnosisData'
import Multiselect from "multiselect-react-dropdown";
import '../styles/Diagnosis.css'
const DiagnosisInputs = () => {
  const [diagnosisData, setDiagnosisData] = useState({
    provisionalDiagnosis: [],
    finalDiagnosis: [],
  });

  const handleProvisionalDiagnosisChange = (selectedList) => {
    setDiagnosisData({ ...diagnosisData, provisionalDiagnosis: selectedList });
  };

  const handleFinalDiagnosisChange = (selectedList) => {
    setDiagnosisData({ ...diagnosisData, finalDiagnosis: selectedList });
  };

  return (
    <div>
      <h3>Diagnosis:-</h3>
      <div className="input-container">
      <label className="input-label">Provisional Clinical Diagnosis</label>
      <Multiselect
        options={diagnosisOptions}
        displayValue="label"
        placeholder="Select Provisional Diagnosis"
        selectedValues={diagnosisData.provisionalDiagnosis}
        onSelect={handleProvisionalDiagnosisChange}
        onRemove={handleProvisionalDiagnosisChange}
      />
      </div>
      <div className="input-container">
      <label className="input-label">Final Clinical Diagnosis</label>
      <Multiselect
        options={diagnosisOptions}
        displayValue="label"
        placeholder="Select Final Diagnosis"
        selectedValues={diagnosisData.finalDiagnosis}
        onSelect={handleFinalDiagnosisChange}
        onRemove={handleFinalDiagnosisChange}
      />
      </div>
    </div>
  );
};

export default DiagnosisInputs;
