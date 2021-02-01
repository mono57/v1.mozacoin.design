import React from 'react'

import { View, TouchableOpacity } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import themeColors from '../theme/colors'

const Control = ({ displayText, iconName, bgColor = themeColors.primary, iconType = 'ionicon', iconSize=32 }) => (
    <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                backgroundColor: bgColor,
                height: 50,
                width: 50
            }}>
                <Icon
                    name={iconName}
                    type={iconType}
                    color='#fff'
                    size={iconSize}
                />
            </View>
        </TouchableOpacity>
        <Text style={{marginTop: 8}}>
            {displayText}
        </Text>
    </View>
)

export default () => {
    return (
        <View style={{marginTop: 30, marginHorizontal: 20, flexDirection: 'row', justifyContent: "space-between"}}>
            <Control displayText='Top Up' iconName='caret-up' />
            <Control displayText='Payout' iconName='caret-down' />
            <Control 
                displayText='Send to Friend' 
                iconName='send' 
                bgColor={themeColors.secondary} 
                iconType="feather"
                iconSize={24}
            />

        </View>
    )
}