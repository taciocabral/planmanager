import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur () {
        setIsFocused(false);
        setIsFocused(!!name)
    }
    function handleInputFocus () {
        setIsFocused(true);
    }

    function handlerInputChange (value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height' } style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                { isFilled ? '😄' : '🙂' }
                            </Text>

                            <Text style={styles.title}>
                                Como podemos{'\n'}chamar você?
                            </Text>
                        </View>

                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder='Digite um nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handlerInputChange}
                        />

                        <View style={styles.footer}>
                            <Button title='Confirmar' />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        marginTop: 20,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 54
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})