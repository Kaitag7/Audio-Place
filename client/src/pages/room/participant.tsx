import { Avatar, StreamVideoParticipant } from "@stream-io/video-react-sdk";

interface Props {
  participant: StreamVideoParticipant;
}

export const Participant = (props: Props) => {
  const { participant } = props;

  return (
    <div className="participant">
      <Avatar
        imageSrc={participant.image}
        style={{
          width: 60,
          height: 60,
          borderRadius: 50,
          boxShadow: participant.isSpeaking ? "0 0 1px 2px green" : "none",
        }}
      />
      <p>{participant.name}</p>
    </div>
  );
};
