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
      w="256px"
      h="279px"
    >
      <Image
        src={data.cover} 
        alt={data.name} 
        w="100%"
        h="173px"
        objectFit="cover"
        borderTopRadius="4px"
      />

      <Flex
        w="100%"
        h="106px"
        p="18px 24px"
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
            fontSize="20px"
            lineHeight="25px"
            color="gray.700"
            mb="12px"
          >
            {data.name}
          </Text>
          <Text
            as="span"
            fontWeight="500"
            fontSize="16px"
            lineHeight="26px"
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