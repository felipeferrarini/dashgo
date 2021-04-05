import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser(): JSX.Element {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirmation"
                label="Confirmação da Senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <Stack
              w={['100%', 'max-content']}
              direction={['column', 'row']}
              spacing="4"
            >
              <Link href="/users" passHref>
                <Button w={['100%', 'max-content']} colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
