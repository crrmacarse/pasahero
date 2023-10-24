import { Button, Text, View } from "react-native"
import { SCREENS } from "../constants/config";

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Route"
            onPress={() => navigation.navigate(SCREENS.ROUTE)}
        />
        <Button
            title="Go to Map"
            onPress={() => navigation.navigate(SCREENS.MAP)}
        />
        <Button
            title="Go to About"
            onPress={() => navigation.navigate(SCREENS.ABOUT)}
        />
    </View>
);

export default HomeScreen;