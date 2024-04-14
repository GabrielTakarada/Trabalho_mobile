import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Picker, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Alive'); // Valor inicial definido como "Alive"
    const [location, setLocation] = useState('');
    const [episode, setEpisode] = useState('');
    const [characterData, setCharacterData] = useState(null); // Estado para armazenar os dados do personagem

    const handleAddCharacter = async () => {
        try {
            const data = await getCharacterData(name);
            setCharacterData(data);
            // Limpar os campos após a adição do personagem
            setName('');
            setStatus('Alive');
            setLocation('');
            setEpisode('');
        } catch (error) {
            console.error('Erro ao obter dados do personagem:', error);
            // Limpar os campos em caso de erro
            setName('');
            setStatus('Alive');
            setLocation('');
            setEpisode('');
            setCharacterData(null);
        }
    };

    const getCharacterData = async (characterName) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
            const data = await response.json();
            return data.results[0]; // Retorna apenas o primeiro resultado da busca
        } catch (error) {
            throw new Error('Erro ao obter dados do personagem:', error);
        }
    };

    // Função para renderizar os dados do personagem
    const renderCharacterData = () => {
        if (!characterData) {
            return null;
        }

        return (
            <View style={styles.characterContainer}>
                <Image
                    source={{ uri: characterData.image }}
                    style={styles.characterImage}
                />
                <Text style={styles.characterName}>{characterData.name}</Text>
                <Text>Status: {characterData.status}</Text>
                <Text>Localização: {characterData.location.name}</Text>
                <Text>Último episódio: {characterData.episode[0]}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {characterData ? (
                // Renderiza os dados do personagem na mesma página
                renderCharacterData()
            ) : (
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text style={styles.label}>Status:</Text>
                    {/* Utilizando o componente Picker para escolher o status */}
                    <Picker
                        selectedValue={status}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                    >
                        <Picker.Item label="Alive" value="Alive" />
                        <Picker.Item label="Dead" value="Dead" />
                        <Picker.Item label="Unknown" value="unknown" />
                    </Picker>
                    <Text style={styles.label}>Última localização:</Text>
                    <TextInput
                        style={styles.input}
                        value={location}
                        onChangeText={text => setLocation(text)}
                    />
                    <Text style={styles.label}>Último episódio:</Text>
                    <TextInput
                        style={styles.input}
                        value={episode}
                        onChangeText={text => setEpisode(text)}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={handleAddCharacter}>
                        <Text style={styles.addButtonText}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d8a2f',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#3d8a2f',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    characterContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
    },
    characterImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    characterName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
