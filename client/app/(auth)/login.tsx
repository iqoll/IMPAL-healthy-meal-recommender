import { globalStyles } from "@/styles/global";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

    const goToHome = () => {
        router.push('/(tabs)');
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Login</Text>
            <Button title="Login" onPress={goToHome} />
        </View>
    );
}