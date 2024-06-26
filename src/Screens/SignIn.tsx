import { Icon , Heading, VStack , useTheme} from 'native-base';
import { useState }from 'react';

import Logo from '../assets/logo_primary.svg';
import {Envelope , Key} from 'phosphor-react-native';

import {Button} from '../components/Button';
import { Input } from '../components/Input';

export function SignIn(){
    const [name, setName] = useState('');
    const [password, setPassword ] = useState('');


    const { colors } = useTheme();
     
    function handleSigIn(){
       console.log(name,password);
    }
   

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo/>
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}> 
                   Acesse sua Conta 
            </Heading>

            <Input placeholder="E-mail"
            mb={4}
            InputLeftElement={<Icon as={<Envelope color= {colors.gray[300]} />} ml={4} />}
            onChangeText={setName}
            />
            
            <Input 
            mb={8}
            placeholder="Senha"
            InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
            />

            <Button title= "Entrar" w="full" onPress={handleSigIn} />
        </VStack>
    )
}