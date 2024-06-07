import { Container, Text, VStack, Heading, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Begin building something amazing!</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
            Get Started
          </Button>
          {session ? (
            <Button colorScheme="red" size="lg" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button as={Link} to="/login" colorScheme="blue" size="lg">
              Login
            </Button>
          )}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;