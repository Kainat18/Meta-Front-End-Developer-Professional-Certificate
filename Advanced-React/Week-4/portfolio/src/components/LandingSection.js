import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
 
  >

  
  < VStack spacing={16} alignItems="center">
  <Avatar src="https://i.pravatar.cc/150?img=7" username="kainat" size="2xl"></Avatar>
  <Heading color="white" as='h4' size='md'>{greeting}</Heading>
 <VStack>
  <Heading color="white"  size='2xl' >{bio1}</Heading>
  <Heading color="white"  size='2xl' >{bio2}</Heading>
  </VStack>
  </VStack>
  
  </FullScreenSection>
  

);

export default LandingSection;
