import { Flex, Box } from '@chakra-ui/react'

export function Divider() {
  return (
    <Flex
      align="center"
      justify="center"
      mt="80px"
      mb="52px"
    >
      <Flex 
        w="90px"
        h="2px"
        bg="gray.700"
      />
    </Flex>
  )
}