import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="purple"
        h={'10'}
        w={'10'}
        p={'0'}
        pos={'fixed'}
        top={'2'}
        left={'2'}
        zIndex={'overlay'}
        borderRadius={'full'}
      >
        <BiMenuAltLeft size={'30'} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/videos?category=free'}>Free Viodes</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              position={'absolute'}
              bottom={'10'}
              left={'0'}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sing Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
