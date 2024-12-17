import {jawMovementOptions,muscleTendernessOptions,mandibularDeviationOptions,sideMovementOptions,discDisplacementOptions} from '../data/ClinicalFindingsData'
import React, { useState } from "react";
import '../styles/ClinicalFindings.css'
const ClinicalFindings = () => {
  const [clinicalFindings, setClinicalFindings] = useState({
    jawMovementRestriction: "",
    mouthOpeningMeasurement: "",
    muscleTenderness: [],
    mandibularDeviation: [],
    clickingOnOpening: "",
    clickingOnClosing: "",
    sideMovements: "",
    discDisplacement: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicalFindings({ ...clinicalFindings, [name]: value });
  };

  const handleMultiSelectChange = (event, field) => {
    const { value, checked } = event.target;
    setClinicalFindings((prev) => {
      const updatedList = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updatedList };
    });
  };
  const handleSideMoments = (e) => {
    const { name, value } = e.target;
    setClinicalFindings({ ...clinicalFindings, [name]: value });
  };

  return (
    <div>
      <h2 className='clinical-heading'>Clinical Findings</h2>

      {/* Jaw Movement Restriction */}
      <div className='input-container'>
      <label className='input-label' htmlFor="jawMovementRestriction">Jaw Movement Restriction:</label>
      <select
        id="jawMovementRestriction"
        name="jawMovementRestriction"
        value={clinicalFindings.jawMovementRestriction}
        onChange={handleInputChange}
        className='custom-select'
      >
        <option value="" disabled>
          Select restriction level
        </option>
        {jawMovementOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>
      {/* Mouth Opening Measurement */}

      <div className='input-container'>
      <label className="input-label" htmlFor="mouthOpeningMeasurement">Mouth Opening Measurement (mm):</label>
      <input
        type="number"
        id="mouthOpeningMeasurement"
        name="mouthOpeningMeasurement"
        className='username-input-field'
        value={clinicalFindings.mouthOpeningMeasurement}
        onChange={handleInputChange}
        placeholder="Enter measurement in mm"
      />
      </div>
      {/* Muscle Tenderness */}
      <h3>Muscle Tenderness</h3>
      {muscleTendernessOptions.map((option, index) => (
  <div key={index} className="checkbox-container">
    <label className="checkbox-label">
      <input
        type="checkbox"
        value={option}
        checked={clinicalFindings.muscleTenderness.includes(option)}
        onChange={(e) => handleMultiSelectChange(e, "muscleTenderness")}
        className="checkbox-input"
      />
      <span className="checkbox-text">{option}</span>
    </label>
  </div>
))}

      {/* Mandibular Deviation */}
      <h3>Mandibular Deviation</h3>
      {mandibularDeviationOptions.map((option, index) => (
        <div key={index} className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={option}
              checked={clinicalFindings.mandibularDeviation.includes(option)}
              onChange={(e) => handleMultiSelectChange(e, "mandibularDeviation")}
              className="checkbox-input"
            />
            <span className="checkbox-text">{option}</span>
          </label>
        </div>
              ))}
      {/* Clicking on Jaw Opening */}
      <h3>Clicking on Jaw Opening:</h3>
      <div className="radio-group">
  <label className="radio-option">
    <input
      type="radio"
      name="clickingOnOpening"
      value="Yes"
      checked={clinicalFindings.clickingOnOpening === "Yes"}
      onChange={handleInputChange}
      className="radio-input"
    />
    <span className="radio-label">Yes</span>
  </label>
  <label className="radio-option">
    <input
      type="radio"
      name="clickingOnOpening"
      value="No"
      checked={clinicalFindings.clickingOnOpening === "No"}
      onChange={handleInputChange}
      className="radio-input"
    />
    <span className="radio-label">No</span>
  </label>
</div>


      {/* Clicking on Jaw Closing */}
      <h3>Clicking on Jaw Closing:</h3>
      <div className="radio-group">
  <label className="radio-option">
    <input
      type="radio"
      name="clickingOnClosing"
      value="Yes"
      checked={clinicalFindings.clickingOnClosing === "Yes"}
      onChange={handleSideMoments}
      className="radio-input"
    />
    <span className="radio-label">Yes</span>
  </label>
  <label className="radio-option">
    <input
      type="radio"
      name="clickingOnClosing"
      value="No"
      checked={clinicalFindings.clickingOnClosing === "No"}
      onChange={handleSideMoments}
      className="radio-input"
    />
    <span className="radio-label">No</span>
  </label>
</div>

      <div>
      {/* Side Movements (Pain/Restriction) */}
      <label className='input-label'  htmlFor="sideMovements">Side Movements (Pain/Restriction):</label>
      <select
        className='custom-select'
        id="sideMovements"
        name="sideMovements"
        value={clinicalFindings.sideMovements}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {sideMovementOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Disc Displacement */}
      <div className='input-container'>
      <label className='input-label' htmlFor="discDisplacement">Disc Displacement:</label>
      <select
        id="discDisplacement"
        name="discDisplacement"
        className='custom-select'
        value={clinicalFindings.discDisplacement}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {discDisplacementOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>
      {/* Debug Output */}
      {/* <pre>{JSON.stringify(clinicalFindings, null, 2)}</pre> */}
    </div>
    </div>
  );
};

export default ClinicalFindings;

