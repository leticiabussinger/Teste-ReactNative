import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, FlatList } from "react-native";
import { styles } from "./styles";
import { PrimaryButton } from "../../components/PrimaryButton";
import { getSearchFilms } from "../../services/apiTMDB";
import FlatListFilms from "../../components/FlatListFilms";
import FlatListSearch from "../../components/FlatListSearch";

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [listFilms, setListFilms] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  function listSearchFilms(research) {
    getSearchFilms(research)
      .then(response => {
        setListFilms(response.data.results)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/LogoApp1.png")}
            style={styles.image}
          />
          <View style={styles.infos}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#424242'}
              onChangeText={(text) => setSearchText(text)}
              placeholder="Digite o título do filme"
            />
          </View>
          <PrimaryButton title="Pesquisar" onPress={() => listSearchFilms(searchText)} />
          <FlatListSearch list={listFilms}/>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
