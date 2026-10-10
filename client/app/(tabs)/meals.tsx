import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MainHeader from "@/shared/MainHeader";

export default function MealsScreen() {
    return (
        <View style={globalStyles.container}>
            <MainHeader 
                            onProfilePress={() => {}}
                            onNotificationPress={() => {}}
            />
            <Text style={globalStyles.title}>Meals</Text>
        </View>
    );
}
