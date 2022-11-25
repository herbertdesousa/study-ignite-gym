import * as NativeBase from 'native-base';

import { useNavigation } from '@react-navigation/native';

import LogoSvg from '@assets/icons/logo.svg';
import BackgroundImg from '@assets/images/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <NativeBase.ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <NativeBase.VStack flex={1} px={10} pb={16}>
        <NativeBase.Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <NativeBase.Center my={24}>
          <LogoSvg />

          <NativeBase.Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </NativeBase.Text>
        </NativeBase.Center>

        <NativeBase.Center>
          <NativeBase.Heading
            color="gray.100"
            fontSize="xl"
            mb={6}
            fontFamily="heading"
          >
            Crie sua conta
          </NativeBase.Heading>

          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar" />
        </NativeBase.Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </NativeBase.VStack>
    </NativeBase.ScrollView>
  );
}
