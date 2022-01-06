import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, FormLabel, FormHelperText, Input, Code} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';

const Output: FC<{ data: {} }> = ({data}) => {
    console.log(data);
    // git remote add origin git@robinpub.github.com:PublicCodeRobin/uix-cloudinary-input.git
    return (
        <Box
            maxW={'1200px'}
            mx={'auto'}
        >
            <Box>
                {Object.entries(data).map(([key,val], i) => {
                    // @ts-ignore
                    const [first, ...rest] = [...key];
                    const last = rest.join('');
                    const name = [first.toUpperCase(), last].join('');
                    return (
                       <p key={i}>
                           <Code width={'100%'}>{i===0 ? '' : ''}{name} {val} </Code>
                       </p>
                    );
                })}
            </Box>
        </Box>
    );
};

Output.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Output;
