import React from 'react';
import { View, Text} from 'react-native';
import { Header, Input } from 'react-native-elements';
import ValueBox from '../Components/ValueBox';
import TransactionBox from '../Components/TransactionBox';
import HomeScreenHeader from '../Components/HomeScreenHeader';

const HomeScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1}}>
           <HomeScreenHeader>
                
           </HomeScreenHeader>
        </View>
    );
}

export default HomeScreen;