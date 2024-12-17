import React, { useState } from "react";
import Select from "react-select";
import "../styles/Symptoms.css";
import {
  symptomsOptions,
  jawPainLocationOptions,
  soundOptions,
  otherSymptomsOptions,
} from "../data/SymptonsData";

const Symptoms = () => {
  const [symptoms, setSymptoms] = useState({
    primaryComplaint: [],
    symptomDuration: "",
    jawPainLocation: [],
    jawPainIntensity: 0,
    sounds: [],
    jawLocking: "",
    otherSymptoms: [],
  });

  const [errors, setErrors] = useState({
    primaryComplaint: false,
    symptomDuration: false,
    jawPainLocation: false,
    sounds: false,
    jawLocking: false,
    otherSymptoms: false,
  });

  const validateField = (field, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: value.length === 0 || value === "",
    }));
  };

  const syntomsChange = (selectedList) => {
    setSymptoms({ ...symptoms, primaryComplaint: selectedList });
    validateField("primaryComplaint", selectedList);
  };

  const selectDuration = (duration) => {
    const value = duration.target.value;
    setSymptoms({ ...symptoms, symptomDuration: value });
    validateField("symptomDuration", value);
  };

  const handleSliderChange = (e) => {
    setSymptoms({ ...symptoms, jawPainIntensity: e.target.value });
  };

  const handleCheckboxChange = (location) => {
    const updatedLocations = symptoms.jawPainLocation.includes(location)
      ? symptoms.jawPainLocation.filter((item) => item !== location)
      : [...symptoms.jawPainLocation, location];
    setSymptoms({ ...symptoms, jawPainLocation: updatedLocations });
    validateField("jawPainLocation", updatedLocations);
  };

  const handleSoundChange = (sound) => {
    const updatedSounds = symptoms.sounds.includes(sound)
      ? symptoms.sounds.filter((item) => item !== sound)
      : [...symptoms.sounds, sound];
    setSymptoms({ ...symptoms, sounds: updatedSounds });
    validateField("sounds", updatedSounds);
  };

  const handleJawLockingChange = (e) => {
    const value = e.target.value;
    setSymptoms({ ...symptoms, jawLocking: value });
    validateField("jawLocking", value);
  };

  const handleOtherSyntoms = (event) => {
    const { value, checked } = event.target;
    const updatedOtherSymptoms = checked
      ? [...symptoms.otherSymptoms, value]
      : symptoms.otherSymptoms.filter((symptom) => symptom !== value);
    setSymptoms({ ...symptoms, otherSymptoms: updatedOtherSymptoms });
    validateField("otherSymptoms", updatedOtherSymptoms);
  };

  return (
    <div className="section">
      <h2 className="patient-heading-2">Symptoms:</h2>

      {/* Primary Complaint */}
      <Select
        placeholder="Select Symptoms"
        allowSelectAll={true}
        onChange={syntomsChange}
        options={symptomsOptions}
        isMulti={true}
        value={symptoms.primaryComplaint}
      />
      {errors.primaryComplaint && <p className="error-text">*Required</p>}

      {/* Symptom Duration */}
      <div className="input-container">
        <label className="input-label" htmlFor="duration">Duration</label>
        <select
          className="custom-select"
          name="duration"
          value={symptoms.symptomDuration}
          onChange={selectDuration}
        >
          <option value="" disabled>Symptom Duration</option>
          <option value="Acuite Months">Acuite Months</option>
          <option value="Chronic ( > 3Months)">Chronic ( {">"} 3Months)</option>
        </select>
        {errors.symptomDuration && <p className="error-text">*Required</p>}
      </div>

      {/* Jaw Pain Location */}
      <h3>Jaw Pain (Location)</h3>
      <div>
        {jawPainLocationOptions.map((option) => (
          <div key={option.id} className="checkbox-container">
            <input
              type="checkbox"
              id={`jaw-pain-${option.id}`}
              value={option.label}
              checked={symptoms.jawPainLocation.includes(option.label)}
              onChange={() => handleCheckboxChange(option.label)}
            />
            <label htmlFor={`jaw-pain-${option.id}`}>{option.label}</label>
          </div>
        ))}
        {errors.jawPainLocation && <p className="error-text">*Required</p>}
      </div>

      {/* Jaw Pain Intensity */}
      <label className="jaw-pain-label">
        Jaw Pain (Intensity):
        <input
          type="range"
          min="0"
          max="10"
          value={symptoms.jawPainIntensity}
          onChange={handleSliderChange}
          className="jaw-pain-slider"
        />
        <span className="slider-value">{symptoms.jawPainIntensity}</span>
      </label>

      {/* Sounds */}
      <h3>Clicking/Popping/Grinding Sounds</h3>
      <div>
        {soundOptions.map((option) => (
          <div key={option.id} className="checkbox-container">
            <input
              type="checkbox"
              id={`sound-${option.id}`}
              value={option.label}
              checked={symptoms.sounds.includes(option.label)}
              onChange={() => handleSoundChange(option.label)}
            />
            <label htmlFor={`sound-${option.id}`}>{option.label}</label>
          </div>
        ))}
        {errors.sounds && <p className="error-text">*Required</p>}
      </div>

      {/* Jaw Locking */}
      <h3>Jaw Locking</h3>
      <div className="jaw-locking-options">
        <div>
          <input
            type="radio"
            name="jawLocking"
            value="Yes"
            checked={symptoms.jawLocking === "Yes"}
            onChange={handleJawLockingChange}
            id="jawLockingYes"
          />
          <label htmlFor="jawLockingYes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            name="jawLocking"
            value="No"
            checked={symptoms.jawLocking === "No"}
            onChange={handleJawLockingChange}
            id="jawLockingNo"
          />
          <label htmlFor="jawLockingNo">No</label>
        </div>
        <div>
          <input
            type="radio"
            name="jawLocking"
            value="Intermittent"
            checked={symptoms.jawLocking === "Intermittent"}
            onChange={handleJawLockingChange}
            id="jawLockingIntermittent"
          />
          <label htmlFor="jawLockingIntermittent">Intermittent</label>
        </div>
        {errors.jawLocking && <p className="error-text">*Required</p>}
      </div>

      {/* Other Symptoms */}
      <h3>Other Symptoms</h3>
      <div className="other-symptoms-options">
        {otherSymptomsOptions.map((option) => (
          <div key={option.id} className="other-symptom-option">
            <input
              type="checkbox"
              value={option.label}
              checked={symptoms.otherSymptoms.includes(option.label)}
              onChange={handleOtherSyntoms}
              id={`otherSymptom-${option.id}`}
            />
            <label htmlFor={`otherSymptom-${option.id}`}>{option.label}</label>
          </div>
        ))}
        {errors.otherSymptoms && <p className="error-text">*Required</p>}
      </div>
    </div>
  );
};

export default Symptoms;
