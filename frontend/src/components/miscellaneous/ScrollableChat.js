import { Avatar, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useRef} from "react";
import { isSameSender, isLastMessage, isSameSenderMargin, isSameUser } from "../../config/ChatLogics";
import { ChatState } from "../../Context/ChatProvider";


const ScrollableChat = ({ messages }) => {

   const bottom = useRef(null);

  const { user } = ChatState();

   useEffect(() => {
     bottom.current?.scrollIntoView({behavior : 'auto'});
   }, [messages]);



  return (
    <div>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
              }}
            >
              {m.content}
            </span>
            <div ref={bottom} />
          </div>
        ))}
    </div>
  );};

export default ScrollableChat;
