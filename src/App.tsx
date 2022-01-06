import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme";
import Output from "./components/Output/Output";

function App() {
  return (
      <ChakraProvider theme={theme}>
       <Layout/>
       <Output/>
      </ChakraProvider>
  );
}

export default App;
