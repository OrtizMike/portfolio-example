import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // return null;
  return (
    <Box bg="white" color="black" maxW="lg" borderRadius={10}>      
      <Image src={imageSrc} borderRadius={10} alt={title} />
      <Box p={4}>
        <VStack spacing={4} alignItems="left">
          <Heading size="md">{title}</Heading>
          <Text size="md" color="gray.500">{description}</Text>
          <HStack>
            <Text >See More</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </Box>
      
    </Box>
  )
};

export default Card;
