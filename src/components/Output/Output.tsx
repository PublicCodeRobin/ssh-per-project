import React, { FC, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormLabel, FormHelperText, Input, Code, Button } from '@chakra-ui/react';
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Output: FC<{ fileData?: {}, snippets?: {} }> = ({ fileData, snippets }) => {
  // git remote add origin git@robinpub.github.com:PublicCodeRobin/uix-cloudinary-input.git

  const [textToCopy, setTextToCopy] = useState('');
  const [copied, setCopied] = useState(false);

  const hasData = useCallback(() => {
    const values: string[] = [];
    if (!!fileData) {
      Object.values(fileData).forEach((value, i) => {
        if (typeof value === 'string') {
          values.push(value);
        }
      });
      if (values.filter(Boolean).length === 0) {
        return null;
      }
      return !!fileData;
    }
    return null;
  }, [fileData]);

  useEffect(() => {
    setCopied(false);
    if (!!fileData && hasData()) {
      const text = Object.entries(fileData)
        .map(([key, value]) => {
          if (!key || !value) {
            return null;
          }
          return (
            `${key} ${value}`
          );
        })
        .filter(Boolean)
        .join('\n');

      setTextToCopy(text);
    }
  }, [fileData, hasData]);

  if (!!fileData) {

  }
  if (!fileData) {
    return null;
  }

  return (
    <Box
      p={'30px'}
      my={'30px'}
      border={'1px solid black'}
    >
      <Box>
        {
          Object.entries(fileData).map(([key, val], i) => {
            console.log({ key, val }, '');
            if (!key || !val) {
              return null;
            }
            // @ts-ignore
            const [first, ...rest] = [...key];
            const last = rest.join('');
            const name = [first.toUpperCase(), last].join('');
            if (key === 'IdentityFile') {
              return (
                <p key={i}>
                  <Code width={'100%'}>{i === 0 ? '' : ''}{name} ~/.ssh/{val} </Code>
                </p>
              );
            }

            return (
              <p key={i}>
                <Code width={'100%'}>{name} {val} </Code>
              </p>
            );
          })}
        <CopyToClipboard
          text={textToCopy}
          onCopy={() => setCopied(true)}
        >
          <Button mt={'20px'}>{copied ? 'Copied!' : 'Copy to clipboard'}</Button>
        </CopyToClipboard>
      </Box>
    </Box>
  );
};

Output.propTypes = {
  fileData: PropTypes.object.isRequired,
};

export default Output;
