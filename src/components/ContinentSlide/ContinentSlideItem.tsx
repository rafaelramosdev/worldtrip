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
      h={450}
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
          fontSize="48px"
          lineHeight="72px"
          textAlign="center"
          color="white.800"
        >
          {title}
        </Heading>
      </Link>
        
      <Text
        as="span"
        fontWeight="bold"
        fontSize="24px"
        lineHeight="36px"
        textAlign="center"
        color="gray.200"
      >
        {description}
      </Text>
    </Flex>
  )
}