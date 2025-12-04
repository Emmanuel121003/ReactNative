import CalculatorButton from '@/components/Calculatarbuttom';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { globalstyles } from '@/styles/global-styles';
import { View } from 'react-native';
import { useCalculator } from '@/hooks/useCalculator';

const  Carlculadora = () => {

  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  
    return (
   <View style={globalstyles.CalculadoraContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

       {/* Filas de botones */}

      <View style={globalstyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightgrey}
          onPress={clean}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightgrey}
          onPress={toggleSign}
        />
        <CalculatorButton
          label="Del"
          blackText
          color={Colors.lightgrey}
          onPress={deleteLast}
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalstyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber('7')} />
        <CalculatorButton label="8" onPress={() => buildNumber('8')} />
        <CalculatorButton label="9" onPress={() => buildNumber('9')} />
        <CalculatorButton
          label="X"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalstyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber('4')} />
        <CalculatorButton label="5" onPress={() => buildNumber('5')} />
        <CalculatorButton label="6" onPress={() => buildNumber('6')} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={globalstyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber('1')} />
        <CalculatorButton label="2" onPress={() => buildNumber('2')} />
        <CalculatorButton label="3" onPress={() => buildNumber('3')} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={globalstyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => buildNumber('0')}
        />
        <CalculatorButton label="." onPress={() => buildNumber('.')} />

        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};
export default Carlculadora;