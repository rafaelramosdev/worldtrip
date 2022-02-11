import { Stack, Image, Text } from "@chakra-ui/react";

interface TravelItemProps {
  img: string;
  name: string;
}

export function TravelItem({ img, name }: TravelItemProps) {
  return (
    <Stack
      spacing="18px"
      align="center"
    >
      <Image
        src={img} 
        alt={name} 
      />

      <Text
        fontWeight="600"
        fontSize="20px"
        lineHeight="32px"
        color="gray.700"
      >
        {name}
      </Text>
    </Stack>
  )
}