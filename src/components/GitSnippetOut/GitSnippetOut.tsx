import React, { FC, FormEvent, useState } from 'react';
import {
  Box,
  ListItem,
  OrderedList,
  Code,
  Heading, Button, useModalContext,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { SnippetOut } from '../../types/FormsOut';


const GitSnippetOut: FC<
  {
    snippets: SnippetOut,
    fileData?: {},
    handleModal: Function
  }
> = (
  { snippets, fileData, handleModal }
) => {
  const { email, username, repository, remote } = snippets;
  // @ts-ignore
  const { host = '[hostname]' } = fileData || {};

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
        <ListItem><WarningIcon/> Add the keys to the agent! You can do it automatically with <Button onClick={() => handleModal()} variant="link">Show</Button></ListItem>
        <ListItem><Code>git remote rm {remote}</Code></ListItem>
        <ListItem><Code>git remote add {remote} {repoLink}</Code></ListItem>
        <ListItem><Code>git push -u origin {repoLink}</Code></ListItem>
        <ListItem><Code>git clone {repoLink}</Code></ListItem>
      </OrderedList>
    </Box>
  );
};

export default GitSnippetOut;
