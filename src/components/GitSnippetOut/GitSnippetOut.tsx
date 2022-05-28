import React, { FC, FormEvent, useState } from 'react';
import {
  Box,
  ListItem,
  OrderedList,
  Code,
  Heading, Button, useClipboard,
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
  const [text, setText] = useState('');
  const { hasCopied, onCopy } = useClipboard(text, {});
  const { email, username, repository, remote } = snippets;
  // @ts-ignore
  const { host = '[hostname]' } = fileData || {};

  const repoLink = `git@${host}:${username}/${repository}`;

  const texts =  [
    `git remote rm ${remote}`,
    `it remote add ${remote} ${repoLink}`,
    `git push -u origin ${repoLink}`,
    `git clone ${repoLink}`,
    `Add the keys to the agent! You can do it automatically in`,
  ];

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
        {
          texts.map((text, i) => {
            return (
              <ListItem key={i}>
                <Code
                  onClick={() => setText(text)}>{text} {i === texts.length - 1 ? (
                    <Button
                      colorScheme="orange"
                      onClick={() => handleModal()}
                      variant="link">.bashrc or .bashProfile
                    </Button>
                  ) : null}
                </Code>
              </ListItem>
            );
          })
        }
      </OrderedList>
    </Box>
  );
};

export default GitSnippetOut;
