import { Text, StyleSheet } from 'react-native'

export const Colors = {
    dark: {
        text: '#dedcdc',
        background: '#1a231a'
    },
    light: {
        text: '#1a231a',
        background: '#dedcdc'
    }
};

export const Styles = StyleSheet.create({
    textBase: {
        color: Colors.dark.text,
        fontSize: 14,
    },
    textItalic: {
        fontStyle: 'italic',
    },
    textUnderline: {
        textDecorationLine: 'underline',
    },
    borderThin: {
        borderColor: Colors.dark.text,
        borderWidth: 1,
        borderStyle: "solid",
    },
    borderMed: {
        borderColor: Colors.dark.text,
        borderWidth: 2,
        borderStyle: "solid",
    },
});