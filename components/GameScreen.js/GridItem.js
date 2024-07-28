import {StyleSheet, Text, Pressable} from 'react-native';
import {COLOR} from '../../const/colors';
import {useState} from 'react';

const GridItem = ({subject, onPress, isSelected}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressed = () => {
    setIsPressed(prevState => !prevState);
    onPress();
  };
  return (
    <Pressable
      onPress={handlePressed}
      // style={[styles.gridItem, isPressed ? styles.btnPressed : null]}
      style={[styles.gridItem, isSelected ? styles.btnPressed : null]}>
      <Text style={styles.text}>{subject}</Text>
    </Pressable>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  gridItem: {
    width: '30%', // Ширина кожного елемента
    aspectRatio: 1, // Співвідношення сторін 1:1
    borderWidth: 2,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: COLOR.light + 90,
    borderColor:COLOR.ocean
  },
  text: {
    color: COLOR.white,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  btnPressed: {
    backgroundColor: COLOR.ocean + 90,
    borderWidth: 3,
    borderColor: COLOR.white,
  },
});
