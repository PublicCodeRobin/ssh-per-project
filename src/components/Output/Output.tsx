import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, FormLabel, FormHelperText, Input, Code} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';

const Output: FC<{ message?: string }> = (props) => {
    const {message} = props;
    return (
        <Box
            maxW={'1200px'}
            mx={'auto'}
        >
            <Code>
                out
            </Code>
        </Box>
    );
};

Output.propTypes = {
    message: PropTypes.string,
};

export default Output;
