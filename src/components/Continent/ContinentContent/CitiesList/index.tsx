import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { Card } from "./Card";

type City = {
  id: number;
  country_id: number;
  name: string;
  cover: string;
}

interface CitiesListProps {
  data: City[]
}

export function CitiesList({ data }: CitiesListProps ) {
  return (
    <Flex
      flexDir="column"
      mt="80px"
      mb="35px"
    >
      <Heading
        fontWeight="500"
        fontSize="36px"
        lineHeight="54px"
        color="gray.700"
      >
        Cidades +100
      </Heading>

      <Box
        mt="40px"
      >
        <Grid
        templateColumns="repeat(4, 1fr)"
        gap={10}
        >
          {data.map(city => {
            return (
              <Card key={city.id} data={city} />
            )
          })}
        </Grid>
      </Box>
    </Flex>
  )
}