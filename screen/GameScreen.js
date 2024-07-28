import {StyleSheet, View} from 'react-native';
import MainLayout from '../components/MainLayout';
import {useContext, useState} from 'react';
import {AquariumContext} from '../store/aqua_context';
import {ChoosenQuizes, GridItem} from '../components/GameScreen.js';

const GameScreen = () => {
  const {aquaData} = useContext(AquariumContext);
  const [choosenQuizes, setChoosenQuizes] = useState([]);
  // console.log(choosenQuizes);

  const choosenQuiz = item => {
    const isChoosen = choosenQuizes.some(quiz => quiz.id === item.id);
    if (isChoosen) {
      // if already choosen, then remove from array
      setChoosenQuizes(prevState =>
        prevState.filter(quiz => quiz.id !== item.id),
      );
    } else if (choosenQuizes.length < 3) {
      // if element not choosen and length less then 3
      setChoosenQuizes(prevState => [...prevState, item]);
    }
  };
  // check if selected element is in array if true elemet will change bg color.
  const isSelected = item => {
    return choosenQuizes.some(quiz => quiz.id === item.id);
  };
  return (
    <MainLayout>
      <View style={styles.gridContainer}>
        {aquaData.map((item, index) => (
          <GridItem
            subject={item.subject}
            key={index}
            onPress={() => choosenQuiz(item)}
            isSelected={isSelected(item)}
          />
        ))}
      </View>
      <ChoosenQuizes data={choosenQuizes} />
      {/* {choosenQuizes.length > 0 && <Text>Play</Text>} */}
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
