import {StyleSheet, Text, View, Animated} from 'react-native';
import {useEffect, useRef} from 'react';

const GreatingScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [animation]);

  return (
    <View>
      <Animated.View style={[{opacity: animation}, styles.subContainer]}>
        <Text style={styles.text}>Here you are! </Text>
        <Text style={styles.text}>You are</Text>
        <Text style={styles.text}>WELCOME TO</Text>
        <Text style={styles.quizText}>Aquarium Fish Quiz!</Text>
      </Animated.View>
    </View>
  );
};

export default GreatingScreen;

const styles = StyleSheet.create({});
