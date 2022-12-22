import { View, Text } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View>
            <Text>SingleCountry: {country.name.common}</Text>
        </View>
    )
}