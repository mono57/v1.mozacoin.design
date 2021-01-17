import React from 'react'

import { View, Image, Text } from 'react-native'
import themeColors from '../theme/colors'


const Currency = () => (
    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" , marginTop: 15}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/images/bitcoin.png')} />
            <View style={{marginLeft: 8}}>
                <Text style={{fontSize: 24}}>Bitcoin</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>FCFA 12,234,983.00</Text>
                    <Text style={{ color: themeColors.primary }}>{' '} +0.42%</Text>
                </View>
            </View>
        </View>

        <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 18}}>0.09322 BTC</Text>
            <Text>~FCFA 72,382</Text>
        </View>

    </View>
)

export default () => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 15,
                justifyContent: "space-between",
                alignItems: 'center',
                marginBottom: 10,
                borderBottomWidth: 1,
                borderColor: "#000"
            }}>
                <Text style={{ fontSize: 20 }}>Wallets</Text>
                <Text style={{ color: themeColors.primary, fontSize: 18 }} onPress={()=> console.log('Fuck you !!')}>See All</Text>
            </View>

            <Currency />
            <Currency />
            <Currency />
            <Currency />
            <Currency />
            <Currency />
            <Currency />
            <Currency />
            <Currency />
            <Currency />

        </View>
    )
}