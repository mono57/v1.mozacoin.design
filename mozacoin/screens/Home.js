import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, Text, View, RefreshControl } from 'react-native'
import { Icon, Header, Avatar } from 'react-native-elements'
import Balance from '../components/Balance'
import ButtonControl from '../components/ButtonControl'
import Wallet from '../components/Wallet'

import themeColors  from '../theme/colors';

export default ({navigation}) => {
    const onNavigate = screenName => navigation.navigate(screenName)

    const [refreshing, setRefreshing] = useState(false);

    const r = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false)
        }, 3000 )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header containerStyle={{
                    backgroundColor: 'white',
                    borderBottom: 'None',
                }}
            
                    leftComponent={
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Home</Text>
                        </View>
                    }
                    
                    rightComponent={
                        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}} >
                            <Icon name='qrcode' type='font-awesome' />
                        </TouchableOpacity>
                    }
                />

            <ScrollView showsVerticalScrollIndicator={false} 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={r} colors={[themeColors.primary]} />
                }
            >

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
        padding: 10,
        backgroundColor: '#fff'
    }
})
