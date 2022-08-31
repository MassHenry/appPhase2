import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//must import LinearGradient above
// Basic reusable components

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
);

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  safeAreaView: {}, //safeAreaView Left blanks for now due to ugly resizing
  avatar: {
    width: 64,
    height: 64,
    borderRadius: '50%', //circular border-raduis images
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 24,
    color: '#08060B',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase', //all text will convert to uppercase
    color: '#280D5F',
  },
});

// App-specific components

const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar} />
    <View style={woofCardStyles.title}>
      <Title>{props.name}</Title>
    </View>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    textAlign: 'center',
    width: 88,
    height: 112,
    padding: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#E7E3EB',
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  title: {
    textAlign: 'center',
    paddingTop: 8,
  },
});

//woofPost is a component
const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image source={{ uri: props.image }} style={woofPostStyles.image} />
    <View style={woofPostStyles.content}>
      <Title>{props.title}</Title>
      <Text style={woofPostStyles.description} numberOfLines={2}>
        {props.description}
      </Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
  },
  image: {
    borderRadius: 15,
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 12,
  },
  description: {
    fontSize: 12,
    marginTop: 4,
    color: '#280D5F',
  },
});

// The screen rendering everything
const HomeScreen = () => (
  <ScrollView>
    <Heading> Trending Posts</Heading>
    <ScrollView horizontal>
      {data.woofs.map((anything) => (
        <WoofCard
          key={anything.id}
          name={anything.name}
          avatar={anything.avatar}
        />
      ))}
    </ScrollView>
    <Heading>New Posts</Heading>
    {data.posts.map((anything1) => (
      <WoofPost
        key={anything1.id}
        image={anything1.image}
        title={anything1.title}
        description={anything1.description}
      />
    ))}
  </ScrollView>
);
//where the magic happens ;)
//EXAMPLE FOR JARED
const App = () => (
  <LinearGradient
    colors={['#20c1c1', '#8dc642']}
    /*start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} HORIZONTAL GRADIENT AFFECT  locations={[0,0.5,0.6]}*/ style={
      styles.gradient
    }>
    <SafeAreaView style={styles.safeAreaView}>
      <HomeScreen />
    </SafeAreaView>
  </LinearGradient>
);

export default App;

// "Fake" API data to use in your app
const data = {
  woofs: [
    {
      id: 'woof-1',
      name: 'Jabroni ',
      avatar:
        'https://scontent.frkh1-1.fna.fbcdn.net/v/t1.6435-9/42177523_2270311586330542_4669726827781029888_n.jpg?stp=dst-jpg_r270&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ER8ANxJJUv4AX8srOzM&_nc_ht=scontent.frkh1-1.fna&oh=00_AT-L4wY6m980f2i5MEre0VamcC3fqBBZpu22RhfscR9S4g&oe=6332B027',
      caretaker: 'Mike Jone',
      source: 'facebook.com',
    },
    {
      id: 'woof-2',
      name: 'Ball',
      avatar:
        'https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Tatiana Rodriguez',
      source: 'https://unsplash.com/photos/J40C1k6Fut0',
    },
    {
      id: 'woof-3',
      name: 'Happy',
      avatar:
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Marliese Streefland',
      source: 'https://unsplash.com/photos/2l0CWTpcChI',
    },
    {
      id: 'woof-4',
      name: 'Fluffy',
      avatar:
        'https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Nick Fewings',
      source: 'https://unsplash.com/photos/rMKXLAIa2OY',
    },
    {
      id: 'woof-5',
      name: 'Spirit',
      avatar:
        'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/uNNCs5kL70Q',
    },
  ],
  posts: [
    {
      id: 'post-1',
      image:
        'https://media.istockphoto.com/photos/shocked-young-woman-picture-id183368502?k=20&m=183368502&s=612x612&w=0&h=jnJ7QggB_90ATehDAazexXZTOhK3VS0hLhAsqFNGYn8=',
      title: 'How To\'s',
      description:
        "How to keep your dog happy. We've asked some of the best experts out there.",
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/UtrE5DcgEyg',
    },
    {
      id: 'post-2',
      image:
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80',
      title: 'Woofs & friends',
      description: 'Best friends are important for humans, but also for dogs.',
      caretaker: 'Krista Mangulsone',
      source: 'https://unsplash.com/photos/9gz3wfHr65U',
    },
    {
      id: 'post-3',
      image:
        'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80',
      title: 'Good Woofs',
      description:
        'A good woof is a woof that brings joy. Here are a few tips to let your woof behave.',
      caretaker: 'Olia Nayda',
      source: 'https://unsplash.com/photos/f6v_Q0WXEK8',
    },
    {
      id: 'post-4',
      image:
        'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80',
      title: 'Wild Woofs',
      description:
        'In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.',
      caretaker: 'Anoir Chafik',
      source: 'https://unsplash.com/photos/2_3c4dIFYFU',
    },
    {
      id: 'post-5',
      image:
        'https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80',
      title: 'Sleepy Woofs',
      description:
        'Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.',
      caretaker: 'Max Singh',
      source: 'https://unsplash.com/photos/2637Pic9xMw',
    },
    {
      id: 'post-6',
      image:
        'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
      title: 'Exploring Woofs',
      description:
        'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
    },
    {
      id: 'post-7',
      image:
        'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
      title: 'Exploring Woofs',
      description:
        'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
    },
    {
      id: 'post-8',
      image:
        'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
      title: 'Exploring Woofs',
      description:
        'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
    },
  ],
};
