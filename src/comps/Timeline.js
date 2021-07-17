import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import { Timeblock } from "./Timeblock";

import EventSet from "../utils/timeline.json";

export const JaredTimeline = () => {
  return (
    <div style={{ padding: "10%" }}>
      <Timeline align="alternate">
        {EventSet.events.map((event, index) => {
          return <Timeblock key={index} {...event} />;
        })}
      </Timeline>
    </div>
  );
};
