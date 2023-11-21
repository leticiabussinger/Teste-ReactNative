import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text, ScrollView } from "react-native";
import { getGenres, getGenresFilms, getTrendingFilms } from "../../services/apiTMDB";
import { styles } from "./styles";
import FlatListFilms from "../../components/FlatListFilms";

export default function Home({ navigation }) {
    const [listTrending, setListTrendings] = useState([]);
    const [listGenres, setListGenres] = useState([]);
    const [listFilmsGenres, setListFilmsGenres] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        listTrendingFilms();
        listByGenres();
    }, [])

    function listTrendingFilms() {
        getTrendingFilms()
            .then(response => {
                setListTrendings(response.data.results)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    function listByGenres() {
        getGenres()
            .then(async response => {
                setListGenres(response.data.genres);

                const promises = response.data.genres.map(async genre => {
                    try {
                        const filmsResponse = await getGenresFilms(genre.id);
                        return filmsResponse.data.results;
                    } catch (error) {
                        console.log(error);
                        return [];
                    }
                });

                const filmsForGenres = await Promise.all(promises);
                setListFilmsGenres(filmsForGenres);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function listDetailsFilms(genreIndex, filmIndex) {
        const selectedFilm = listFilmsGenres[genreIndex][filmIndex];
        navigation.navigate('details', { filmDetails: selectedFilm });
    }

    return (
        <ScrollView >
            {isLoading ?
                <ActivityIndicator size={"large"} color={'#156'} />
                :
                <>
                    {listGenres.map((item, index) => {
                        const title = item.name
                        return (
                            <View key={`${item.id}`}>
                                <Text>{title}</Text>
                                <FlatListFilms list={listFilmsGenres[index]} onPress={(filmIndex) => listDetailsFilms(index, filmIndex)} />
                            </View>
                        )
                    })}
                </>
            }
        </ScrollView>
    );
};