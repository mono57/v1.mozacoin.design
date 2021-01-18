import React from 'react'
import { View, Text, Image, TouchableOpacity, Button} from 'react-native'
import { Icon, Header } from 'react-native-elements'


export default class WalletPage extends React.Component{
    render(){
        const { onPress } = this.props
        return(
            <View>
                <Header containerStyle={{
                    backgroundColor: '#FFF',
                }}
            
                    leftComponent={
                        <TouchableOpacity >
                            <Icon name='arrowleft' type='antdesign' />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        
                        
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        }}>
                        <Image style={{
                            width: 27,
                            height: 27
                            
                        }} source= {require('../assets/images/bitcoin.png')} />
                        <Text style={{
                            fontSize: 20,
                            marginLeft: 6,
                            fontWeight: '600'
                        }}  >Bitcoin</Text>
                        
                    </View>
                    }
                    rightComponent={
                        <TouchableOpacity>
                            <Icon name='ellipsis1' type='antdesign' />
                        </TouchableOpacity>
                    }
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingVertical: 50
                }}>
                    <Text style={{
                        fontWeight: '900',
                        fontSize: 28,
                        
                    }}>0.02938429 BTC</Text>
                        
                    
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        marginTop: -50,
                        fontSize: 17,
                        fontWeight: '900',
                        color: 'grey'

                    }}> FCFA  ~68,298</Text>

                </View>


                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                }}>
                        <TouchableOpacity>
                            <Button  style={{
                               width: 20
                            }}
                                title= "Send"
                                color= "#2BA245"
                            />
                        </TouchableOpacity>
                         
                        <TouchableOpacity>
                            <Button
                                title= "Receive"
                                color= "#F7931A"
                            />
                        </TouchableOpacity>
                        


                </View>
                <Text style={{
                    paddingHorizontal: 20,
                    fontSize: 16
                }}>Trade actions</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 30,
                    paddingHorizontal: 20

                }}>
                    <Button
                        title= "Buy"
                        color= "#2BA245"
                     />
                     <Button
                        title= "Sell"
                        color= "#2BA245"
                     />

                    <Button
                        title= "Swap"
                        color= "#2BA245"
                     />
                </View>

                <Text style={{
                    paddingHorizontal: 20,
                    fontSize: 16
                }}>Transaction</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../assets/images/Vector.png')} />
                </View>
                
            </View>

        );   
            
            
    }
}

