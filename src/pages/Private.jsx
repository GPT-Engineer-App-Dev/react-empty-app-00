import { Container, Heading, Text } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl">Protected Page</Heading>
      <Text fontSize="xl">This page is protected and requires authentication to access.</Text>
    </Container>
  );
};

export default Private;