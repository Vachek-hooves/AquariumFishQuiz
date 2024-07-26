import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../components/MainLayout';
import {useContext} from 'react';
import {AquariumContext} from '../store/aqua_context';
import {COLOR} from '../const/colors';
import {GridItem} from '../components/GameScreen.js';

const GameScreen = () => {
  const {aquaData} = useContext(AquariumContext);
  console.log(aquaData);
  return (
    <MainLayout>
      <View style={styles.gridContainer}>
        {aquaData.map((item, index) => (
          <GridItem subject={item.subject} key={index} />
        ))}
      </View>
    </MainLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
