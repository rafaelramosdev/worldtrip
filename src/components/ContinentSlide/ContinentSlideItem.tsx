import Link from 'next/link'

import { Flex, Text, Heading } from "@chakra-ui/react";

interface ContinentSlideItemProps {
  slug: string;
  cover: string;
  title: string;
  description: string;
}

export function ContinentSlideItem({ slug, cover, title, description }: ContinentSlideItemProps) {
  return (
    <Flex 
      h={{ base: "15.625rem", md: "28.125rem" }}
      bgImage={`url(${cover})`}
      bgPosition="center"
      align="center"
      justify="center"
      flexDir="column"
    >
      <Link href={`/continents/${slug}`} passHref>
        <Heading
          as="a"
          fontWeight="bold"
          fontSize={{ base: "1.5rem", md: "3rem" }}
          lineHeight={{ base: "2.25rem", md: "4.5rem" }}
          textAlign="center"
          color="white.800"
        >
          {title}
        </Heading>
      </Link>
        
      <Text
        as="span"
        fontWeight="bold"
        fontSize={{ base: "0.875rem", md: "1.5rem" }}
        lineHeight={{ base: "1.3125rem", md: "2.25rem" }}
        textAlign="center"
        color="gray.200"
        mt={{ base: "6px", md: "0px" }}
      >
        {description}
      </Text>
    </Flex>
  )
}