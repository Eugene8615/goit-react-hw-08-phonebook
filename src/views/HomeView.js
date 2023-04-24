import { Heading, Box, Text, Flex } from '@chakra-ui/react';
import RickDance from '../images/Rick-dance.gif';

const HomeView = () => {
  return (
    <>
      <Flex mb={6} alignItems="center" justifyContent="space-around">
        <Heading mb={6} color="#3db5c5">
        What's up!
        </Heading>

        <img src={RickDance} width={200} height={300} alt="Greeting monkey" />
      </Flex>
      <Box textAlign="center">
        <Text as="b" color="#3db5c5">
          Register or log in to your account to start using the app)
        </Text>
      </Box>
    </>
  );
};
export default HomeView;
