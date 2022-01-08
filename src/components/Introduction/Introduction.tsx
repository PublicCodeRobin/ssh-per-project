import React, { FC, FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ListItem,
  OrderedList, Code, Heading,
} from '@chakra-ui/react';

const Introduction: FC<{ snippets?: {} }> = ({ snippets }) => {
  console.log('snippets', { snippets });
  // @ts-ignore
  const { email } = snippets || {};

  console.log(email);

  console.log();

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
        <ListItem>Make sure ssh-agent is running by typing <Code> eval `ssh-agent`</Code></ListItem>
        <ListItem>Go to ssh folder with terminal or Finder <Code>cd ~/.ssh/</Code></ListItem>
        <ListItem>Create a key <Code>ssh-keygen -t rsa -C {email || '[youremail@example.com]'}</Code> (git wants your email in the token I think)</ListItem>
        <ListItem>Put in a filename when asked by your terminal</ListItem>
      </OrderedList>
    </Box>
  );
};

Introduction.propTypes = {
  snippets: PropTypes.object,
};

export default Introduction;
