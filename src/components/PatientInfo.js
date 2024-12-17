import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "../styles/PatientInfo.css";

const PatientInfo = () => {
  const healthHistoryOptions = [
    { id: 1, name: "Bruxism" },
    { id: 2, name: "Trauma" },
    { id: 3, name: "Arthritis" },
    { id: 4, name: "Disc Displacement" },
    { id: 5, name: "Joint Hypermobility" },
    { id: 6, name: "Congenital Jaw Deformities" },
    { id: 7, name: "Osteoarthritis" },
    { id: 8, name: "Rheumatoid Arthritis" },
    { id: 9, name: "Previous Jaw Surgery" },
    { id: 10, name: "Other" },
  ];

  const customStyles = {
    multiselectContainer: { width: "100%", border: "1px solid #ccc", borderRadius: "4px" },
    option: { backgroundColor: "#e6f7ff", color: "#333", padding: "10px", cursor: "pointer" },
    chips: { backgroundColor: "#007bff", color: "#fff" },
  };

  const [patientData, setPatientData] = useState({
    patientID: "",
    patientName: "",
    age: "",
    gender: "",
    contactInfo: "",
    healthHistory: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "*Required" }));
    }
  };

  const onSelect = (selectedList) => {
    setPatientData({ ...patientData, healthHistory: selectedList });
  };

  const onRemove = (selectedList) => {
    setPatientData({ ...patientData, healthHistory: selectedList });
  };



  return (
    <div className="patient-container">
      <div className="poster-container">
      <h2 className="patient-heading-1">PATIENT REGISTRATION</h2>
      </div>
      <div>
        
        <form >
          <div className="input-container">
            <label htmlFor="patientId" className="input-label">
              Patient ID:
            </label>
            <input
              className="username-input-field"
              placeholder="ID No"
              type="text"
              name="patientID"
              id="patientId"
              value={patientData.patientID}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.patientID && <p className="error-text">{errors.patientID}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="patientName" className="input-label">
              Patient Name:
            </label>
            <input
              className="username-input-field"
              placeholder="Full name"
              type="text"
              name="patientName"
              id="patientName"
              value={patientData.patientName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.patientName && <p className="error-text">{errors.patientName}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="age" className="input-label">
              Age:
            </label>
            <input
              className="username-input-field"
              placeholder="1 - 120"
              type="number"
              name="age"
              id="age"
              value={patientData.age}
              onChange={handleChange}
              onBlur={handleBlur}
              min="1"
              max="120"
            />
            {errors.age && <p className="error-text">{errors.age}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="gender" className="input-label">
              Gender:
            </label>
            <select
              className="custom-select"
              name="gender"
              value={patientData.gender}
              id="gender"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="error-text">{errors.gender}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="contactInfo" className="input-label">
              Contact Information:
            </label>
            <input
              className="username-input-field"
              placeholder="Email or Phone number"
              type="text"
              name="contactInfo"
              id="contactInfo"
              value={patientData.contactInfo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.contactInfo && <p className="error-text">{errors.contactInfo}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="healthHistory" className="input-label">
              Health History:
            </label>
            <Multiselect
              options={healthHistoryOptions}
              showCheckbox
              showArrow
              style={customStyles}
              placeholder="Health history"
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientInfo;
