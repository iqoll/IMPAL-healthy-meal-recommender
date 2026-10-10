import MainHeader from "@/shared/MainHeader";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

export default function HealthScreen() {
    return (
        <View style={globalStyles.container}>
            <MainHeader 
                onProfilePress={() => {}}
                onNotificationPress={() => {}}
            />
            <Text style={globalStyles.title}>Health</Text>
        </View>
    );
}
