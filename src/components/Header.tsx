import { Flex } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      align="center"
      justify="center"
    >
      <img src="/logo.svg" alt="worldtrip" />
    </Flex>
  )
}