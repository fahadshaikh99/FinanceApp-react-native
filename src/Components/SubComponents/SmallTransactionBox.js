import React from 'react';
import { View, Text} from 'react-native';

const SmallTransactionBox  = () => {
    return(
        <View style={{marginLeft: '5%', marginBottom: '3%', flexDirection: "column", flex: 1, justifyContent: 'center', justifyContent: 'space-around'}}>
            <View style={{marginTop: '3%', height: '20%', borderRadius: 10, width: '90%', backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{ fontSize: 20, marginLeft: '2%'}}>
                    Money Sent
                </Text>
                <Text style={{ fontSize: 10, marginLeft: '2%'}}>
                    XXXXXXXXXXX
                </Text>
            </View>

            <View style={{marginTop: '3%', height: '20%', borderRadius: 10, width: '90%', backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{ fontSize: 20, marginLeft: '2%'}}>
                    Money Sent
                </Text>
                <Text style={{ fontSize: 10, marginLeft: '2%'}}>
                    XXXXXXXXXXX
                </Text>
            </View>

            <View style={{marginTop: '3%', height: '20%', borderRadius: 10, width: '90%', backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{ fontSize: 20, marginLeft: '2%'}}>
                    Money Sent
                </Text>
                <Text style={{ fontSize: 10, marginLeft: '2%'}}>
                    XXXXXXXXXXX
                </Text>
            </View>

            <View style={{marginTop: '3%', height: '20%', borderRadius: 10, width: '90%', backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{ fontSize: 20, marginLeft: '2%'}}>
                    Money Sent
                </Text>
                <Text style={{ fontSize: 10, marginLeft: '2%'}}>
                    XXXXXXXXXXX
                </Text>
            </View>
  
        </View>
    );
}

export default SmallTransactionBox;