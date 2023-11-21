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
    width: '100%',
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
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderRadius: 5,
    padding: 15,
    color: colors.secondary,
  },
  filmCover:{
    width: 70,
    height: 90  
  }
});
