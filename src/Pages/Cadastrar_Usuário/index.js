import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message} onPress={ () => navigation.navigate('SignIn')}>Tela de cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Nome</Text>
                    <TextInput 
                        placeholder='Digite seu nome:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Text style={styles.title}>Telefone</Text>
                    <TextInput 
                        placeholder='Digite seu telefone:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Text style={styles.title}>CPF</Text>
                    <TextInput 
                        placeholder='Confirme seu cpf:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Text style={styles.title}>Email</Text>
                    <TextInput 
                        placeholder='Confirme seu email:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />


                <Text style={styles.title}>Curso</Text>
                    <TextInput 
                        placeholder='Confirme seu curso:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Pressable style={styles.buton} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </Pressable>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#3d8a2f'
    },
    containerHeader:{
        marginTop: '10%',
        marginBottom: '4%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize:17,
        marginTop:20,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 10,
        fontSize: 16,
    },
    buton:{
        backgroundColor: '#3d8a2f',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: '18',
        fontWeight: 'bold'
    },
    butonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})