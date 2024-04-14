import {createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from '../Pages/Inicio'
import SignIn from '../Pages/Login';
import SignUp from '../Pages/Cadastrar_Usuário';
import Main from '../Pages/Adicionar_cards/index';



const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false }}
                initialParams={{ path: '/inicio' }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
                initialParams={{ path: '/signin' }}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
                initialParams={{ path: '/signup' }}
            />
                
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
                initialParams={{ path: '/main' }}
            />

        
        </Stack.Navigator>
    );
}