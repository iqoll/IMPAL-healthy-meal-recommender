import { globalStyles } from "@/styles/global";
import { View } from "react-native";
import { Text } from "@/shared/AppText";

export default function HealthScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Health</Text>
        </View>
    );
}
