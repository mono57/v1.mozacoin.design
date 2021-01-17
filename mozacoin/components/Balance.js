import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import themeColors from '../theme/colors'


export default () => (
    <View style={styles.balance}>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Text style={{ fontSize: 18, marginRight: 6, color:themeColors.gray_md }}>Current Balance</Text>
            <Icon name="eye" type="ionicon" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 4, fontSize: 18 }}>
                    FCFA </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 40 }}>72.382</Text>
            </View>
            <Text style={{marginBottom: 3, fontSize: 16}}>,00</Text>
        </View>

        <Text style={{marginTop: 8, fontSize: 16, color: themeColors.gray}}>0.023829487 BTC</Text>
    </View>
);

const styles = StyleSheet.create({
    balance: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
