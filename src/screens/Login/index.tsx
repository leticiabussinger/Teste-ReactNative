import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView, Platform } from "react-native";

import { styles } from "./styles";
import Logo from '../../assets/claquete.gif'
import { InputTextLogin } from "../../components/InputTextLogin";
import { PrimaryButton } from "../../components/PrimaryButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageClaquete from "../../components/ImageClaquete";


export default function Login( {navigation}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const validarEmail = (email: string) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validarSenha = (senha : string) => {
    return senha.length >= 6;
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user-data');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    getData().then(user => {
      if (user !== null) {
        setEmail(user.email);
        setPassword(user.password);
      }
    });
  }, []);

  const handleSubmit = () => {
    getData().then(user => {
      if (user !== null) {
        if (email === user.email && password === user.password) {
          setMessage("");
          navigation.navigate('Welcome');
          setPassword("");
          setEmail("");
        } else {
          setMessage("Dados de login incorretos");
        }
      } else {
        if (email === "" || password === "") {
          setMessage("Preencha todos os campos");
        } else if (!validarEmail(email)) {
          setMessage("Somente endereços de e-mail válidos são aceitos");
        } else if (password.length < 6) {
          setMessage("A senha deve ter pelo menos 6 caracteres");
        } else if (!validarSenha(password)) {
          setMessage("A senha deve incluir números");
        } else {
          setMessage("");
          navigation.navigate('welcome');
          setPassword("");
          setEmail("");
        }
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ImageClaquete />
        <Text style={styles.message}>{message}</Text>
        <View style={styles.textInput}>
          <InputTextLogin title="Email" value={email} onChangeText={setEmail}/>
          <InputTextLogin title="Senha" value={password} secureContent={showPassword} onChangeText={setPassword} onPress={setShowPassword}/>
        </View>
        <PrimaryButton onPress={handleSubmit} title="Entrar"/>
        <View style={styles.anyAccount}>
          <Text style={styles.text}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('cadastro')}> 
            <Text style={styles.textRegister}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


