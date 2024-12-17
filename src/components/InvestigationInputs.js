import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { MriInvestigationOptions, CtCbctInvestigationOptions } from "../data/InvestigationData";
import '../styles/InvestigationInputs.css'
const customStyles = {
  option: {
    backgroundColor: "#e6f7ff",
    color: "#333",
    padding: "10px",
    cursor: "pointer",
    marginBottom: "5px",
  },
};

const InvestigationInputs = () => {
  const [investigationData, setInvestigationData] = useState({
    mriScanFindings: [], // Stores selected options from the MRI scan findings dropdown
    ctCbctScanFindings: [], // Stores selected options from the CT/CBCT scan findings dropdown
    importantInvestigationFindings: "", // Stores the selected option from the pre-populated dropdown
    uploadedFiles: [], // Stores uploaded files
  });

  const importantInvestigationOptions = [
    { value: "Normal", label: "Normal" },
    { value: "Disc pathology", label: "Disc pathology" },
    { value: "Arthritis", label: "Arthritis" },
    { value: "Joint degeneration", label: "Joint degeneration" },
    { value: "Inflammation", label: "Inflammation" },
    { value: "Osteophytes", label: "Osteophytes" },
    { value: "Other", label: "Other" },
  ];

  // Handle MRI selection
  const onMriSelect = (selectedList) => {
    setInvestigationData({ ...investigationData, mriScanFindings: selectedList });
  };

  const onMriRemove = (selectedList) => {
    setInvestigationData({ ...investigationData, mriScanFindings: selectedList });
  };

  // Handle CT/CBCT selection
  const onCtCbctSelect = (selectedList) => {
    setInvestigationData({ ...investigationData, ctCbctScanFindings: selectedList });
  };

  const onCtCbctRemove = (selectedList) => {
    setInvestigationData({ ...investigationData, ctCbctScanFindings: selectedList });
  };

  // Handle important investigation findings change
  const handleImportantInvestigationChange = (e) => {
    setInvestigationData({ ...investigationData, importantInvestigationFindings: e.target.value });
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setInvestigationData({ ...investigationData, uploadedFiles });
  };

  return (
    <div >
      <h3>Investigation Inputs</h3>
      <div className="input-container">
      <label className="input-label">MRI Investigation</label>
      {/* MRI Scan Findings Dropdown */}
      <Multiselect
        options={MriInvestigationOptions}
        showCheckbox
        showArrow
        style={customStyles}
        placeholder="MRI Findings"
        onSelect={onMriSelect}
        onRemove={onMriRemove}
        displayValue="label"
      />
      </div>
      {/* CT/CBCT Scan Findings Dropdown */}
      <div className="input-container">
      <label className="input-label">CT/CBCT</label>
      <Multiselect
        options={CtCbctInvestigationOptions}
        showCheckbox
        showArrow
        style={customStyles}
        placeholder="CT/CBCT Findings"
        onSelect={onCtCbctSelect}
        onRemove={onCtCbctRemove}
        displayValue="label"
      />
      </div>
      {/* Important Investigation Findings Dropdown */}
      <div className="input-container" >
        <label className="input-label" htmlFor="importantInvestigationFindings">*Important Investigation Findings:</label>
        <select
          className="custom-select"
          id="importantInvestigationFindings"
          value={investigationData.importantInvestigationFindings}
          onChange={handleImportantInvestigationChange}
        >
          <option value="" disabled>
            Select Findings
          </option>
          {importantInvestigationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* File Upload */}
      <div className="input-container">
        <label className="input-label" htmlFor="fileUpload">Upload MRI/CT Scan Results:</label>
        <input
          type="file"
          id="fileUpload"
          multiple
          onChange={handleFileUpload}
          className="username-input-field"
        />
      </div>
    </div>
  );
};

export default InvestigationInputs;
