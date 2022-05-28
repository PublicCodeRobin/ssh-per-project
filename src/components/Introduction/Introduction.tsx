import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ListItem,
  OrderedList, Code, Heading, Button, Tooltip,
} from '@chakra-ui/react';
// @ts-ignore

const Introduction: FC<{ email:string }> = ({ email }) => {
  // @ts-ignore

  return (
    <Box
      maxW={'1200px'}
      mx={'auto'}
      p={'10px'}
      bg={'lightslategrey'}
      color={'white'}
      borderRadius={'md'}
      my={'20px'}
    >
      <Heading>
            Create your keys
      </Heading>
      <OrderedList>
        <ListItem>
        </ListItem>
        <ListItem>Make sure ssh-agent is running by typing <Code> eval `ssh-agent`</Code></ListItem>
        <ListItem>Go to ssh folder with terminal or Finder <Code>cd ~/.ssh/</Code></ListItem>
        <ListItem>Create a key <Code>ssh-keygen -t rsa -C {email || '[youremail@example.com]'}</Code> (git wants your email in the token I think)</ListItem>
        <ListItem>Put in a filename when asked by your terminal</ListItem>
      </OrderedList>
    </Box>
  );
};

export default Introduction;
