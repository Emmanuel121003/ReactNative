import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Este es mi examen</Text>

     
      <TouchableOpacity 
        style={styles.boton} 
        onPress={() => setMensajeVisible(true)}
      >
        <Text style={styles.textoBoton}>Presioname</Text>
      </TouchableOpacity>

      
      {mensajeVisible && (
        <Text style={styles.mensaje}>Estoy pasado</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginTop: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mensaje: {
    color: 'blue',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
