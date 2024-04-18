// Complete the Index page component for an Arabic Perfume E-commerce Store
import { Box, Flex, Text, Image, Button, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const perfumes = [
    {
      id: 1,
      name: "Oud Al Sahraa",
      price: "$85",
      image: "https://images.unsplash.com/photo-1458538977777-0549b2370168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxPdWQlMjBBbCUyMFNhaHJhYSUyMHBlcmZ1bWV8ZW58MHx8fHwxNzEzNDg0NDgxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Rose of Arabia",
      price: "$75",
      image: "https://images.unsplash.com/photo-1562252185-16feebe22b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSb3NlJTIwb2YlMjBBcmFiaWElMjBwZXJmdW1lfGVufDB8fHx8MTcxMzQ4NDQ4MXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Amber Musc",
      price: "$95",
      image: "https://images.unsplash.com/photo-1458538977777-0549b2370168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbWJlciUyME11c2MlMjBwZXJmdW1lfGVufDB8fHx8MTcxMzQ4NDQ4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Jasmine Wisp",
      price: "$65",
      image: "https://images.unsplash.com/photo-1458538977777-0549b2370168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKYXNtaW5lJTIwV2lzcCUyMHBlcmZ1bWV8ZW58MHx8fHwxNzEzNDg0NDgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Arabic Perfumes
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaSearch />} colorScheme="teal">
            Search
          </Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
            Cart
          </Button>
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {perfumes.map((perfume) => (
          <GridItem key={perfume.id} w="100%" boxShadow="md" p={4} rounded="md" bg="white">
            <VStack spacing={3}>
              <Image src={perfume.image} borderRadius="md" boxSize="150px" objectFit="cover" />
              <Text fontWeight="semibold">{perfume.name}</Text>
              <Text>{perfume.price}</Text>
              <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline" size="sm">
                Favorite
              </Button>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="sm">
                Add to Cart
              </Button>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
