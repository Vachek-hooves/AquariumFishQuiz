import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GameScreen, GreatingScreen, MainScreen} from './screen';
import {AquaProvider} from './store/aqua_context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AquaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="GreatingsScreen" component={GreatingScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AquaProvider>
  );
}

export default App;
