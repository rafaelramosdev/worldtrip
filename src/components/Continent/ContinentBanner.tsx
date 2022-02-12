import { Box, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  cover: string;
  title: string;
}

export function ContinentBanner({ cover, title }: ContinentBannerProps) {
  return (
    <Box
      h={500}
      bgImage={`url(${cover})`}
      bgPosition="center"
      bgSize="cover"
    >
      <Box
        position="relative"
        maxW="1440px"
        h="100%"
        m="0 auto"
        px="140px"
      >
        <Text
          position="absolute"
          bottom="59px"
          fontWeight="600"
          fontSize="48px"
          lineHeight="72px"
          color="white.800"
        >
          {title}
        </Text>
      </Box>
    </Box>
  )
}