import { Box, Flex, Grid, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";

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
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      flexDir="column"
      mt={{ base: "2rem", md: "5rem" }}
      mb={{ base: "1rem", md: "2.1875rem" }}
    >
      <Heading
        fontWeight="500"
        fontSize={{ base: "1.5rem", md: "2.25rem" }}
        lineHeight={{ base: "2.25rem", md: "3.375rem" }}
        color="gray.700"
      >
        Cidades +100
      </Heading>

      <Box
        mt={{ base: "1.25rem", md: "2.5rem" }}
      >
        { isWideVersion ? (
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap="2.5rem"
          >
            {data.map(city => {
              return (
                <Card key={city.id} data={city} />
              )
            })}
          </Grid>
        ) : (
          <Stack
            spacing="1.25rem"
            align="center"
          >
            {data.map(city => {
              return (
                <Card key={city.id} data={city} />
              )
            })}
          </Stack>
        )}
      </Box>
    </Flex>
  )
}