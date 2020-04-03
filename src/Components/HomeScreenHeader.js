import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import ValueBox from './ValueBox';
import TransactionBox from './TransactionBox';
import { Ionicons } from '@expo/vector-icons';



const HomeScreenHeader = () => {
    return(
        <View style={{flex: 1, height: '18%', width: '100%'}}>
           
                <Header 
                 statusBarProps={{ barStyle: 'light-content' }}
                 barStyle="light-content"
               
                  // or directly
                 leftComponent={{ icon: 'menu', color: '#fff', size: 40   }
              
                }
                 centerComponent={{ text: 'MY TITLE', style: { color: '#fff', justifyContent: 'center' } }}
                 containerStyle={{
                   backgroundColor: 'blue',
                   justifyContent: 'space-around',
                   borderBottomColor: 'blue',
                   height: '10%',
                
                   
                 }}
               
                />
                <ValueBox />
                <Text style={{ fontSize: 20, }}> Recent Transaction </Text>
                <TransactionBox />

                
        </View>
    );
}

export default HomeScreenHeader;