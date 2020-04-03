import React from 'react';
import { View, Text} from 'react-native';
import SmallTransactionBox from '../Components/SubComponents/SmallTransactionBox';

const TransactionBox = () => {
    return(
        <View style={{ height: '40%', marginHorizontal: '5%', borderRadius: 10, width: '90%', backgroundColor: 'skyblue'}}>
             <View style={{ flex: 1}}>
                 <SmallTransactionBox />
                 
                 
                
           </View>
        </View>
    );
}

export default TransactionBox;