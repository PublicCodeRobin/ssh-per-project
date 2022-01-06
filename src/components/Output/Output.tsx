import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, FormLabel, FormHelperText, Input, Code} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';

const Output: FC<{ fileData: {} }> = ({fileData}) => {
    console.log(fileData);
    // git remote add origin git@robinpub.github.com:PublicCodeRobin/uix-cloudinary-input.git
    return (
        <Box
            w={'95%'}
            maxW={'1200px'}
            mx={'auto'}
            p={'30px'}
            my={'30px'}
            border={'1px solid black'}
        >
            <Box>
                {Object.entries(fileData).map(([key,val], i) => {
                console.log({key,val})
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
                           <Code width={'100%'}>{i===0 ? '' : ''}{name} {val} </Code>
                       </p>
                    );
                })}
            </Box>
        </Box>
    );
};

Output.propTypes = {
    fileData: PropTypes.object.isRequired,
};

export default Output;
