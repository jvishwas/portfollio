import React, { useState } from "react";
import "./style.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

export default function SpeechRecog() {
  const [textTocopy, setTextCopy] = useState();
  // console.log(isCopied)
  const [isCopied, setCopied] = useClipboard(textTocopy);
  
  //hooks
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const StartListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const Stop = () => SpeechRecognition.stopListening();
  // its check for browser suport or not
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="container mt-4" id="main_container" >
        <div id="box_contaier" className="bg-light" data-aos="zoom-in">
          <h1 className="text-center mt-3 text-info fw-5">
            Speech Recognition{" "}
          </h1>
          <p className="text-center text-danger fw-lighter fst-italic fs-6 px-2">
            1:Press "Start" Button And "Speak".
            <br />
            2:Press "Stop" Button Then "Stop Writting content" If you want to
            Continue Press "Start Button"
            <br/>
            3:Before Press "Copy" Button, First Click on Content Section afther that Press "Copy Button" Click. 
          </p>
          <div
            className="row m-auto border border-2 w-75 py-3 px-2"
            style={{ minHeight: "15rem" }}
            onClick={() => setTextCopy(transcript)}
          >
            {transcript}
          </div>
          <div className="row m-auto w-75 my-3 d-flex  justify-content-between ">
            <button
              className="col col-12 col-md-4  my-1 btn btn-primary  "
              onClick={setCopied}
            >
              {isCopied ? "Yes!copied " : "Do copy ! "}
            </button>
            <button
              className="col col-12 col-md-4 my-1 btn btn-success  "
              onClick={StartListening}
            >
              Start Listning
            </button>
            <button
              className=" col col-12 col-md-4  my-1 btn btn-danger  "
              onClick={Stop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
