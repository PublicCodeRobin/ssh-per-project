import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, FormLabel, FormHelperText, Input} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';

const HostFile: FC<{ message?: string }> = (props) => {
    const {message} = props;
    const inputConfig = [
        {
            name: 'host',
            type: 'text',
            value: 'Host',
            helperText: 'Just git',
        },
        {
            name: 'user',
            type: 'text',
            value: 'User',
            helperText: 'Just git',
        },
        {
            name: 'hostname',
            type: 'text',
            value: 'Hostname',
            helperText: 'Just git',
        },
    ];
    return (
        <Box
            maxW={'1200px'}
            mx={'auto'}
        >
            <form action="">
                {inputConfig.map((item) => {
                    return (
                        <FormControl>
                            <FormLabel htmlFor={item.name}>{item.value}</FormLabel>
                            <Input id='host' type={item.type}/>
                            <FormHelperText>{item.helperText}</FormHelperText>
                        </FormControl>
                    )
                })}
            </form>
        </Box>
    );
};

HostFile.propTypes = {
    message: PropTypes.string,
};

export default HostFile;
