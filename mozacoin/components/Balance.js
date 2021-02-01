import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import themeColors from '../theme/colors'


export default () => (
    <View style={styles.balance}>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 20
            }}>
            <Text style={{ fontSize: 18, marginRight: 6, color:themeColors.gray_md }}>Current Balance</Text>
            <Icon name="eye" type="ionicon" size={17} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 4, fontSize: 20 }}>
                    FCFA </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 50 }}>72,382</Text>
            </View>
            <Text style={{marginBottom: 6, fontSize: 20}}>.00</Text>
        </View>

        <Text style={{marginTop: 8, fontSize: 18 , color: themeColors.gray}}>0.023829487 BTC</Text>
    </View>
);

const styles = StyleSheet.create({
    balance: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
