import React from "react";
import { render } from "react-dom";
import { AppointmentsDayView } from "./AppointmentsDayView";
import { sampleAppointments } from "./sampleData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Start() {
  return (
    <div>
      <h1>Howdy</h1>
      <AppointmentsDayView appointments={sampleAppointments} />
    </div>
  );
}

render(<Start />, document.getElementById("root"));
