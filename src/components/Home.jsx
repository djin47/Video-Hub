import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Heading, Stack, Image, Container, Text } from '@chakra-ui/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { BiBorderBottom } from 'react-icons/bi';

const headingOptions = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading margin={'auto'} w={'fit-content'} borderBottom={'2px solid'}>
          SERVICES
        </Heading>
        <Stack
          p={'4'}
          alignItems={'center'}
          w={'full'}
          direction={['column', 'row']}
        >
          <Image h={['40', '400']} src={img5} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

const MyCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box h={'100vh'} w={'full'}>
          <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            VR is Best
          </Heading>
        </Box>
        <Box h={'100vh'} w={'full'}>
          <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.900'}
            color={'black'}
            {...headingOptions}
          >
            Gaming is Future
          </Heading>
        </Box>
        <Box h={'100vh'} w={'full'}>
          <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Gaming is Fun
          </Heading>
        </Box>
        <Box h={'100vh'} w={'full'}>
          <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Night Life is Cool
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};
