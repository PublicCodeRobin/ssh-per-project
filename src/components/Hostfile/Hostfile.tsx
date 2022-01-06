import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, FormLabel, FormHelperText, Input, Button, Divider, VStack, Flex} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';
import {useForm} from "../../hooks/useForm";
import {EventHandler} from "framer-motion/types/events/types";
import Form from "../Form/Form";

const inputConfig = [
    {
        name: 'host',
        displayName: 'Host',
        defaultValue: '',
        type: 'text',
        value: 'Host',
        helperText: '[something].github.com',
        placeholder: 'personal.github.com',
    },
    {
        name: 'user',
        displayName: 'User',
        defaultValue: '',
        type: 'text',
        value: 'User',
        helperText: 'Just put git here. Does not have to be unique',
        placeholder: 'git',
    },
    {
        name: 'hostname',
        displayName: 'Hostname',
        defaultValue: '',
        type: 'text',
        value: 'Hostname',
        helperText: 'Just git',
        placeholder: 'github.com',
    },
    {
        name: 'IdentityFile',
        displayName: 'IdentityFile',
        defaultValue: '',
        type: 'text',
        value: 'IdentityFile',
        helperText: 'The filename of the SSH key',
        placeholder: 'github_personal',
    },
];

const defaultInputs = {};
inputConfig.forEach((input) => {
    // @ts-ignore
    defaultInputs[input.value] = input.value;
    // @ts-ignore
    defaultInputs[input.defaultValue] = input.defaultValue;
     // @ts-ignore
    defaultInputs[input.placeholder] = input.placeholder;
});

const HostFile: FC<{ message?: string, handleSubmit: Function }> = ({handleSubmit}) => {

    const {formValues, handleChange} = useForm(defaultInputs);

    return (
        <Box
            w={'95%'}
            maxW={'1200px'}
            mx={'auto'}
        >
            <Form onSubmit={(e) => handleSubmit(e, formValues)}>
                <Flex spacing={3}  gap={'80px'} direction={'column'}>
                    <fieldset>
                       <Flex gap={'20px'}
                        direction={'column'}
                       >
                           {inputConfig.map((item) => {
                               const {name = '', value: inputValue, defaultValue, placeholder} = item;
                               // @ts-ignore
                               const value = formValues[inputValue];
                               return (
                                   <FormControl key={item.name}>
                                       <FormLabel htmlFor={item.name}>{item.value}</FormLabel>
                                       <Input
                                           name={name}
                                           id='host'
                                           type={item.type}
                                           value={value}
                                           onChange={handleChange}
                                           defaultValue={defaultValue}
                                           placeholder={placeholder}
                                       />
                                       <FormHelperText>{item.helperText}</FormHelperText>
                                   </FormControl>
                               )
                           })}
                           <Button type={'submit'}>Add this SSH to config</Button>
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
