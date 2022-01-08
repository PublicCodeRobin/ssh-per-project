import React, { FC, FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ListItem,
  OrderedList, Code, Heading, UnorderedList, ListIcon,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

const SnippetOut: FC<{ snippets?: {}, fileData?: {}  }> = ({ snippets, fileData }) => {
  console.log('snippets', { snippets });
  // @ts-ignore
  const { email  = '[youremail@example.com]', username = '[GitUsername]', repository = '[myrepo].git', remote = '[remote]' } = snippets || {};
  // @ts-ignore
  const { host = '[hostname]' } = fileData || {};

  console.log(email);

  console.log();

  const repoLink = `git@${host}:${username}/${repository}`;

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
       Using your new config file :)
      </Heading>
      <OrderedList>
        <ListItem><WarningIcon/> Add the keys to the agent! You can do it automatically with [this]</ListItem>
        <ListItem><Code>remote rm {remote}</Code></ListItem>
        <ListItem><Code>git remote add {remote} {repoLink}</Code></ListItem>
        <ListItem><Code>git push -u origin {repoLink}</Code></ListItem>
      </OrderedList>
    </Box>
  );
};

SnippetOut.propTypes = {
  snippets: PropTypes.object,
  fileData: PropTypes.object,
};

export default SnippetOut;
