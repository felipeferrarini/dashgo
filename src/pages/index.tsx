import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/dist/client/router';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
  loginError?: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn(): JSX.Element {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSingIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    router.push('/dashboard');
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSingIn)}
      >
        <Stack>
          <Input
            id="email"
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email')}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
