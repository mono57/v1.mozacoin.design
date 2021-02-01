import React from 'react'
import { StatusBar } from 'react-native';
import { View, Text, Image, TouchableOpacity, Modal} from 'react-native'
import { Icon, Header, colors } from 'react-native-elements'
import { Button, Divider } from 'react-native-elements';
import  QRCode  from 'react-native-qrcode-svg';

import themeColors from '../theme/colors'


export default class WalletPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
    }

    render(){
        const { onPress } = this.props
        return(
            <View  style={{backgroundColor: 'white', height: '100%'}}>
                <Header containerStyle={{
                    backgroundColor: '#red',
                    borderWidth: 0
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
                                width: 28,
                                height: 28
                                
                            }} source= {require('../assets/images/bitcoin.png')} />
                            <Text style={{
                                fontSize: 23,
                                marginLeft: 6,
                                fontWeight: '700'
                            }}  >Bitcoin</Text>
                        </View>
                    }
                    rightComponent={
                        <TouchableOpacity>
                            <Icon name='ellipsis1' type='antdesign'  />
                        </TouchableOpacity>
                    }
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingBottom: 70,
                    paddingTop: 70
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 32,
                    }}>0.02938429 BTC</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        marginTop: -50,
                        fontSize: 18,
                        fontWeight: '900',
                        color: 'grey'

                    }}> FCFA ~68,298.00</Text>

                </View>


                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        paddingVertical: 25,
                }}>
                        <TouchableOpacity>
                            <Button  style={{
                               width: 20
                            }}
                                title= "Send"
                                color= "#2BA245"
                                icon={<Icon name='send' type='ionicon' size={16} color='white' style={{marginRight: 6}} />}
                                buttonStyle={{width: '88%'}}
                            />
                        </TouchableOpacity>
                         
                        <TouchableOpacity>
                            <Button
                                title= "Receive"
                                onPress={() => { this.setState({visible: true}) }}
                                color= "#F7931A"
                                icon={<Icon name='qr-code' type='ionicon' size={16} color='white' style={{marginRight: 6}} />}
                                buttonStyle={{width: '88%', backgroundColor: '#F7931A'}}
                            />
                        </TouchableOpacity>
                </View>
                <Text style={{
                    paddingHorizontal: 20,
                    fontSize: 16,
                    marginBottom: 5
                }}>Quick actions</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                    marginBottom: 20

                }}>
                    <Button
                        title= "Buy"
                        color= "#2BA245"
                        icon={<Icon name='shopping-cart' type='font-awesome' size={16} color='white' style={{marginRight: 6}} />}
                        buttonStyle={{width: '61%', backgroundColor: '#2BA245'}}
                     />
                     <Button
                        title= "Sell"
                        color= "#2BA245"
                        icon={<Icon name='pricetag' type='ionicon' size={16} color='white' style={{marginRight: 6}} />}
                        buttonStyle={{width: '61%', backgroundColor: '#2BA245'}}
                     />

                    <Button
                        title= "Swap"
                        color= "#2BA245"
                        icon={<Icon name='swap-horizontal' type='ionicon' size={16} color='white' style={{marginRight: 6}} />}
                        buttonStyle={{width: '61%', backgroundColor: '#2BA245'}}
                     />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    marginBottom: 10,
                    paddingHorizontal: 20,
                }}>
                    <Text 
                        style={{ 
                            fontSize: 16
                        }}>Transactions</Text>
                    <Text
                        style={{ 
                            color: themeColors.primary, 
                            fontSize: 16 
                        }}>More Infos</Text>
                </View>
                <Divider style={{marginHorizontal: 20}} />
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    width: '100%'
                }}>
                    <Icon name="trash" type='font-awesome' size={40} color="#99989A" />
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#99989A'
                        }}
                    >
                        No transaction yet!
                    </Text>
                </View>
                
                <Modal 
                    visible={this.state.visible}
                    animationType='slide'
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        marginBottom: 5,
                        marginHorizontal: 20,
                        paddingVertical: 10
                    }}>
                       <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Deposit</Text>
                       <TouchableOpacity style={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           height: 33,
                           width: 33,
                           backgroundColor: '#ff5247',
                           borderRadius: 20
                       }}
                            onPress={() => {
                                this.setState({
                                    visible: false
                                })
                            }}
                       >
                            <Icon name='close-outline' type='ionicon' size={20} color="#fff" />
                       </TouchableOpacity>
                    </View>
                    <Text onPress={() => {
                        this.setState({visible: false})
                    }} 
                    style={{
                        marginHorizontal: 20,
                        fontSize: 14,
                        color: '#363636',
                        fontWeight: '300'
                    }}
                    >
                        Scan the QR code to get the exact address and receive your fund.
                    </Text>
                    <View style={{
                        marginHorizontal: 20,
                        marginVertical: 20,
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                    }} >
                        <View style={{flexDirection: 'row',}} >
                            <Image style={{
                                width: 28,
                                height: 28
                                
                            }} source= {require('../assets/images/bitcoin.png')} />
                            <Text style={{
                                fontSize: 18,
                                marginLeft: 6,
                                fontWeight: '600'
                            }}  >Bitcoin</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }} >
                            <View style={{
                                backgroundColor: '#F5F5F5',
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                borderRadius: 33,
                                marginRight: 8,
                                
                            }} >
                                <Text style={{fontSize: 12}} >Segwit</Text>
                            </View>
                            <View style={{
                                borderColor: themeColors.primary,
                                borderWidth: 1,
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                borderRadius: 33,
                            }} >
                                <Text style={{fontSize: 12}}>Legacy</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center'
                    }} >
                        <View style={{
                            borderColor: themeColors.primary,
                            borderWidth: 1,
                            borderRadius: 4,
                            padding:16,
                            marginBottom: 16
                        }} >
                        <QRCode 
                            value="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
                            size={170}
                            
                        />
                        </View>
                        
                        <View style={{
                            marginBottom: 16
                        }} >
                            <Text style={{
                                fontSize: 14,
                                textAlign: 'center',
                            }} numberOfLines={1} >
                                1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }} >

                            <TouchableOpacity style={{
                                height: 40,
                                width: 40,
                                borderRadius: 25,
                                backgroundColor: themeColors.primary,
                                justifyContent: 'center',
                                marginRight: 8
                            }} >
                                <Icon name='refresh-outline' type='ionicon' size={18} color="#fff"  />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 40,
                                width: 40,
                                borderRadius: 25,
                                backgroundColor: '#F9F9F9',
                                justifyContent: 'center',
                                borderColor: '#E4E6EA',
                                borderWidth: 1,
                                
                            }} >
                                <Icon name='share-social-outline' type='ionicon' size={18}  />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        marginHorizontal: 20,
                    }} >
                        <Button 
                            icon={<Icon name='copy' type='ionicon' size={16} style={{marginRight: 6}} color='#fff' />}
                            title='Copy BTC Address'
                            buttonStyle={{
                                backgroundColor: themeColors.primary,
                                padding: 10,
                            }}
                            containerStyle={{
                                padding: 8
                            }}
                        />
                    </View>
                </Modal>

            </View>

        );   
            
            
    }
}

