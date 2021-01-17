import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'

import Balance from '../components/Balance'
import ButtonControl from '../components/ButtonControl'
import Wallet from '../components/Wallet'

export default ({navigation}) => {
    const onNavigate = screenName => navigation.navigate(screenName)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Balance />
                <ButtonControl />
                <Wallet nav={onNavigate} />
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})
