import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MovieList from '../components/movieList';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import {theme} from '../theme';

export default function MovieScreen() {
  const {params: item} = useRoute();

  const navigation = useNavigation();

  console.log('Params', item);

  const {width, height} = useWindowDimensions();

  const [similar, setSimilar] = useState([
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [27, 53],
      id: 1052558,
      original_language: 'en',
      original_title: 'iPossessed',
      overview:
        'A group of celebrating friends make a pact with a demon to stay the night or someone loses their soul, only to find out the demons they are fighting might be the ones they carry inside.',
      popularity: 1.4,
      poster_path: '/kfJ8tFrfoOQqFvGVZYm1yBBMZEo.jpg',
      release_date: '2023-02-24',
      title: 'iPossessed',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/7KzoGooe5CvPqie0jDcG7xsOZhg.jpg',
      genre_ids: [80, 18, 27, 53],
      id: 8643,
      original_language: 'en',
      original_title: 'The Exorcism of Emily Rose',
      overview:
        'When a younger girl called Emily Rose dies, everyone puts blame on the exorcism which was performed on her by Father Moore prior to her death. The priest is arrested on suspicion of murder. The trial begins with lawyer Erin Bruner representing Moore, but it is not going to be easy, as no one wants to believe what Father Moore says is true.',
      popularity: 37.577,
      poster_path: '/qMN0HIP34f736kkQcfvTfmL9TP3.jpg',
      release_date: '2005-09-09',
      title: 'The Exorcism of Emily Rose',
      video: false,
      vote_average: 6.538,
      vote_count: 2534,
    },
    {
      adult: false,
      backdrop_path: '/6moXpp6y1EZ6pfnSxnKFMrbFnWv.jpg',
      genre_ids: [53, 878],
      id: 8645,
      original_language: 'en',
      original_title: 'The Happening',
      overview:
        'When a deadly airborne virus threatens to wipe out the northeastern United States, teacher Elliott Moore and his wife Alma flee from contaminated cities into the countryside in a fight to discover the truth. Is it terrorism, the accidental release of some toxic military bio weapon -- or something even more sinister?',
      popularity: 58.577,
      poster_path: '/v1Cw6WaCjNqInpAzUwbXB4LGgoX.jpg',
      release_date: '2008-06-11',
      title: 'The Happening',
      video: false,
      vote_average: 5.377,
      vote_count: 3239,
    },
    {
      adult: false,
      backdrop_path: '/cpSo8r82UWC9QW2EE9k0Otfkyan.jpg',
      genre_ids: [18, 27, 53],
      id: 356191,
      original_language: 'pl',
      original_title: 'Demon',
      overview:
        'A bridegroom is possessed by an unquiet spirit in the midst of his own wedding celebration, in this clever take on the Jewish legend of the dybbuk.',
      popularity: 7.356,
      poster_path: '/1Lkmicr9GhlVUzn9YVqHkQNka98.jpg',
      release_date: '2015-09-09',
      title: 'Demon',
      video: false,
      vote_average: 5.902,
      vote_count: 112,
    },
    {
      adult: false,
      backdrop_path: '/xXE4XVrhAJZfubTvPjhEyfum0Wi.jpg',
      genre_ids: [28, 14, 27, 9648],
      id: 9946,
      original_language: 'en',
      original_title: 'End of Days',
      overview:
        'On 28 December 1999, the citizens of New York City are getting ready for the turn of the millennium. However, Satan decides to crash the party by coming to the city  and searching for his chosen bride — a 20-year-old woman named Christine York. The world will end, and the only hope lies within an atheist named Jericho Cane.',
      popularity: 17.255,
      poster_path: '/pY8FbKKl3VD0jRI1iDFrwN6alLa.jpg',
      release_date: '1999-11-24',
      title: 'End of Days',
      video: false,
      vote_average: 6.04,
      vote_count: 1674,
    },
    {
      adult: false,
      backdrop_path: '/aWmMWZ9rDNCXmXVXuHbEm1sX0jK.jpg',
      genre_ids: [27],
      id: 9730,
      original_language: 'en',
      original_title: 'Friday the 13th: The Final Chapter',
      overview:
        'After his revival in a hospital morgue, Jason fixes his vengeful attention on the Jarvis family and a group of hitherto carefree teenagers.',
      popularity: 59.541,
      poster_path: '/5KRBkaF6PdorcFjWiDY4tJy67Jf.jpg',
      release_date: '1984-04-13',
      title: 'Friday the 13th: The Final Chapter',
      video: false,
      vote_average: 6.104,
      vote_count: 1153,
    },
    {
      adult: false,
      backdrop_path: '/iWQPZphjmQV8sbatCaXfjk1rksV.jpg',
      genre_ids: [27, 9648, 35],
      id: 9731,
      original_language: 'en',
      original_title: 'Friday the 13th: A New Beginning',
      overview:
        'Homicidal maniac Jason returns from the grave to cause more bloody mayhem. Young Tommy may have escaped from Crystal Lake, but he’s still haunted by the gruesome events that happened there. When gory murders start happening at the secluded halfway house for troubled teens where he now lives, it seems like his nightmarish nemesis, Jason, is back for more sadistic slaughters.',
      popularity: 85.122,
      poster_path: '/sRA9Tb4aQz8EZlbX7xmh8WbzisW.jpg',
      release_date: '1985-03-22',
      title: 'Friday the 13th: A New Beginning',
      video: false,
      vote_average: 5.293,
      vote_count: 997,
    },
    {
      adult: false,
      backdrop_path: '/j6xyaXJO4oaE99QJGxggpeLbJ7j.jpg',
      genre_ids: [27],
      id: 207774,
      original_language: 'en',
      original_title: 'The Borderlands',
      overview:
        'Vatican investigators are sent to the British West Country to investigate paranormal activity, and they find the events are more disturbing than they first imagined.',
      popularity: 9.419,
      poster_path: '/dNtkysYSyE3FcUGbdkooDckD16Y.jpg',
      release_date: '2014-03-28',
      title: 'The Borderlands',
      video: false,
      vote_average: 5.391,
      vote_count: 201,
    },
    {
      adult: false,
      backdrop_path: '/lcix4ZjVsO7YqHohmk0QLcJRRl5.jpg',
      genre_ids: [27, 18, 9648, 53],
      id: 354216,
      original_language: 'en',
      original_title: "The Devil's Candy",
      overview:
        'A struggling painter is possessed by satanic forces after he and his young family move into their dream home in rural Texas.',
      popularity: 9.503,
      poster_path: '/9Yz9DCan4tRfqZgDrCSgzUX1WXV.jpg',
      release_date: '2017-03-17',
      title: "The Devil's Candy",
      video: false,
      vote_average: 6.268,
      vote_count: 596,
    },
    {
      adult: false,
      backdrop_path: '/nRSSQrtg8r5cmU3ydyVnoS2suHF.jpg',
      genre_ids: [27, 53, 80],
      id: 766358,
      original_language: 'en',
      original_title: 'Sound of Violence',
      overview:
        'As a child, the brutal murder of her family made Alexis regain her hearing along with synesthetic abilities. Now as an adult, she finds solace in the sounds of bodily harm. But when she’s told she might lose her hearing again, she escalates her gruesome sound experiments in a quest to compose her masterpiece.',
      popularity: 3.731,
      poster_path: '/i3umQVtEGpwPTYIkRm2QsDAlrv8.jpg',
      release_date: '2021-05-21',
      title: 'Sound of Violence',
      video: false,
      vote_average: 5.147,
      vote_count: 17,
    },
    {
      adult: false,
      backdrop_path: '/61ge9n2JdgV8ACpMzKkzjn1dQsN.jpg',
      genre_ids: [27, 10749],
      id: 765968,
      original_language: 'en',
      original_title: 'After the Flesh',
      overview:
        "When a young woman's boyfriend dies, she slips into grief and begins to believe that his spirit has returned in the form of a menacing skeleton doll.",
      popularity: 0.84,
      poster_path: '/u17stnQrZfjSjpgq8rkVBczCWNG.jpg',
      release_date: '2019-08-03',
      title: 'After the Flesh',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/jrhh1H6tK99M4FdM9joAn9e0BHR.jpg',
      genre_ids: [27, 18, 14],
      id: 9100,
      original_language: 'en',
      original_title: 'The Craft',
      overview:
        'A Catholic school newcomer falls in with a clique of teen witches who wield their powers against all who dare to cross them -- be they teachers, rivals or meddlesome parents.',
      popularity: 21.512,
      poster_path: '/8bW2RdRkloYtEPhbQZN4wcdmJP4.jpg',
      release_date: '1996-05-03',
      title: 'The Craft',
      video: false,
      vote_average: 6.7,
      vote_count: 1669,
    },
    {
      adult: false,
      backdrop_path: '/f9oNiTUoharENGjdDufG0aDbSIO.jpg',
      genre_ids: [53, 18],
      id: 9264,
      original_language: 'en',
      original_title: 'Poison Ivy',
      overview:
        'A seductive teen befriends an introverted high school student and schemes her way into the lives of her wealthy family.',
      popularity: 22.016,
      poster_path: '/igwGf0qNka1qH1HPijgbABfUfB4.jpg',
      release_date: '1992-05-08',
      title: 'Poison Ivy',
      video: false,
      vote_average: 5.444,
      vote_count: 312,
    },
    {
      adult: false,
      backdrop_path: '/8n6ZCFJWwK7UiX7NYuIEvHLRPYG.jpg',
      genre_ids: [28, 18, 9648, 53],
      id: 9268,
      original_language: 'en',
      original_title: 'Eraser',
      overview:
        "U.S. Marshall John Kruger erases the identities of people enrolled in the Witness Protection Program. His current assignment is to protect Lee Cullen, who's uncovered evidence that the weapons manufacturer she works for has been selling to terrorist groups. When Kruger discovers that there's a corrupt agent within the program, he must guard his own life while trying to protect Lee's.",
      popularity: 19.479,
      poster_path: '/1FUV5ZmEkbxvqwQW0az4tFFOSmo.jpg',
      release_date: '1996-06-21',
      title: 'Eraser',
      video: false,
      vote_average: 6,
      vote_count: 1642,
    },
    {
      adult: false,
      backdrop_path: '/dzFPs6fXRrWIhUhE671lOSCuTnT.jpg',
      genre_ids: [27, 878, 9648],
      id: 9276,
      original_language: 'en',
      original_title: 'The Faculty',
      overview:
        'When some very creepy things start happening around school, the kids at Herrington High make the chilling discovery that their faculty is being controlled by body-snatching aliens.',
      popularity: 35.045,
      poster_path: '/l0rz4vB0FfxraTd1mLGoaydSQd1.jpg',
      release_date: '1998-12-25',
      title: 'The Faculty',
      video: false,
      vote_average: 6.51,
      vote_count: 1765,
    },
    {
      adult: false,
      backdrop_path: '/joj4ONoHmLGDoNGYph8ZPISphZ.jpg',
      genre_ids: [27],
      id: 9373,
      original_language: 'en',
      original_title: 'The Texas Chainsaw Massacre',
      overview:
        'After picking up a traumatized young hitchhiker, five friends find themselves stalked and hunted by a chainsaw-wielding killer and his family of equally psychopathic killers.',
      popularity: 43.907,
      poster_path: '/qJ9Cw1J4EmhBApoue4qlhqVrCZ7.jpg',
      release_date: '2003-05-21',
      title: 'The Texas Chainsaw Massacre',
      video: false,
      vote_average: 6.236,
      vote_count: 2394,
    },
    {
      adult: false,
      backdrop_path: '/70TIOrfkQli0Smsfjua2McaDPci.jpg',
      genre_ids: [12, 27],
      id: 9392,
      original_language: 'en',
      original_title: 'The Descent',
      overview:
        'After a tragic accident, six friends reunite for a caving expedition. Their adventure soon goes horribly wrong when a collapse traps them deep underground and they find themselves pursued by bloodthirsty creatures. As their friendships deteriorate, they find themselves in a desperate struggle to survive the creatures and each other.',
      popularity: 26.647,
      poster_path: '/mxFPI4KYBk5ri9cPteIS8jiDFgj.jpg',
      release_date: '2005-07-08',
      title: 'The Descent',
      video: false,
      vote_average: 6.955,
      vote_count: 3492,
    },
    {
      adult: false,
      backdrop_path: '/xnuy6CYEoBmXKhTjKDSbzLe1dB5.jpg',
      genre_ids: [53, 18, 12, 28, 36],
      id: 205775,
      original_language: 'en',
      original_title: 'In the Heart of the Sea',
      overview:
        'In the winter of 1820, the New England whaling ship Essex is assaulted by something no one could believe—a whale of mammoth size and will, and an almost human sense of vengeance.',
      popularity: 49.566,
      poster_path: '/weVvNPfk6FM9vBg3BXtRtNAmiYM.jpg',
      release_date: '2015-11-20',
      title: 'In the Heart of the Sea',
      video: false,
      vote_average: 6.739,
      vote_count: 3823,
    },
    {
      adult: false,
      backdrop_path: '/90f4YD4Je0N0ay6qBR1Zonlkzdz.jpg',
      genre_ids: [27],
      id: 4488,
      original_language: 'en',
      original_title: 'Friday the 13th',
      overview:
        "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
      popularity: 58.798,
      poster_path: '/HzrPn1gEHWixfMOvOehOTlHROo.jpg',
      release_date: '1980-05-09',
      title: 'Friday the 13th',
      video: false,
      vote_average: 6.395,
      vote_count: 2587,
    },
    {
      adult: false,
      backdrop_path: '/rWaVecskbmRzakbPawiOWVMo2EJ.jpg',
      genre_ids: [53],
      id: 8090,
      original_language: 'en',
      original_title: 'Untraceable',
      overview:
        'Special Agent Jennifer Marsh works in an elite division of the FBI dedicated to fighting cybercrime. She thinks she has seen it all, until a particularly sadistic criminal arises on the Internet. This tech-savvy killer posts live feeds of his crimes on his website; the more hits the site gets, the faster the victim dies. Marsh and her team must find the elusive killer before time runs out.',
      popularity: 10.361,
      poster_path: '/ySUwDRDEn01lKIMPQorpFCMLWqE.jpg',
      release_date: '2008-01-22',
      title: 'Untraceable',
      video: false,
      vote_average: 6.159,
      vote_count: 797,
    },
  ]);

  return (
    <ScrollView
      className="flex-1 bg-white "
      contentContainerStyle={{paddingBottom: 20}}>
      <View className="w-full">
        <SafeAreaView className="flex-row  justify-between px-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <HeartIcon size={35} color={theme.background} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w185${item?.poster_path}`,
            }}
            style={{width, height: height * 0.55}}
            className="rounded-3xl"
          />
        </View>

        <View>
          <Text>{item?.title}</Text>
          <Text>{item?.status}</Text>
          <Text>{item?.overview}</Text>
          <Text>DSajksjkasdsahjkadshjkdas</Text>
          <MovieList
            title={'Similar Moview'}
            hideSeeAll={false}
            data={similar}
          />
          <Button
            title="Person"
            onPress={() => {
              navigation.navigate('Person');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
