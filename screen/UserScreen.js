import {Text} from 'react-native';
import MainLayout from '../components/MainLayout';
import {useContext, useEffect} from 'react';
import {AquariumContext} from '../store/aqua_context';

const UserScreen = () => {
  const {gameScore, totalScore} = useContext(AquariumContext);
  useEffect(() => {
    totalScore();
  }, []);
  return (
    <MainLayout>
      <Text>{gameScore}</Text>
    </MainLayout>
  );
};

export default UserScreen;
