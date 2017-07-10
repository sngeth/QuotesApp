import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class QuotesApp extends Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
      quote: '',
      author: '',
      output: ''
    }
  }

  handleQuote(quote) {
    this.setState({submitted: false, quote: quote})
  }

  handleAuthor(author) {
    this.setState({submitted: false, author: author})
  }

  submit() {
    const output = this.state.author + " says, " +
      "\"" + this.state.quote +"\""

    this.setState({submitted: true, output: output})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Quoterizer!
        </Text>
        <Text style={styles.instructions}>
          What is the quote?
        </Text>
        <TextInput
          style={styles.input}
          selectionColor='#666666'
          onChangeText={(str) => this.handleQuote(str)} />
        <Text style={styles.instructions}>
          Who said it?
        </Text>
        <TextInput
          style={styles.input}
          selectionColor='#666666'
          onChangeText={(str) => this.handleAuthor(str)} />
        <TouchableHighlight
          underlayColor='#efefef'
          style={styles.button}
          onPress={this.submit.bind(this)}>
          <Text style={styles.submit}>
            Submit
          </Text>
        </TouchableHighlight>
        <View>
          {this.state.submitted ? <Text>{this.state.output}</Text>: null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 60,
    width: 300,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  },
  button : {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    color: '#666666',
    fontWeight: '600'
  }
});

AppRegistry.registerComponent('QuotesApp', () => QuotesApp);
