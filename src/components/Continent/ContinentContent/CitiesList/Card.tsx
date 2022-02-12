import { useEffect, useState } from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { api } from "../../../../services/api";

import { Flag } from "./Flag";

type Country = {
  id: number;
  abbreviation: string;
  title: string;
}

type City = {
  id: number;
  country_id: number;
  name: string;
  cover: string;
}

interface CardProps {
  data: City;
}

export function Card({ data }: CardProps) {
  const [country, setCountry] = useState<Country>({} as Country);

  useEffect(() => {
    async function searchCountry() {
      const response = await api.get(`/countries/${data.country_id}`)
  
      setCountry(response.data);
    }

    searchCountry()

  }, [data.country_id])

  return (
    <Box
      w="16rem"
      h="17.4375rem"
    >
      <Image
        src={data.cover} 
        alt={data.name} 
        w="100%"
        h="10.8125rem"
        objectFit="cover"
        borderTopRadius="4px"
      />

      <Flex
        w="100%"
        h="6.625rem"
        p="1.125rem 1.5rem"
        align="center"
        justify="space-between"
        bg="white.900"
        borderWidth="1px"
        borderTopWidth="0px"
        borderBottomRadius="4px"
        borderColor="yellow.850"
      >
        <Box>
          <Text
            fontWeight="600"
            fontSize="1.25rem"
            lineHeight="1.5625rem"
            color="gray.700"
            mb="0.75rem"
          >
            {data.name}
          </Text>
          <Text
            as="span"
            fontWeight="500"
            fontSize="1rem"
            lineHeight="1.625rem"
            color="gray.500"
          >
            {country.title}
          </Text>
        </Box>

          {!!country.abbreviation && <Flag abbreviation={country.abbreviation} />}
      </Flex>
    </Box>
  )
}