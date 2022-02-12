import { Box, Flex, Stack, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      h={{ base: "10.1875rem", md: "20.9375rem" }}
      bgImage="url('/images/banner.png')"
      bgPosition="center"
    >
      <Flex
        maxW="1440px"
        h="100%"
        m="0 auto"
        px={{ base: "1rem", md: "8.75rem"}}
        align="center"
        justify="space-between"
      >
        <Stack
          spacing={{ base: "0.5rem", md: "1.25rem" }}
        >
          <Text
            fontWeight="500"
            fontSize={{ base: "1.25rem", md: "2.25rem"}}
            lineHeight={{ base: "1.875rem", md: "3.375rem"}}
            color="white.800"
          >
            5 Continentes, <br/> infinitas possibilidades
          </Text>

          <Text
            maxWidth="33.5rem"
            fontWeight="normal"
            fontSize={{ base: "0.875rem", md: "1.25rem"}}
            lineHeight={{ base: "1.3125rem", md: "1.875rem"}}
            color="gray.200"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Stack>

        <Image
          display={{ base: "none", md: "block" }}
          mb="-7.5rem"
          boxSize="25rem"
          src="/airplane.svg" 
          alt="Airplane" 
        />
      </Flex>
    </Box>
  )
}