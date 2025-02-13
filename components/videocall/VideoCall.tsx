import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from "@stream-io/video-react-native-sdk";
  import { useEffect, useState } from "react";
import { VideoUI } from "./VideoUi";
  
  const apiKey = "mmhfdzb5evj2";
  const userId = "Count_Doksss";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVMJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NvdW50X0Rvb2t1IiwidXNlcl9pZCI6IkNvdW50X0Rvb2t1IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3MzkzNzMzODUsImV4cCI6MTczOTk3ODE4NX0.PB3Oo8DDrFg9VnXEjhm3mISrr3ZKzV-07wNn7VzJsZQ";
  const callId = "NX7wgsT31zDZ";
  const user: User = { id: userId };
  
  const client = new StreamVideoClient({ apiKey, user, token });
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