import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"

const weatherOptions = {
    ThunderStorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#373B44", "#4286f4"]
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#373B44", "#4286f4"]
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container} 
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={100} 
                    name={weatherOptions[condition].iconName} 
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>{temp}</Text>
                <Text>{condition}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "ThunderStorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 40,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})