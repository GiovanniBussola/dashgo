import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Giovanni Bússola</Text>
          <Text color="gray.300" fontSize="small">
            giovanni.sbussola@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Giovanni Bússola"
        src="https://github.com/giovannibussola.png"
      />
    </Flex>
  );
}
