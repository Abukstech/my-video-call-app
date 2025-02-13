import {
    useCallStateHooks,
    CallParticipantsList,
  } from "@stream-io/video-react-native-sdk";


  import { Button, View } from "react-native";


export const MyVideoButton = () => {
  const { useCameraState } = useCallStateHooks();
  const { camera, isMute } = useCameraState();
  return (
    <Button
      title={isMute ? "Turn on camera" : "Turn off camera"}
      onPress={() => camera.toggle()}
    ></Button>
  );
};

export const MyVideoFlip = () => {
  const { useCameraState } = useCallStateHooks();
  const { camera, direction } = useCameraState();
  return (
    <Button
      title={direction === "front" ? "Turn back camera" : "Turn front camera"}
      onPress={() => camera.flip()}
    ></Button>
  );
};


export const MyMicrophoneButton = () => {
  const { useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute } = useMicrophoneState();
  return (
    <Button
      title={isMute ? "Turn on microphone" : "Turn off microphone"}
      onPress={() => microphone.toggle()}
    ></Button>
  );
};
  
  export function VideoUI() {
    const { useParticipants } = useCallStateHooks();
    const participants = useParticipants();
  
    return (
      
      
        <View style={{ flex: 1 }}>
          {/* CallParticipantsList should take the full available space */}
          <View style={{ flex: 1 }}>
            <CallParticipantsList participants={participants} />
          </View>
    
          {/* Buttons should stay at the bottom */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 20,
              backgroundColor: "#f8f8f8", // Light background for better visibility
            }}
          >
            <MyVideoButton />
            <MyVideoFlip />
            <MyMicrophoneButton />
          </View>
        </View>
      );
    
    
    
  }