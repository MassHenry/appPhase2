import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TextInput,
  Pressable,FlatList,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
);
const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;

// --- Main screens ---

const Tab = createBottomTabNavigator();

const Card = (props) => (
  <View style={topScrollStyles.card}>
    <Avatar url={props.avatar} />
    <View style={topScrollStyles.title}>
      <Title>{props.name}</Title>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[
        /*'transparent', transparent color effect*/ '#20c1c1',
        '#8dc642',
      ]}
      /*start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} HORIZONTAL GRADIENT AFFECT  locations={[0,0.5,0.6]}*/ style={
        styles.gradient
      }>
      <ScrollView>
        <Heading>Posts</Heading>
        <ScrollView horizontal>
          {data.cards.map((anything) => (
            <Card
              key={anything.id}
              name={anything.name}
              avatar={anything.avatar}
            />
          ))}
        </ScrollView>
        <View style={styles.gradient}>
          <Text style={styles.title}>Bottom Home Screen</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const FeedScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <LinearGradient
      colors={[/*'transparent', transparent color effect*/ 'red', 'purple']}
      /*start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} HORIZONTAL GRADIENT AFFECT  locations={[0,0.5,0.6]}*/ style={
        styles.gradient
      }>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />  
        </View>
      )}
    </View>
  );
};
    </LinearGradient>
  );
};
const CatalogScreen = () => {
  return (
    <LinearGradient
      colors={[/*'transparent', transparent color effect*/ 'silver', 'red']}
      /*start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} HORIZONTAL GRADIENT AFFECT  locations={[0,0.5,0.6]}*/ style={
        styles.gradient
      }>
      <View style={styles.layout}>
        <Text style={styles.title}>Catalog Screen</Text>
      </View>
    </LinearGradient>
  );
};
const AccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [petsName, setPetsName] = useState('');
  const [petsDateOfBirth, setPetsDateOfBirth] = useState('');
  const [breedOfDog, setBreedOfDog] = useState('');
  const [petsFavoriteToy, setPetsFavoriteToy] = useState('');
  const confirmPasswordMatch = (props) => {
    const {
      nativeEvent: { text },
    } = props; //({ nativeEvent: { text, eventCount, target }}) => void
    if (text !== password) {
      alert('AYO, passwords do not match! Try again Jabroni');
    }
  };

  return (
    <LinearGradient
      colors={[/*'transparent', transparent color effect*/ 'yellow', 'brown']}
      /*start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} HORIZONTAL GRADIENT AFFECT  locations={[0,0.5,0.6]}*/ style={
        styles.gradient
      }>
      <ScrollView vertical style={{ flex: 1, justifyContent: 'center' }}>
        <InputWithLabel
          label="Email"
          placeholder="Type FAKE Email Address Here"
          value={email}
          onChangeText={setEmail}
        />
        <InputWithLabel
          label="Password"
          placeholder="Type FAKE password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <InputWithLabel
          label="Confirm Password"
          placeholder="Type FAKE password here"
          value={confirmationPassword}
          onChangeText={setConfirmationPassword}
          secureTextEntry
          onSubmitEditing={confirmPasswordMatch}
        />
        <InputWithLabel
          label="Whats Yo Height"
          placeholder="type here"
          value={petsName}
          onChangeText={setPetsName}
        />
        <InputWithLabel
          label="How many times you workout a week?"
          placeholder="type here"
          value={petsDateOfBirth}
          onChangeText={setPetsDateOfBirth}
        />
        <InputWithLabel
          label="How many calories at day do you intake?"
          placeholder="Don't be scared to anwser"
          value={breedOfDog}
          onChangeText={setBreedOfDog}
        />
        <InputWithLabel
          label="Favorite food? ;)"
          placeholder="Type Favorite Toy"
          value={petsFavoriteToy}
          onChangeText={setPetsFavoriteToy}
        />
      </ScrollView>
    </LinearGradient>
  );
}; // tab navigators

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}>
      <Tab.Screen name="Home" 
      component={HomeScreen}
       options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Feed" component={FeedScreen}
      options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ladybug" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Catalog" component={CatalogScreen}
      options={{
          tabBarLabel: 'Catalog',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bacteria" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Account" component={AccountScreen}
      options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
};
//create a custom component called MainNavigator and render the tab navigator and screens in there.

// --- Onboarding screens ---

const Stack = createStackNavigator();

const SignInScreen = (props) => {
  return (
    <View style={styles.layout}>
      
  
      <Pressable style={styles.button} onPress={() => props.navigation.navigate('SignUp')}>
       <Text style={styles.title}>Sign In Screen</Text>
  
      </Pressable>
    </View>
  ); 
}; //When pressing the button on the SignInScreen, navigates to the <SignUpScreen>.

//UNLIKE SIGNINSCREEN props wouldn't be preferred; because of the expected nested screens
const SignUpScreen = (props) => {
  const nav = useNavigation();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up Screen</Text>
      <Button title="Continue" onPress={() => nav.navigate('Main')} />
    </View>
  );
};
//When pressing the button on the SignUpScreen, navigates to the Main screen.

// --- App ---

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="None">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
//headerMode="None" Removes the header FROM EACH SCREEN.
export default App; 

const InputWithLabel = (props) => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{ padding: 8, fontSize: 18, color: `red` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  signInLayout:{
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor:"red",

  },
  title: {
    margin: 1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
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
  gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: '50%', //circular border-raduis images
  },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});

const topScrollStyles = StyleSheet.create({
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
    /*elevation: 5, used for android to work shadows*/
  },
  title: {
    textAlign: 'center',
    paddingTop: 8,
  },
});

const data = {
  cards: [
    {
      id: 'card-1',
      name: 'Chuck',
      avatar:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA1Mzc0MzgwNTMzMzky/gettyimages-150327735-copy.jpg',
      caretaker: 'Mike Jone',
      source: 'facebook.com',
    },
  ],
};
//For instance, only rendering the onboarding screens or the main navigation. You can try this out by following https://reactnavigation.org/docs/tab-based-navigation

//lso customize the tab icons: you can https://reactnavigation.org/docs/tab-based-navigation/#customizing-the-appearance
