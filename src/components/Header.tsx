import { useRouter } from 'next/router';

import { Button, Flex, Icon } from '@chakra-ui/react'

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
      h="100px"
      align="center"
      justify="center"
    >
      { !!showBackButton && (
        <Button
          variant="unstyled"
          position="absolute"
          left="140px"
          onClick={back}
      >
        <Icon as={FiChevronLeft} fontSize="32px" />
      </Button>
      )}
      
      <img src="/logo.svg" alt="worldtrip" />
    </Flex>
  )
}