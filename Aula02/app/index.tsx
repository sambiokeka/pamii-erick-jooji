import { Text, View, StyleSheet } from "react-native";
import BotaoProps from '../components/botao'

export default function Index() {
  const handlePress = () => {
    console.log('Botão pressionado');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


  return (
    <View style={styles.container}>
      <BotaoProps label="Clique aqui" corFundo="green" onPress={handlePress} />
      <BotaoProps label="Clique aqui" corFundo="pink" onPress={handlePress} />
      <BotaoProps label="Clique aqui" corFundo="gray" onPress={teste} />

    </View>
  );
}
