import React, { FC, FormEvent, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Introduction from '../Introduction/Introduction';
import HostFile from '../Hostfile/Hostfile';
import FileOut from '../FileOut/FileOut';
import GitSnipets from '../GitSnipets/GitSnipets';
import GitSnippetOut from '../GitSnippetOut/GitSnippetOut';
import { defaultFileOut, defaultSnippetOut } from '../../types/FormsOut';

const FormContainer: FC<{ message?: string }> = (props) => {
  const [output, setOutput] = useState(defaultFileOut);
  const [snippets, setSnippets] = useState(defaultSnippetOut);

  const handleSubmit = (formValues: {}) => {
    // @ts-ignore
    setOutput(formValues);
  };
  const handleSnippetSubmit = (e: FormEvent, formValues: {}) => {
    console.log({ formValues }, 'd');
    // @ts-ignore
    e.preventDefault();
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
        email={snippets.email}
      />
      <HostFile
        handleSubmit={handleSubmit}
      />
      {
        (!!output || !!snippets) && (
          <FileOut
            snippets={snippets}
            fileData={output}
          />
        )
      }
      <GitSnipets handleSubmit={handleSnippetSubmit}/>
      {
        !!output && (
          <GitSnippetOut
            snippets={snippets}
            fileData={output}
          />)
      }

    </Box>
  );
};

export default FormContainer;
