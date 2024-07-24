import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh"}}>
        <PrettyChatWindow
        projectId="adb12e19-cd28-4e75-8884-393a7997f113"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
