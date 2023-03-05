import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import cam from "../img/cam.png";
import more from "../img/more.png";
import add from "../img/add.png";
import { ChatContext } from "../auth/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
