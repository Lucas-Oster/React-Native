import React, { useEffect, useState } from "react";
import {StyleSheet,Button, Text, View } from "react-native";
import { Audio } from "expo-av";
import {Pressable} from "react-native-web";

const Sound1 = [require("./assets/cri.wav")];
const Sound2 = [require("./assets/car.wav")];
const Sound3 = [require("./assets/cymbal.wav")];
const Sound4 = [require("./assets/daibyoshi.wav")];
const Sound5 = [require("./assets/med_taiko.wav")];
const Sound6 = [require("./assets/miyadaiko.wav")];
const Sound7 = [require("./assets/taiko.wav")];
const Sound8 = [require("./assets/tsuzumi.wav")];

const HomeScreen = () => {
    const [sound, setSound] = useState();

    const playSound = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound1[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound2 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound2[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound3 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound3[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound4 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound4[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound5 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound5[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound6 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound6[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound7 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound7[0]);
        setSound(sound);
        await sound.playAsync();
    };
    const playSound8 = async() => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(Sound8[0]);
        setSound(sound);
        await sound.playAsync();
    };
    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);

    return (
        <View style = {{flex: 1, backgroundColor: "white" }}>

            <tr>
                <td>
                    <Text style = {styles.text}> D'oh !</Text>
                    <Pressable style = {styles.button} title = "d'oh !" color="#841584" onPress = { playSound }/>
                </td>
                <td>
                    <Text style = {styles.text} > Car! </Text>
                    <Pressable style = { styles.button } color="#841584" title = "Car !" onPress = { playSound2 }/>
                </td>
                </tr>
            <tr>
                <td>
                    <Text style = {styles.text}> cymbal !</Text>
                    <Pressable style = {styles.button} title = "cymbal !" color="#841584" onPress = { playSound3 }/>
                </td>
                <td>
                    <Text style = {styles.text} > daibyoshi! </Text>
                    <Pressable style = { styles.button } color="#841584" title = "daibyoshi !" onPress = { playSound4 }/>
                </td>
                <td>
                    <Text style = {styles.text}> med-taiko !</Text>
                    <Pressable style = {styles.button} title = "med-taiko !" color="#841584" onPress = { playSound5 }/>
                </td>
                <td>
                    <Text style = {styles.text} > miyadaiko ! </Text>
                    <Pressable style = { styles.button } color="#841584" title = "miyadaiko !" onPress = { playSound6 }/>
                </td>
                <td>
                    <Text style = {styles.text}> taiko !</Text>
                    <Pressable style = {styles.button} title = "taiko !" color="#841584" onPress = { playSound7 }/>
                </td>
                <td>
                    <Text style = {styles.text} > tsuzumi! </Text>
                    <Pressable style = { styles.button } color="#841584" title = "tsuzumi !" onPress = { playSound8 }/>
                </td>

            </tr>


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor: '#000000',
    },
    text: {
        color: 'royalblue',
        fontWeight: 'bold',
        fontSize: 15,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'royalblue',
        height: 80,
        width: 80,
    },
});
export default HomeScreen;