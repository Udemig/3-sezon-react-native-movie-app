import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Loading from '../components/loading';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const {width, height} = useWindowDimensions();

  const [result, setResult] = useState([
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18],
      id: 791849,
      original_language: 'ky',
      original_title: 'Kol',
      overview: '',
      popularity: 0.697,
      poster_path: '/FCMDTtbikRb9dLdacD45uivinG.jpg',
      release_date: '2020-10-01',
      title: 'The Lake',
      video: false,
      vote_average: 4.7,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: '/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg',
      genre_ids: [10749, 18],
      id: 829560,
      original_language: 'pl',
      original_title: 'Kolejne 365 dni',
      overview:
        "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
      popularity: 92.97,
      poster_path: '/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg',
      release_date: '2022-08-19',
      title: 'The Next 365 Days',
      video: false,
      vote_average: 6.502,
      vote_count: 854,
    },
    {
      adult: false,
      backdrop_path: '/q9GAThBRXMeXFLArzxt1tpbjK7E.jpg',
      genre_ids: [10402, 18, 35],
      id: 784,
      original_language: 'cs',
      original_title: 'Kolja',
      overview:
        'After a fictitious marriage with a Russian emigrant, Cellisten Louka, a Czech man, must suddenly take responsibility for her son. However, it’s not long before the communication barrier is broken between the two new family members.',
      popularity: 11.283,
      poster_path: '/fB0cGiEOngfsfyDHXIpFOmEwFgi.jpg',
      release_date: '1996-05-15',
      title: 'Kolya',
      video: false,
      vote_average: 7.407,
      vote_count: 151,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 447297,
      original_language: 'en',
      original_title: 'Kolka',
      overview:
        'Life Kolka and his parents were not sweet. Personal happiness was not. They lived in poverty and constant quarrels. Kolka, not to see the parents scandals all the time spent on the street.',
      popularity: 0.6,
      poster_path: '/CMq7TjlBnARd1f79bm6dAq48HE.jpg',
      release_date: '1988-09-18',
      title: 'Kolka',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/rhdDnrUmGamF2kk9HZUgTApms2a.jpg',
      genre_ids: [18],
      id: 268253,
      original_language: 'pl',
      original_title: 'Życie za życie. Maksymilian Kolbe',
      overview:
        'The story of catholic saint Maximilian Kolbe (1894-1941), who volunteered to die in place of a stranger in the Nazi concentration camp of Auschwitz.',
      popularity: 3.657,
      poster_path: '/40k326IEGBbAtt81yRR8HlmWSSL.jpg',
      release_date: '1991-04-01',
      title: 'Life for Life: Maximilian Kolbe',
      video: false,
      vote_average: 6.1,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: '/rIWBZC2Sx27pLG524bfy1mcAxdg.jpg',
      genre_ids: [35, 10749, 18],
      id: 505951,
      original_language: 'ta',
      original_title: 'கண்ணும் கண்ணும் கொள்ளையடித்தால்',
      overview:
        'Two wily online scammers mend their fraudulent ways after meeting the girls of their dreams — until a deceitful discovery throws their world for a loop.',
      popularity: 3.751,
      poster_path: '/mwIdGye0iAmaHCBAqzfiHoRb0f2.jpg',
      release_date: '2020-02-28',
      title: 'Kannum Kannum Kollaiyadithaal',
      video: false,
      vote_average: 6.789,
      vote_count: 57,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 686726,
      original_language: 'en',
      original_title: 'Kolossal - I magnifici Macisti',
      overview: "A documentary on the history of Italy's peplum genre.",
      popularity: 1.294,
      poster_path: '/tPQ99BC8k5imbDdcy1XEK6cRJui.jpg',
      release_date: '1977-01-01',
      title: 'Kolossal - The Magnificent Macisti',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18],
      id: 502485,
      original_language: 'sl',
      original_title: 'Ljubezni Blanke Kolak',
      overview:
        'In the wild times of the Second World War, Blanka marries political grandee Pavle, who is shortly afterwards sent to Goli Otok as a political prisoner. Blanka has enthusiasm for photography, becomes independent and opens a studio of photography with Laco. But soon she realizes that her business partner is an impostor. Pavle returns from prison, but their relationship, despite awareness of the political interference in their intimate sphere, imbues the bitter chill and misunderstanding. Blanka tries to drown her endless problems in alcohol and seduce her only male friend, but her last rescue, the thread of love, is being interrupted as well. Is every love of Blanka Kolak sentenced to death, is love possible at all, is worth living without it?',
      popularity: 1.4,
      poster_path: '/9CioMaYxEMuXpoHOFcKZxgWCAXr.jpg',
      release_date: '1987-05-29',
      title: "Blanka Kolak's Love",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/dSTkHpSIHz2OUR5OUP5x6axpTDB.jpg',
      genre_ids: [80, 53, 9648],
      id: 898976,
      original_language: 'ta',
      original_title: 'கொலை',
      overview:
        'When a famous model gets killed, a smart detective comes to investigate when he realizes this incident calls him to a mystery.',
      popularity: 3.255,
      poster_path: '/lblx8zvMF0NxX62aOGocyOhvDld.jpg',
      release_date: '2023-07-21',
      title: 'Kolai',
      video: false,
      vote_average: 6.5,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: '/kBw3wcVAmFKCqhZXHsENpSAPfNI.jpg',
      genre_ids: [35, 53],
      id: 533238,
      original_language: 'ta',
      original_title: 'கோலமாவு கோகிலா',
      overview:
        'A young woman takes up drug peddling to make money for the treatment of her mom, who has cancer.',
      popularity: 4.178,
      poster_path: '/bnbZ4tscBieDg7f14aUJZekqlZS.jpg',
      release_date: '2018-08-17',
      title: 'Kolamavu Kokila',
      video: false,
      vote_average: 7.1,
      vote_count: 26,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [16],
      id: 36906,
      original_language: 'cs',
      original_title: 'Potkali se u Kolína',
      overview:
        'Pilot of the series "Hey, Mister, Let\'s Play". The story of two bears, the older one is experienced and sly, the younger is naive and gullible. This is the story of how they met in the Czech town of Kolín.',
      popularity: 1.081,
      poster_path: '/n6dtuSAUQKp6K0DjaDwVsb3B42A.jpg',
      release_date: '1966-05-13',
      title: "Hey Mister, Let's Play! How They Met At Kolin",
      video: false,
      vote_average: 8.7,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99, 10402],
      id: 211573,
      original_language: 'fi',
      original_title: 'YÖ - Kolmen illan varietee',
      overview:
        'Kolmen Illan Varietee is a 25-year anniversary DVD by a Finnish band called YÖ',
      popularity: 0.6,
      poster_path: null,
      release_date: '2006-10-31',
      title: 'YÖ - Kolmen illan varietee',
      video: false,
      vote_average: 8.8,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 507812,
      original_language: 'en',
      original_title: 'Meshuggah: Koloss',
      overview: "Limited edition bonus DVD from Meshuggah's album Koloss.",
      popularity: 0.6,
      poster_path: '/x2KdmehOf1CtrDpnCuMngITyZTY.jpg',
      release_date: '2012-01-01',
      title: 'Meshuggah: Koloss',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [36, 18],
      id: 278787,
      original_language: 'de',
      original_title: 'Käthe Kollwitz – Bilder eines Lebens',
      overview:
        "Kathe Kollwitz was 47 years old, and already a well established artist in Germany and abroad when Peter, her youngest son, volunteered to join the German army in WWI and was killed two weeks later. This painful tragedy changed Kollwitz's life and art forever.",
      popularity: 1.384,
      poster_path: '/uz9Af8dPifTAqgQ1ZmbRFU4tywb.jpg',
      release_date: '1987-04-23',
      title: 'Käthe Kollwitz – Pictures of a Life',
      video: false,
      vote_average: 5,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [27, 35],
      id: 380911,
      original_language: 'id',
      original_title: 'Darah Janda Kolong Wewe',
      overview:
        "Gono, an ugly guy, has excessive self-confidence, so he pursues Trio Macan, the star of the dangdut stage. As a result he is beaten by Oma Susie's bouncers, the manager of Trio Macan. Then Gono seeks the aid of Ki Riman Banyu, a powerful shaman. Then he receives Tali Kolor Kolongwewe, a charm used to conquer women. As a result, he turns into a dashing and handsome young man. But due to his carelessness, Gono breaks a taboo and falls into a pile of women's underwear. Now, he has to face the consequence of Kolongwewe’s terror!",
      popularity: 0.6,
      poster_path: '/mqsucXHk7E9x5PR8slKudhb8YtO.jpg',
      release_date: '2009-04-30',
      title: "The Blood of Kolong Wewe's Widow",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 393009,
      original_language: 'en',
      original_title: 'Zachem kolkhozu medvedi',
      overview: 'Documentary short written and directed by Vladimir Tatenko.',
      popularity: 0.6,
      poster_path: '/ira873ZsYA1OvUa94eZIj7TTbwC.jpg',
      release_date: '1984-12-31',
      title: 'Why Does Kolkhoz Need Bears?',
      video: false,
      vote_average: 5.5,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 516295,
      original_language: 'ru',
      original_title: 'Kolyma - Straße der Knochen',
      overview:
        'Kolyma is a long highway that stretches through the deepest Russian North-east. It was the epicentre of the Soviet prison camp system. Millions of people built them and lived there under the most dreadful conditions. And now the time is running short for survivors or their direct descendants to tell their story firsthand.',
      popularity: 0.64,
      poster_path: '/6KaSxNpgo5ZB0fUx92iDFLxABI8.jpg',
      release_date: '2017-11-01',
      title: 'Kolyma: Road of Bones',
      video: false,
      vote_average: 7,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: '/n0rWVMN5gGpmgzg32QS8NofOu4w.jpg',
      genre_ids: [99],
      id: 695468,
      original_language: 'fr',
      original_title: 'Ligne d’Alger à Koléa : Tunnel de Pointe-Pescade',
      overview: '',
      popularity: 0.6,
      poster_path: '/dZ0fOQchgM1aP4s1tEUhewtZLIN.jpg',
      release_date: '1903-04-01',
      title: 'Algiers-Koléa Line: Tunnel of Point Pescade',
      video: false,
      vote_average: 2,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18, 10770],
      id: 562073,
      original_language: 'sh',
      original_title: 'Kolubarska bitka',
      overview:
        'A filmed theatre play based on Dobrica Cosic novel "Time of Death". It tells the story of Serbian army during Kolubara battle in 1914.',
      popularity: 1.4,
      poster_path: '/gz4ou83WUuxxRdPMMTb5w8g7d7E.jpg',
      release_date: '1990-01-01',
      title: 'The Battle of Kolubara',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 724627,
      original_language: 'hu',
      original_title: 'Koller Éva bátorsága',
      overview:
        'Hungary, 1948. The Stalinist regime is settling in on the ruins of the war. A young woman meets a stranger in an elevator. She recognizes him from another life, and soon has to make a complicated decision.',
      popularity: 0.638,
      poster_path: '/89u8TL7vuBwZV3WFJvnPlb8KtMu.jpg',
      release_date: '2018-11-01',
      title: 'The Courage of Eva Koller',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border-neutral-500 border mx-4 mb-3 flex-row justify-between items-center rounded-full">
        <TextInput
          className="pb-1 pl-6 flex-1 text-base font-semibold tracking-wider text-neutral-900"
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
        />
        <TouchableOpacity>
          <Text>Ara</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          className="space-y-3"
          contentContainerStyle={{paddingHorizontal: 15}}>
          <Text className="text-neutral-600 font-semibold ml-1">Result 30</Text>
          <View className="flex-row justify-between flex-wrap">
            {result.map((item, index) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Movie', item)}>
                <View className="space-y-2 mb-4">
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w185${item?.poster_path}`,
                    }}
                    style={{width: width * 0.44, height: height * 0.3}}
                    className="rounded-3xl"
                  />
                  <Text className="text-gray-300 ml-1">{item?.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
