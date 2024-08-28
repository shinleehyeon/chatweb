import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="57273819-9d50-4adc-bb7d-eee4978964de" // 프로젝트 ID
        username={props.user.username} // 사용자 이름
        secret={props.user.secret} // 사용자 비밀번호 또는 시크릿
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
