import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '@rneui/base';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from "expo-image-picker";
import { styles } from './InfoUser.styles';

export function InfoUser() {
  
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  const changeAvatar = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      uploadImage(uri);
    } else {
      console.log('Image selection canceled or no assets');
    }
  };

  const uploadImage = async (uri) => {

    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const storage = getStorage();
      const storageRef = ref(storage, `avatar/${uid}`);

      const snapshot = await uploadBytes(storageRef, blob);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
        source={{ uri: photoURL }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
