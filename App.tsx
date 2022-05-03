import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, LogBox } from 'react-native';
import ImageModal from './src/Modal';

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [])
  const [onOpenImageModal, setOnImageModal] = useState(false)
  const [image, setImage] = useState('');

  const onImageUpload = () => {
    setOnImageModal(true)

  }
  
  return (
    <>
      {onOpenImageModal ? <ImageModal isVisible={onOpenImageModal} setOnImageModal={setOnImageModal} onClose={false} setImage={setImage} /> : null}
      <View style={styles.container}>
        <Text style={styles.greeting}>
          Hello
        </Text>
        <View>
          <TouchableOpacity onPress={onImageUpload}>
            <ImageBackground
              source={image ? { uri: image } : require('./assets/avatar.png')}
              imageStyle={{
                borderRadius: 232,
                borderWidth: 1.5,
                borderColor: "red",
              }}
              style={{
                width: 120,
                height: 120,
              }}>

            </ImageBackground>
            <View
              style={{
                width: 30,
                height: 30,

                borderRadius: 20,
                bottom: 40,
                left: 80,
              }}>
              <View style={{ alignSelf: 'center', top: 8 }}>
                <Image source={require('./assets/camlogo.png')} style={{ width: 50, height: 50 }} />
              </View>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },

});

export default App;

