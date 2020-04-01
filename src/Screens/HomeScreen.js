import React from 'react';
import { View, Text} from 'react-native';
import { Header } from 'react-native-elements'
import ValueBox from '../Components/ValueBox';
import TransactionBox from '../Components/TransactionBox';

const HomeScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1}}>
           <Header
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content" // or directly
                // leftComponent={<MyCustomLeftComponent />}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff', fontSize: 30, alignItems: 'center' } }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                      justifyContent: 'space-around',
                 }}
            />
            <View style={{flex: 2, marginTop: '10%'}}>
                <ValueBox />
                <TransactionBox />
            </View>
        </View>
    );
}

export default HomeScreen;