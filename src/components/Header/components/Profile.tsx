import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Ferrarini</Text>
          <Text fontSize="small" color="gray.300">
            ferrarinifelipe@gmail
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Felipe Ferrarini"
        src="https://github.com/felipeferrarini.png"
      />
    </Flex>
  );
}
