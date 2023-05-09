import React from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={40} w={'100%'} p={16}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading
            color={'white'}
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack p={'2'} borderBottom={'1px solid white'}>
            <Input
              size={'md'}
              color={'white'}
              placeholder={'Enter Email Here ..'}
            ></Input>
            <Button colorScheme='purple' variant={'ghost'} size={'md'} p={'0'}>
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} color={'white'}>
            VIDEO HUB
          </Heading>
          <Text color={'white'}>all rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} color={'white'}>
            SOCIAL MEDIA
          </Heading>
          <Button color={'white'} variant={'link'} p={0} size={'s'}>
            <a href="">LinkdIn</a>
          </Button>
          <Button color={'white'} variant={'link'} p={0} size={'s'}>
            <a href="">Github</a>
          </Button>
          <Button color={'white'} variant={'link'} p={0} size={'s'}>
            <a href="">Instagram</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
