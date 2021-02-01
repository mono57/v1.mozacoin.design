import React from 'react'
import {Divider} from 'react-native-elements'
import { View, Image, Text} from 'react-native'
import WalletList from '../screens/WalletList'
import themeColors from '../theme/colors'


export default class Wallet extends React.Component {

    render(){
        const { nav } = this.props
        
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    paddingBottom: 10,
                    justifyContent: "space-between",
                    alignItems: 'center',
                }}>
                    <Text 
                        style={{ 
                            fontSize: 20 
                        }}>Available Crypto</Text>
                    <Text onPress={() => nav('WalletPage') }
                        style={{ 
                            color: themeColors.primary, 
                            fontSize: 16 
                        }}>See All Coins</Text>
                </View>
                <Divider />
                <WalletList 
                    img= {require('../assets/images/bitcoin.png')}
                    title= "Bitcoin"
                    money= "FCFA 12,234,983.00"
                />

                <WalletList 
                    img= {require('../assets/images/litecoin.png')}
                    title= "Litecoin"
                    money= "FCFA 12,234,983.00"
                />

                <WalletList 
                    img= {require('../assets/images/binancecoin.png')}
                    title= "Binance Coin"
                    money= "FCFA 12,234,983.00"
                />

                <WalletList
                    img= {require('../assets/images/stellarcoin.png')}
                    title= "Stellar Lumes"
                    money= "FCFA 12,234,983.00"
                />
                
    
            </View>
        )
    }
    
}