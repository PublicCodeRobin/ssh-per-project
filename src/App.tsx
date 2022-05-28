import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { ChakraProvider, Modal } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout/>
    </ChakraProvider>
  );
}

export default App;
