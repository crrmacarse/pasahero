import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/screens/map';
import RouteScreen from './src/screens/route';
import { SCREENS } from './src/constants/config';
import HomeScreen from './src/screens/home';
import NavigationHeader from './src/components/navigation-header';
import NavigationTitle from './src/components/navigation-title';
import AboutScreen from './src/screens/about';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={SCREENS.HOME} screenOptions={{
      headerStyle: {
        backgroundColor: '#052673',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: () => <NavigationTitle />,
      headerRight: () => <NavigationHeader />
    }}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.ROUTE} component={RouteScreen} />
      <Stack.Screen name={SCREENS.MAP} component={MapScreen} />
      <Stack.Screen name={SCREENS.ABOUT} component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App;