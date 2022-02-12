import { Flex, Box } from '@chakra-ui/react'

export function Divider() {
  return (
    <Flex
      align="center"
      justify="center"
      mt={{ base: "2.25rem", md: "5rem"}}
      mb={{ base: "1.5rem", md: "3.25rem"}}
    >
      <Flex 
        w={{ base: "3.75rem", md: "5.625rem"}}
        h={{ base: "1px", md: "2px"}}
        bg="gray.700"
      />
    </Flex>
  )
}