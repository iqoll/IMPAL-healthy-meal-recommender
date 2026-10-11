import { globalStyles } from "@/styles/global";
import { View } from "react-native";
import { Text } from "@/shared/AppText";

export default function CalendarScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Calendar</Text>
        </View>
    );
}