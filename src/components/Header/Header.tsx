import React from 'react';
import { Flex, Center, Box, Spacer, Square, Text, useColorMode, Stack, Button, useBreakpointValue, Heading } from '@chakra-ui/react'
import { CustomButton } from '../Button/Button';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
<Flex
        minH={'120px'}
        // py={{ base: 2 }}
        // px={{ base: 4 }}
        align={'center'}

>
<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#7284A8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4009 37.3277L31.0485 8.32647L2.04923 21.9732C5.62106 20.4362 10.5278 21.6334 14.1347 25.2403C17.7422 28.8478 18.9392 33.7557 17.4009 37.3277ZM17.1919 37.7718C17.0925 37.9659 16.9845 38.1554 16.8677 38.3398L16.9064 38.3785L17.1919 37.7718ZM1.03514 22.5073C1.21899 22.3909 1.40784 22.2831 1.60123 22.184L0.996482 22.4686L1.03514 22.5073Z" fill="#E5E5E5"/>
</svg>
        <Flex display={{ base: 'none', md: 'flex' }} ml={3}>
        <Center>
        <Heading>2022: A SQL Odyssey</Heading>
          </Center>
          </Flex>
        </Flex>


  <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            onClick={toggleColorMode}
            fontSize={'sm'}
            fontWeight={600}
          >
            {colorMode === 'light' ? 'Toggle to Dark' : 'Toggle to Light'}
          </Button>
        </Stack>
</Flex>
</Box>
  //   <header>
  //   <div className="wrapper">
  //     <div>

  //       <h1>Acme</h1>
  //     </div>
  //     <div>
  //       {user ? (
  //         <>
  //           <span className="welcome">
  //             Welcome, <b>{user.name}</b>!
  //           </span>
  //           <CustomButton size="sm" onClick={onLogout} label="Log out" />
  //         </>
  //       ) : (
  //         <>
  //           <CustomButton size="sm" onClick={onLogin} label="Log in" />
  //           <CustomButton primary size="sm" onClick={onCreateAccount} label="Sign up" />
  //         </>
  //       )}
        // <CustomButton size="sm" onClick={toggleColorMode} label={colorMode === 'light' ? 'Toggle to Dark' : 'Toggle to Light'} />
  //     </div>
  //   </div>
  // </header>
  )

        };