import React from "react";
import { Avatar, Heading, VStack, Stack } from "@chakra-ui/react";
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
    <VStack
      px={16}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      gap="3"
    >
      <Stack gap="2" align="flex-start">
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
        <Heading size="md">{greeting}</Heading>
      </Stack>
      
      <Heading size="4xl">{bio1}</Heading>
      <Heading size="4xl">{bio2}</Heading>

    </VStack>
  </FullScreenSection>
);

export default LandingSection;
