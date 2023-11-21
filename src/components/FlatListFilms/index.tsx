import React, { useEffect, useState } from "react";
import { View, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface FlatListFilmsProps {
    list: Array<{
        poster_path: string
    }>
    onPress?: (index: number) => void;
}

export default function FlatListFilms({ list, onPress }: FlatListFilmsProps) {
    return (
        <FlatList
            data={list}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            renderItem={({ item, index }) => {
                const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                return (
                    <>
                        <TouchableOpacity onPress={() => onPress && onPress(index)}>
                            <Image source={{ uri }} style={styles.container} />
                        </TouchableOpacity>

                    </>
                )
            }}
        />


    );
};