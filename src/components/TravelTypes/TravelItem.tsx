import { Box, Flex, Image, Img, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelItemProps {
  img: string;
  name: string;
}

export function TravelItem({ img, name }: TravelItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      flexDir={{ base: "row", md: "column" }}
      align="center"
      justify={{ base: "center", md: 'flex-start'}}
    >
      { isWideVersion ? (
        <Image src={img} alt={name} />
      ) : (
        <Box w="0.5rem" h="0.5rem" bg="yellow.900" borderRadius="4px" mr="0.5rem" />
      )}

      <Text
       mt={{ base: '0', md: '1.5rem' }}
        fontWeight={{ base: "500", md: "600" }}
        fontSize={{ base: "1.125rem", md: "1.25rem"}}
        lineHeight={{ base: "1.6875rem", md: "2rem" }}
        color="gray.700"
      >
        {name}
      </Text>
    </Flex>
  )
}