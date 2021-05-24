import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Henrique Suel</Text>
          <Text color="gray.300" fontSize="small">
            h.suel17@hotmail.com
            </Text>
        </Box>
      )}


      <Avatar size="md" name="Henrique Suel" src="https://avatars.githubusercontent.com/u/22986830?v=4" />
    </Flex>
  );
}