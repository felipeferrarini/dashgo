import { Box } from '@chakra-ui/react';
import { HStack, Stack } from '@chakra-ui/react';
import { PaginationItem } from './components/PaginationItem';

export function Pagination(): JSX.Element {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  );
}
