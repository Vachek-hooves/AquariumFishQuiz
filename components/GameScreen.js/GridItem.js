import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {COLOR} from '../../const/colors';

const GridItem = ({subject}) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <Text style={styles.text}>{subject}</Text>
    </TouchableOpacity>
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
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: COLOR.light + 90,
  },
  text: {
    color: COLOR.white,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
