import { Flex } from "@chakra-ui/react";

import { Info } from "./Info";
import { CitiesList } from "./CitiesList";

type ContinentObjectBody = {
  about: string;
  countries: number;
  languages: number;
  top_cities: number;
}

type ContinentObjectCity = {
  id: number;
  country_id: number;
  name: string;
  cover: string;
}

interface ContinentContentProps {
  body: ContinentObjectBody
  cities: ContinentObjectCity[];
}

export function ContinentContent({ body, cities}: ContinentContentProps) {
  return (
    <Flex
      as="section"
      maxW="1440px"
      m="0 auto"
      px="140px"
      flexDir="column"
    >
      
      <Info data={body} />
      
      <CitiesList data={cities} />
    </Flex>
  )
}