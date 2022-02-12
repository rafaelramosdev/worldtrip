import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { TravelItem } from "./TravelItem";

export function TravelTypes(){
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Grid
      templateColumns={ isWideVersion ? "repeat(5, 1fr)" : "repeat(2, 1fr)" }
      templateRows={ !isWideVersion && "repeat(3, 1fr)" }
      gap={ !isWideVersion && "1.75rem" }
      px={{ base: "2.55rem", md: "8.75rem"}}
    >
      <TravelItem img="/cocktail.svg" name="vida noturna" />
      <TravelItem img="/surf.svg" name="praia" />
      <TravelItem img="/building.svg" name="moderno" />
      <TravelItem img="/museum.svg" name="clássico" />
      <GridItem colSpan={!isWideVersion && 2}>
        <TravelItem img="/earth.svg" name="e mais..." />
      </GridItem>
    </Grid>
  )
}