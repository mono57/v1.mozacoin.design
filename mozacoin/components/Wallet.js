import React from 'react'

import { View, Image, Text } from 'react-native'
import WalletList from '../screens/WalletList'
import themeColors from '../theme/colors'


export default class Wallet extends React.Component {
    render(){
        const { nav } = this.props
        
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
                    <Text 
                        style={{ 
                            fontSize: 20 
                        }}>Wallets</Text>
                    <Text onPress={() => nav('WalletPage') }
                        style={{ 
                            color: themeColors.primary, 
                            fontSize: 18 
                        }}>See All</Text>
                </View>
    
                <WalletList 
                    img= {require('../assets/images/bitcoin.png')}
                    title= "BiteCoin"
                    money= "FCFA 12,234,983.00"
                />

                <WalletList 
                    img= {require('../assets/images/litecoin.png')}
                    title= "Litecoin"
                    money= "FCFA 12,234,983.00"
                />

                <WalletList 
                    img= {require('../assets/images/binancecoin.png')}
                    title= "BinanceCoin"
                    money= "FCFA 12,234,983.00"
                />

                <WalletList 
                    img= {require('../assets/images/stellarcoin.png')}
                    title= "Stellarcoin"
                    money= "FCFA 12,234,983.00"
                />
                
    
            </View>
        )
    }
    
}