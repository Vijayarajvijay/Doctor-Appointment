import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../Constant';

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    {
      id: '0',
      text: 'Hi VIJAYA RAJ M',
      sent: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: '1',
      text: `Welcome to the Doctor Appointment Booking App. How can we assist you today?`,
      sent: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: '2',
      text: 'Refresh your app, ensure network stability 📶',
      sent: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { id: messages.length.toString(), text: inputText, sent: true, time: currentTime }]);
      setInputText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={{marginBottom:15}}>

    <View style={{ flexDirection: item.sent ? 'row-reverse' : 'row' }}>
      {!item.sent && <Image source={require('../assets/images/instagram1.png')} style={styles.logo} />}

      <View style={[styles.messageContainer, item.sent ? styles.sentMessage : styles.receivedMessage]}>
        <View style={styles.messageContent}>
          <Text style={item.sent ? styles.sentMessageText : styles.receivedMessageText}>{item.text}</Text>
        </View>
      </View>
      
    </View>
    <Text style={item.sent? styles.recivetime:styles. messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  recivetime:{
    fontSize: 12,
    color: '#666',
alignSelf:"flex-end"
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    maxWidth: '70%',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sentMessage: {
    backgroundColor: Colors.secondary,
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: '#e5e5e5',
    alignSelf: 'flex-start',
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  sentMessageText: {
    color: Colors.white,
    fontSize: 16,
  },
  receivedMessageText: {
    color: '#000',
    fontSize: 16,
    textAlign:"left",
   
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
    alignSelf: "flex-start",
    marginLeft:30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatSupport;
