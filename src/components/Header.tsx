import { useRouter } from 'next/router';

import { Button, Flex, Icon, Image } from '@chakra-ui/react'

import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const { back } = useRouter();

  return (
    <Flex
      as="header"
      position="relative"
      w="100%"
      maxW="1440px"
      h={{ base: "3.125rem", md: "6.25rem" }}
      m="0 auto"
      align="center"
      justify="center"
    >
      { !!showBackButton && (
        <Button
          position="absolute"
          left={{ base: "1rem", md: "8.75rem" }}
          variant="unstyled"
          onClick={back}
      >
        <Icon as={FiChevronLeft} fontSize={{ base: "1rem", md: "2rem" }} />
      </Button>
      )}
      
      <Image src="/logo.svg" alt="worldtrip" w={{ base: "5.5rem", md: "unset" }} />
    </Flex>
  )
}