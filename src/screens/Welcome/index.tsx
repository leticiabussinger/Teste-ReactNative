import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { PrimaryButton } from "../../components/PrimaryButton";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/LogoApp1.png")}
        style={styles.image}
      />
      <View style={styles.infos}>
        <View style={styles.observation}>
          <View>
            <Text style={styles.heading}>Bem-vindo,</Text>
            <Text style={styles.heading}>à nossa comunidade!</Text>
          </View>
          <Text style={styles.text}>Agradecemos por baixar nosso aplicativo e não esqueça de nos avaliar.</Text>
        </View>
        <PrimaryButton title="Continuar" onPress={() => navigation.navigate('home')} />
      </View>
    </View>
  );
}
