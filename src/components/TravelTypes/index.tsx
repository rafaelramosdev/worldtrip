import { Flex } from "@chakra-ui/react";

import { TravelItem } from "./TravelItem";

export function TravelTypes(){
  return (
    <Flex
      as="section"
      w="100%"
      px="140px"
      align="center"
      justify="space-between"
    >
      <TravelItem img="/cocktail.svg" name="vida noturna" />
      <TravelItem img="/surf.svg" name="praia" />
      <TravelItem img="/building.svg" name="moderno" />
      <TravelItem img="/museum.svg" name="clássico" />
      <TravelItem img="/earth.svg" name="e mais..." />
    </Flex>
  )
}