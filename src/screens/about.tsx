import { Button, Text, View } from "react-native"
import { SCREENS } from "../constants/config";

const AboutScreen = ({ navigation  }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate(SCREENS.HOME)}
        />
    </View>
);

export default AboutScreen;