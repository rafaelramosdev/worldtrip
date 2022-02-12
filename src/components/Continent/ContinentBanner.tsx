import { Box, Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  cover: string;
  title: string;
}

export function ContinentBanner({ cover, title }: ContinentBannerProps) {
  return (
    <Box
      h={{ base: "9.375rem", md: "31.25rem" }}
      bgImage={`url(${cover})`}
      bgPosition="center"
      bgSize="cover"
    >
      <Flex
        position="relative"
        maxW="1440px"
        h="100%"
        m="0 auto"
        align="center"
        justify={{ base: "center", md: "unset" }}
        px={{ base: "unset", md: "8.75rem" }}
      >
        <Text
          position={{ base: "initial", md: "absolute" }}
          bottom="3.6875rem"
          fontWeight="600"
          fontSize={{ base: "1.75rem", md: "3rem" }}
          lineHeight={{ base: "2.625rem", md: "4.5rem" }}
          color="white.800"
        >
          {title}
        </Text>
      </Flex>
    </Box>
  )
}