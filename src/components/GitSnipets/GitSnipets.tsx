import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormLabel, FormHelperText, Input, Button, Divider, VStack, Flex } from '@chakra-ui/react';
import { useForm } from '../../hooks/useForm';
import Form from '../Form/Form';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const inputConfig = [
  {
    name: 'username',
    displayName: 'Username',
    defaultValue: '',
    type: 'text',
    value: '',
    helperText: 'Username on GitHub',
    placeholder: 'MyUserName_1993',
  },
  {
    name: 'email',
    displayName: 'Email',
    defaultValue: '',
    type: 'text',
    value: '',
    helperText: 'email you use on GitHub',
    placeholder: 'your_email@example.com',
  },
  {
    name: 'repository',
    displayName: 'Repository',
    defaultValue: '',
    type: 'text',
    value: '',
    helperText: 'the Git repository you want to push to (.git has to be added)',
    placeholder: 'myrepo.git',
  },
  {
    name: 'remote',
    displayName: 'Remote name',
    defaultValue: '',
    type: 'text',
    value: '',
    helperText: 'how do you want to call the remote (mostly origin)',
    placeholder: 'origin',
  },
];

const defaultInputs = {};
inputConfig.forEach((input) => {
  // @ts-ignore
  defaultInputs[input.name] = '';
});

const GitSnippets: FC<{ message?: string, handleSubmit: Function }> = ({ handleSubmit }) => {
  const [saved] = useLocalStorage('snippets', defaultInputs);
  const { formValues, handleChange } = useForm(saved, 'snippets');
  console.log({ formValues });

  return (
    <Box>
      <Form onSubmit={e => handleSubmit(e, formValues)}>
        <Flex spacing={3} gap={'80px'} direction={'column'}>
          <fieldset>
            <Flex
              gap={'20px'}
              direction={'column'}
            >
              {inputConfig.map((item) => {
                const { name = '', defaultValue, placeholder } = item;
                // @ts-ignore
                const value = formValues[name];
                return (
                  <FormControl key={item.name}>
                    <FormLabel htmlFor={item.name}>{item.displayName}</FormLabel>
                    <Input
                      name={name}
                      type={item.type}
                      onChange={handleChange}
                      value={value}
                      placeholder={placeholder}
                    />
                    <FormHelperText>{item.helperText}</FormHelperText>
                  </FormControl>
                );
              })}
              <Button type={'submit'}>Get snippets to add remote to git</Button>
            </Flex>
          </fieldset>
        </Flex>
      </Form>
    </Box>
  );
};

GitSnippets.propTypes = {
  message: PropTypes.string,
};

export default GitSnippets;
