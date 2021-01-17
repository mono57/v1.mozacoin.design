import { ThemeProvider } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import themeColors from '../theme/colors'

export default class WalletList extends React.Component {
    render(){
        const {img, title, money, bg, onPress} = this.props
        return(
            
                <TouchableOpacity>
                   <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 15,
                    }}> 
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <Image 
                                source={img}
                            />
                            <View style={{marginLeft: 8}}>
                                <Text style={{
                                    fontSize: 24,
                                }}>{title}</Text>

                                <View style= {{flexDirection: 'row'}}>
                                    <Text>{money}</Text>
                                    <Text style={{
                                        color: themeColors.primary
                                    }}>{' '} +0.42%</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{
                            alignItems: "flex-end"
                        }}>
                            <Text style={{fontSize: 18}}>0.09322 BTC</Text>
                            <Text>~FCFA 72,382</Text>

                        </View>
                    </View>
                </TouchableOpacity>
           
        );
    }
}