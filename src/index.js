import React, {Component} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultadoText: '',
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;
    if (s.resultado < 16) {
      s.resultadoText = 'Magreza grave';
    } else if (s.resultado < 17) {
      s.resultadoText = 'Magreza moderada';
    } else if (s.resultado < 18.5) {
      s.resultadoText = 'Magreza leve';
    } else if (s.resultado < 25) {
      s.resultadoText = 'Saudável';
    } else if (s.resultado < 30) {
      s.resultadoText = 'Sobrepeso';
    } else if (s.resultado < 35) {
      s.resultadoText = 'Obesidade Grau I';
    } else if (s.resultado < 40) {
      s.resultadoText = 'Obesidade Grau II (severo)';
    } else {
      s.resultadoText = Alert.alert('Informe seu peso e altura');
    }
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={massa => {
              this.setState({massa});
            }}
          />
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={altura => {
              this.setState({altura});
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 35}]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}
