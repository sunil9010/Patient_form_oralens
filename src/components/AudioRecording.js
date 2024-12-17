import React, { useState, useEffect } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";
import '../styles/AudioRecording.css'

const AudioRecording = () => {
  const [audioFiles, setAudioFiles] = useState({
    jawOpening: null,
    jawClosing: null,
    sideMovements: null,
    allMovements: null,
  });

  const [currentRecording, setCurrentRecording] = useState(null); // Tracks which recording is in progress

  // Create separate recorder controls for each type
  const jawOpeningControls = useVoiceVisualizer();
  const jawClosingControls = useVoiceVisualizer();
  const sideMovementsControls = useVoiceVisualizer();
  const allMovementsControls = useVoiceVisualizer();

  const recorders = {
    jawOpening: jawOpeningControls,
    jawClosing: jawClosingControls,
    sideMovements: sideMovementsControls,
    allMovements: allMovementsControls,
  };

  // UseEffect to update the state dynamically when a recording finishes
  useEffect(() => {
    if (!currentRecording) return; // No recording in progress

    const { recordedBlob } = recorders[currentRecording];
    if (recordedBlob) {
      setAudioFiles((prevState) => ({
        ...prevState,
        [currentRecording]: recordedBlob, // Update the correct audio file dynamically
      }));
      setCurrentRecording(null); // Reset after saving
    }
  }, [recorders, currentRecording]);

  // Start recording for a specific type
  const startRecording = (type) => {
    setCurrentRecording(type); // Set the current target
    recorders[type].startRecording(); // Start the recording
  };

  // Stop the recording
  const stopRecording = () => {
    if (currentRecording) {
      recorders[currentRecording].stopRecording(); // Stop the recording
    }
  };

  return (
    <div>
      <h3>Investigation Inputs</h3>

      <div>
        <label className="special-label">Jaw<span className="Notetext">Opening</span> Record ⏺️:-</label>
        <VoiceVisualizer
          controls={jawOpeningControls}
          isProgressIndicatorTimeShown={true}
          isDefaultUIShown={true}
          mediaRecorder
          mainBarColor="#000"
          defaultAudioWaveIconColor="#000"
          defaultMicrophoneIconColor="#565612"
          secondaryBarColor="#000"
          isDownloadAudioButtonShown={true}
        />
        <label className="note">•🎙️Click the Above icon to start Recording.</label>
        <hr className="custom-hr" />
      </div>

      <div>
        <label className="special-label">Jaw<span className="Notetext">Closing</span> Record ⏺️:-</label>
        <VoiceVisualizer
          controls={jawClosingControls}
          isProgressIndicatorTimeShown={true}
          isDefaultUIShown={true}
          mediaRecorder
          mainBarColor="#000"
          defaultAudioWaveIconColor="#000"
          defaultMicrophoneIconColor="#565612"
          secondaryBarColor="#000"
          isDownloadAudioButtonShown={true}
        />
        <label className="note">•🎙️Click the Above icon to start Recording.</label>
        <hr className="custom-hr" />
      </div>

      <div>
        <label className="special-label">Jaw<span className="Notetext">Side Movements</span> Record ⏺️:-</label>
        <VoiceVisualizer
          controls={sideMovementsControls}
          isProgressIndicatorTimeShown={true}
          isDefaultUIShown={true}
          mediaRecorder
          mainBarColor="#000"
          defaultAudioWaveIconColor="#000"
          defaultMicrophoneIconColor="#565612"
          secondaryBarColor="#000"
          isDownloadAudioButtonShown={true}
        />
        <label className="note">•🎙️Click the Above icon to start Recording.</label>
        <hr className="custom-hr" />
      </div>

      <div>
        <label className="special-label">Jaw<span className="Notetext">All Movements</span> Record ⏺️:-</label>
        <VoiceVisualizer
          controls={allMovementsControls}
          isProgressIndicatorTimeShown={true}
          isDefaultUIShown={true}
          mediaRecorder
          mainBarColor="#000"
          defaultAudioWaveIconColor="#000"
          defaultMicrophoneIconColor="#565612"
          secondaryBarColor="#000"
          isDownloadAudioButtonShown={true}
        />
        <label className="note">•🎙️Click the Above icon to start Recording.</label>
        <hr className="custom-hr" />
      </div>
    </div>
  );
};

export default AudioRecording;
