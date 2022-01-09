import React, { FC, FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import HostFile from '../Hostfile/Hostfile';
import Output from '../Output/Output';
import GitSnipets from '../GitSnipets/GitSnipets';
import Introduction from '../Introduction/Introduction';
import SnippetOut from '../SnippetOut/SnippetOut';

const Layout: FC<{ message?: string }> = (props) => {
  const [output, setOutput] = useState(undefined);
  const [snippets, setSnippets] = useState(undefined);

  const handleSubmit = (formValues: {}) => {
    // @ts-ignore
    setOutput(formValues);
  };
  const handleSnippetSubmit = (e: FormEvent, formValues: {}) => {
    console.log({ formValues }, 'd');
    // @ts-ignore
    setSnippets(formValues);
  };

  return (
    <Box
      w={'95%'}
      maxW={'1200px'}
      mx={'auto'}
    >
      <Introduction
        snippets={snippets}
      />
      <HostFile
        handleSubmit={handleSubmit}
      />
      {
        (!!output || !!snippets) && (
          <Output
            snippets={snippets}
            fileData={output}
          />
        )
      }
      <GitSnipets handleSubmit={handleSnippetSubmit}/>
      {
        !!output && (
          <SnippetOut
            snippets={snippets}
            fileData={output}
          />)
      }

    </Box>
  );
};

Layout.propTypes = {
  message: PropTypes.string,
};

export default Layout;
