import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigationStore } from '../../store/store.ts';
import styles from "../../styles/styles"

const BottomNavbar = () => {
    const { currentScreen, setScreen } = useNavigationStore();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity
                style={[styles.navItem, currentScreen === 'home' && styles.activeNavItem]}
                onPress={() => setScreen('home')}
            >
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navItem, currentScreen === 'favorites' && styles.activeNavItem]}
                onPress={() => setScreen('favorites')}
            >
                <Text style={styles.navText}>Favorites</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomNavbar;