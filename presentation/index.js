// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  logo: require('../assets/logo.svg')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Image src={images.logo} width={400} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Hooks WorkShop
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            for more react cleaner code
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Text size={1} fit caps lineHeight={1} textColor="white">
            What are Hooks ?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Hooks API
          </Heading>
          <Heading size={4} textColor="secondary">
            useState
          </Heading>
          <Heading size={4} textColor="secondary">
            useEffect
          </Heading>
          <Heading size={4} textColor="secondary">
            useReducer
          </Heading>
          <Heading size={4} textColor="secondary">
            useContext
          </Heading>
          <Heading size={4} textColor="secondary">
            useMemo
          </Heading>
          <Heading size={4} textColor="secondary">
            useCallback
          </Heading>
          <Text size={4} textColor="secondary">
            useRef, useLayoutEffect, useImperativeHandle, useDebugValue
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            ask to follow this guys for more hooks cases example and best practice
          </Heading>
          <List>
            <ListItem>Dan Abramov @dan_abramov</ListItem>
            <ListItem>Kent C Dodds @kentcdodds</ListItem>
            <ListItem>Ryan Florence @ryanflorence</ListItem>
            <ListItem>Brian Vaughn @brian_d_vaughn</ListItem>
            <ListItem>Andrew Clark @acdlite</ListItem>
            <ListItem>Jarred Palmer @jaredpalmer</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Questions ?</Quote>
            <Cite margin="10px 0 0 30px">soufDev</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Text size={4} textColor="secondary">
            Lets Have a Demo
          </Text>
          <Image src={'https://media.giphy.com/media/1C8bHHJturSx2/giphy.gif'} width={500} />
        </Slide>
      </Deck>
    );
  }
}
