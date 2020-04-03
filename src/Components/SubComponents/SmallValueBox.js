import React from 'react';
import { View, Text} from 'react-native';

const SmallValueBox = () => {
    return(
        <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center', justifyContent: 'space-around'}}>

            <View style={{ height: '90%', borderRadius: 10, width: '38%', backgroundColor: 'white'}}>
                <Text style={{ fontSize: 20, marginLeft: '9%'}}>
                    CASH
                </Text>
                    <Text style={{ color: 'blue', fontSize: 15, marginLeft: '9%'}}>
                        PKR XXXX
                    </Text>
            </View>

            <View style={{ height: '90%', borderRadius: 10, width: '38%', backgroundColor: 'white'}}>
                <Text style={{ fontSize: 20, marginLeft: '9%'}}>
                     CASH
                 </Text>
                    <Text style={{ color: 'blue', fontSize: 15, marginLeft: '9%'}}>
                         PKR XXXX
                    </Text>
            </View>
            
        </View>
    );
}
export default SmallValueBox;