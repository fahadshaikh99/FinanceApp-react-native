import React from 'react';
import { View, Text} from 'react-native';


const ValueBox = () => {
    return(
        <View style={{ height: '46%', marginHorizontal: '5%', borderRadius: 40, width: '90%', backgroundColor: 'pink'}}>
            <Text style={{ marginTop: '5%', marginLeft: '10%', fontSize: 30}}>
                PKR XXXX
            </Text>
        </View>
    );
}

export default ValueBox;