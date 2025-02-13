import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from "@stream-io/video-react-native-sdk";
  import { useEffect, useState } from "react";
import { VideoUI } from "./VideoUi";
  
  const apiKey = "mmhfdzb5evj2";
  const userId = "Brakiss";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0JyYWtpc3MiLCJ1c2VyX2lkIjoiQnJha2lzcyIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzM5NDM5MTkyLCJleHAiOjE3NDAwNDM5OTJ9.xrdHWHNAxkaR5N4FGaGqG7GAr6xYzuIk0heExdamKZA";

  const user: User = { id: userId };
  const callId = "NX7wgsT31zDZ";

  const client = StreamVideoClient.getOrCreateInstance({ apiKey, user , token});
  const call = client.call("default", callId);
  call.join({ create: true });
  
  export default function App() {
    return (
      <StreamVideo client={client}>
        <StreamCall call={call}>
            <VideoUI/>
        </StreamCall>
      </StreamVideo>
    );
  }