import { Flex, Icon, Stack, Text, Tooltip } from "@chakra-ui/react";

import { IoMdInformationCircleOutline } from 'react-icons/io';

type ContinentObjectBody = {
  about: string;
  countries: number;
  languages: number;
  top_cities: number;
}

interface ContinentContentInfoProps {
  data: ContinentObjectBody;
}

export function Info({ data }: ContinentContentInfoProps) {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      flexDir={{ base: "column", md: "row" }}
      mt={{ base: "1.5rem", md: "5rem" }}
    >
      <Text
        fontSize={{ base: "0.875rem", md: "1.5rem" }}
        lineHeight={{ base: "1.3125rem", md: "2.25rem" }}
        textAlign="justify"
        color="gray.700"
        maxW="37.5rem"
      >
        {data.about}
      </Text>

      <Flex
        w={{ base: "100%", md: "40%" }}
        align="center"
        justify="space-between"
        mt={{ base: "1rem", md: "0px" }}
      >
        <Stack
          spacing={{ base: "0px", md: "-0.5rem" }}
          align={{ base: "unset", md: "center" }}
          justify="center"
        >
          <Text
            fontWeight="600"
            fontSize={{ base: "1.5rem", md: "3rem" }}
            lineHeight={{ base: "2.25rem", md: "4.5rem" }}
            textAlign={{ base: "initial", md: "center" }}
            color="yellow.900"
          >
            {data.countries}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={{ base: "1.125rem", md: "1.5rem" }}
            lineHeight={{ base: "1.6875rem", md: "2.25rem" }}
            textAlign="center"
          >
            países
          </Text>
        </Stack>

        <Stack
          spacing={{ base: "0px", md: "-0.5rem" }}
          align={{ base: "unset", md: "center" }}
          justify="center"
        >
          <Text
            fontWeight="600"
            fontSize={{ base: "1.5rem", md: "3rem" }}
            lineHeight={{ base: "2.25rem", md: "4.5rem" }}
            textAlign={{ base: "initial", md: "center" }}
            color="yellow.900"
          >
            {data.languages}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={{ base: "1.125rem", md: "1.5rem" }}
            lineHeight={{ base: "1.6875rem", md: "2.25rem" }}
            textAlign="center"
          >
            línguas
          </Text>
        </Stack>

        <Stack
          spacing={{ base: "0px", md: "-0.5rem" }}
          align={{ base: "unset", md: "center" }}
          justify="center"
        >
          <Text
            fontWeight="600"
            fontSize={{ base: "1.5rem", md: "3rem" }}
            lineHeight={{ base: "2.25rem", md: "4.5rem" }}
            textAlign={{ base: "initial", md: "center" }}
            color="yellow.900"
          >
            {data.top_cities}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={{ base: "1.125rem", md: "1.5rem" }}
            lineHeight={{ base: "1.6875rem", md: "2.25rem" }}
            textAlign="center"
          >
            cidades +100 {' '}

            <Tooltip
              hasArrow
              label="As cidades +100 são aquelas que estão entre as 100 cidades mais visitadas do mundo."
              bg="white.800"
              color="gray.600"
            >
              <span>
                <Icon
                  as={IoMdInformationCircleOutline}
                  color="gray.500"
                  fontSize={{ base: "0.75rem", md: "1rem" }}
                />
              </span>
            </Tooltip>
          </Text>
        </Stack>
      </Flex>
    </Flex>
  )
}