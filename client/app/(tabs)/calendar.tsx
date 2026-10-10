import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MainHeader from "@/shared/MainHeader";

export default function CalendarScreen() {
    return (
        <View style={globalStyles.container}>
            <MainHeader 
                onProfilePress={() => {}}
                onNotificationPress={() => {}}
            />
            <Text style={globalStyles.title}>Calendar</Text>
        </View>
    );
}