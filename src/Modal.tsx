import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
export type Props = {
    isVisible: boolean;
    onClose: any;
    setImage: any;
    setOnImageModal: any;
    [x: string]: any;
};

const ImageModal = ({
    isVisible = false,
    onClose,
    setImage,
    setOnImageModal,
    ...props
}: Props) => {

    const uploadImage = () => {
        onClose
        ImagePicker.openPicker({
            width: 1080,
            height: 1080,
            cropping: true
        }).then(image => {
            setImage(image.path)
            setOnImageModal(false)
        });

    }

    return (
        <Modal visible={isVisible} {...props} animationType="slide"
            transparent={true}>
            <View style={styles.panel}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                </View>
                <TouchableOpacity style={styles.panelButton} >
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton} onPress={uploadImage}>
                    <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton}
                >
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({

    panel: {
        flex: 1,
        backgroundColor: "white",

        marginTop: 472,
        paddingTop: 20,
    },

    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});
export default ImageModal