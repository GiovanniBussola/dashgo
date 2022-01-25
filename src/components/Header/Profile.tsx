import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Giovanni Bússola</Text>
        <Text color="gray.300" fontSize="small">
          giovanni.sbussola@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Giovanni Bússola"
        src="https://github.com/giovannibussola.png"
      />
    </Flex>
  );
}
