import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, FormLabel, FormHelperText, Input, Button, Divider, VStack, Flex} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';
import {useForm} from "../../hooks/useForm";
import {EventHandler} from "framer-motion/types/events/types";
import Form from "../Form/Form";

const inputConfig = [
    {
        name: 'repository',
        displayName: 'Repository',
        defaultValue: '',
        type: 'text',
        value: '',
        helperText: '[something].git',
        placeholder: 'personal.github.com',
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

const GitSnippets: FC<{ message?: string, handleSubmit: Function }> = ({handleSubmit}) => {

console.log(defaultInputs)

    const {formValues, handleChange} = useForm(defaultInputs);

    return (
        <Box
            w={'95%'}
            maxW={'1200px'}
            mx={'auto'}
        >
            <Form onSubmit={(e) => handleSubmit(e, formValues)}>
                <Flex spacing={3} gap={'80px'} direction={'column'}>
                    <fieldset>
                        <Flex
                            gap={'20px'}
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
                                            type={item.type}
                                            onChange={handleChange}
                                            value={defaultValue}
                                            placeholder={placeholder}
                                        />
                                        <FormHelperText>{item.helperText}</FormHelperText>
                                    </FormControl>
                                )
                            })}
                            <Button type={'submit'}>Snippets to add remote to git</Button>
                        </Flex>
                    </fieldset>
                    <fieldset>
                        <FormControl>
                            <FormLabel htmlFor={'name'}>{'Repository'}</FormLabel>
                            <Input
                                name={'repository'}
                                id='host'
                                defaultValue={'oke'}
                            />
                            <FormHelperText>{'repository name: <repo_name>.git'}</FormHelperText>
                        </FormControl>
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
