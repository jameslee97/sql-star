import React, { ReactNode } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react'
import { Header } from '../Header/Header';

type User = {
  name: string;
};

type Props = {
  children?: React.ReactNode
};


export const Page: React.FC<Props> = (props) => {
  const [user, setUser] = React.useState<User>();

  return (
    <Box
      w="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Box
      w="100%"
      display="flex"
      justifyContent="center"
      boxShadow="sm"
      >
        <Box maxW={1024} w="100%">
          <Header
            user={user}
            onLogin={() => setUser({ name: 'Jane Doe' })}
            onLogout={() => setUser(undefined)}
            onCreateAccount={() => setUser({ name: 'Jane Doe' })}
          />
        </Box>
      </Box>
      <Box
      w="100%"
      display="flex"
      maxW={1024}
      mt={10}
      >
      {props.children}
      </Box>
      </Box>
  );
};
