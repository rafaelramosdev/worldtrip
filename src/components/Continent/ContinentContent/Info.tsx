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
      mt="80px"
    >
      <Text
        fontSize="24px"
        lineHeight="36px"
        textAlign="justify"
        color="gray.700"
        maxW="600px"
      >
        {data.about}
      </Text>

      <Flex
        w="40%"
        align="center"
        justify="space-between"
      >
        <Stack
          spacing="-10px"
          align="center"
          justify="center"
        >
          <Text
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            textAlign="center"
            color="yellow.900"
          >
            {data.countries}
          </Text>
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            textAlign="center"
          >
            países
          </Text>
        </Stack>

        <Stack
          spacing="-10px"
          align="center"
          justify="center"
        >
          <Text
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            textAlign="center"
            color="yellow.900"
          >
            {data.languages}
          </Text>
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            textAlign="center"
          >
            línguas
          </Text>
        </Stack>

        <Stack
          spacing="-10px"
          align="center"
          justify="center"
        >
          <Text
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            textAlign="center"
            color="yellow.900"
          >
            {data.top_cities}
          </Text>
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
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
                  fontSize="16px"
                />
              </span>
            </Tooltip>
          </Text>
        </Stack>
      </Flex>
    </Flex>
  )
}