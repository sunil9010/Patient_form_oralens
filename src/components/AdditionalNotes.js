import React, { useState } from "react";
import '../styles/AdditionalNotes.css'
const AdditionalNotes = () => {
  const [notes, setNotes] = useState(""); // State for clinician's notes
  const handleChange = (event) => {
    setNotes(event.target.value);  // Update notes state on text change
  };

  return (
    
    <div className="notes-container">
    <label className="notes-label">Clinician's Additional Notes:</label>
    <textarea
      className="notes-textarea"
      value={notes}
      onChange={handleChange}
      placeholder="Enter additional notes here..."
      rows="6"
      cols="50"
      maxLength={500} // Optional
    />
  </div>
  
  );
};

export default AdditionalNotes;
