import React from 'react';
import { View, Text} from 'react-native';
import SmallValueBox from './SubComponents/SmallValueBox';


const ValueBox = () => {
    return(
        <View style={{ height: '40%', marginHorizontal: '5%', borderRadius: 40, width: '90%', backgroundColor: 'pink'}}>
          
            <Text style={{ marginTop: '5%', marginLeft: '10%', fontSize: 30}}>
                PKR XXXX
            </Text> 
            <View style={{ flex: 1}}>
            <SmallValueBox />
            <SmallValueBox />
           </View>
            {/* <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center'}}>

                <View style={{ height: '38%', borderRadius: 10, width: '38%', backgroundColor: 'white'}}>
                </View>
                <View style={{ height: '38%', borderRadius: 10, width: '38%', backgroundColor: 'white'}}>
                </View>
            </View> */}

            
        </View>
    
    );
}

export default ValueBox;