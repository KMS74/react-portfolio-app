import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="10px" overflow="hidden">
      <Image borderBottomRadius="8px" width="100%" src={imageSrc} />
      <VStack spacing={4} alignItems="flex-start" p="16px 48px 16px 16px">
        <Heading fontSize="lg" color="black" fontWeight="bold">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <HStack color="black">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
