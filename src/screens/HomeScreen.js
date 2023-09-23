import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../theme';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/loading';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpComingMovies,
} from '../api/moviedb';
import i18n from 'i18next';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const [trending, setTrending] = useState();

  const [upComing, setUpComing] = useState([]);

  const [topRated, setTopRated] = useState([]);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();

    if (data?.results) {
      setTrending(data?.results);
    }
  };

  const getUpComingMovies = async () => {
    const data = await fetchUpComingMovies();

    if (data?.results) {
      setUpComing(data?.results);
    }
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();

    if (data?.results) {
      setTopRated(data?.results);
    }
  };

  useEffect(() => {
    try {
      getTrendingMovies();
      getUpComingMovies();
      getTopRatedMovies();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <View className="flex bg-white">
      <SafeAreaView className={Platform.OS === 'ios' ? '-mb-2' : 'mb-3'}>
        <View className="flex-row justify-between items-center mx-4">
          <Text className="text-neutral-800 text-3xl font-bold">
            <Text style={styles.text}>U</Text>demig
          </Text>
          <TouchableOpacity onPress={() => i18n.changeLanguage('tr')}>
            <Text>Change Language</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color={'black'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 150}}>
          <TrendingMovies data={trending} />

          <View className="ml-4">
            {upComing.length > 0 && (
              <MovieList title={i18n.t('home.upcoming')} data={upComing} />
            )}

            {/* top rated movies row */}
            {topRated.length > 0 && (
              <MovieList title={i18n.t('home.topRated')} data={topRated} />
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
