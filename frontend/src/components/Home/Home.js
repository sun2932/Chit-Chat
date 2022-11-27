import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const history=useNavigate();

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"));

    if(user) history("/chats");

  },[history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        textAlign="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Chit-Chat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb='.1rem'>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
