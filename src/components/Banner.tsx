import { Box, Flex, Stack, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      h={335}
      bgImage="url('/images/banner.png')"
      bgPosition="center"
    >
      <Flex
        maxW="1440px"
        h="100%"
        m="0 auto"
        px="140px"
        align="center"
        justify="space-between"
      >
        <Stack
          spacing="20px"
        >
          <Text
            fontWeight="500"
            fontSize="36px"
            lineHeight="54px"
            color="white.800"
          >
            5 Continentes, <br/> infinitas possibilidades
          </Text>

          <Text
            fontWeight="normal"
            fontSize="20px"
            lineHeight="30px"
            color="gray.200"
          >
            Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
          </Text>
        </Stack>

        <Image
          mb={-120}
          boxSize="400px"
          src="/airplane.svg" 
          alt="Airplane" 
        />
      </Flex>
    </Box>
  )
}