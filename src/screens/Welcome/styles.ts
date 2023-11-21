import { StyleSheet } from "react-native";

export const colors = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#FFA500",
  alternative: "#666",
  disabled: "rgba(5, 122, 253, 0.5)",
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    flex: 1,
    gap: 20,  
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  infos:{
    width: '100%',
    alignItems: "center"
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary,
  }, 
  observation:{
    width: '80%',
    gap: 20,
    marginBottom: 40
  },
  text: {
    color: colors.secondary,
    fontSize: 15,
  }
});
