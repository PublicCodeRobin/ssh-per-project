import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormLabel, FormHelperText, Input, Button, Divider, VStack, Flex } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useForm } from '../../hooks/useForm';
import { EventHandler } from 'framer-motion/types/events/types';
import Form from '../Form/Form';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const inputConfig = [
  {
    name: 'host',
    displayName: 'Host',
    defaultValue: '',
    type: 'text',
    helperText: 'Will be used in git commands to add repo (git@[HOST.HOST.COM]:[username])',
    placeholder: 'personal.github.com',
  },
  {
    name: 'user',
    displayName: 'User',
    defaultValue: '',
    type: 'text',
    helperText: 'Just put git here.. dunno what happens otherwise',
    placeholder: 'git',
  },
  {
    name: 'hostname',
    displayName: 'Hostname',
    defaultValue: '',
    type: 'text',
    helperText: 'Dunno.. recommend to use github.com',
    placeholder: 'github.com',
  },
  {
    name: 'IdentityFile',
    displayName: 'IdentityFile',
    defaultValue: '',
    type: 'text',
    helperText: 'The filename of the SSH key created in ~/.ssh/',
    placeholder: 'github_personal',
  },
];

const defaultInputs = {};
inputConfig.forEach((input) => {
  // @ts-ignore
  defaultInputs[input.name] = '';
});

const HostFile: FC<{ message?: string, handleSubmit: Function }> = (props) => {
  const { handleSubmit } = props;

  console.log({ defaultInputs });
  const [saved] = useLocalStorage('hostfile', defaultInputs);

  const { formValues, handleChange } = useForm(saved, 'hostfile');

  // @ts-ignore
  const submitForm = (e) => {
    e.preventDefault();

    console.log({ formValues }, 'in form');
    if (!!formValues) {
      handleSubmit(formValues);
    }
  };

  return (
    <Box
      maxW={'1200px'}
      mx={'auto'}
    >
      <Form onSubmit={submitForm}>
        <Flex spacing={3}  gap={'80px'} direction={'column'}>
          <fieldset>
            <Flex gap={'20px'}
              direction={'column'}
            >
              {inputConfig.map((item) => {
                const { name = '', placeholder } = item;
                // @ts-ignore
                const value = formValues[name];
                return (
                  <FormControl key={item.name}>
                    <FormLabel htmlFor={item.name}>{item.displayName}</FormLabel>
                    <Input
                      name={name}
                      id="host"
                      type={item.type}
                      value={value}
                      onChange={handleChange}
                      placeholder={placeholder}
                    />
                    <FormHelperText>{item.helperText}</FormHelperText>
                  </FormControl>
                );
              })}
              <Button
                colorScheme="green"
                variant="solid"
                type={'submit'}>
                 Generate SSH config
              </Button>
            </Flex>
          </fieldset>
        </Flex>
      </Form>
    </Box>
  );
};

HostFile.propTypes = {
  message: PropTypes.string,
};

export default HostFile;
