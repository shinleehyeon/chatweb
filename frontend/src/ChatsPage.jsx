import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="57273819-9d50-4adc-bb7d-eee4978964de" 
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
