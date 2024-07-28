import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import {COLOR} from '../const/colors';

const MainLayout = ({children, customStyle}) => {
  return (
    <ImageBackground
      source={require('../assets/img/bg/Aquabg5.jpg')}
      style={{flex: 1}}>
      <SafeAreaView style={[customStyle, styles.safeArea]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.blue + 20,
    
  },
});
