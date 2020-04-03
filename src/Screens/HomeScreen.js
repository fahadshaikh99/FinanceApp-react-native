import React from 'react';
import { View, Text, ImageBackground, StyleSheet} from 'react-native';
import { Header, Input } from 'react-native-elements';
import ValueBox from '../Components/ValueBox';
import TransactionBox from '../Components/TransactionBox';
import HomeScreenHeader from '../Components/HomeScreenHeader';




const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../../assets/Background.jpg')} style={styles.image}>
            <HomeScreenHeader />
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  
export default HomeScreen;