import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps): JSX.Element {
  if (isCurrent) {
    return (
      <Button
        fontSize="xs"
        size="sm"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      fontSize="xs"
      size="sm"
      w="4"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  );
}
