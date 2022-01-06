import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl ,FormLabel, FormHelperText, Input} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';
import HostFile from "../Hostfile/Hostfile";

const Layout: FC<{ message?: string }> = (props) => {
    const {message} = props;
    return (
        <Box
            maxW={'1200px'}
            mx={'auto'}
        >
           <HostFile/>
        </Box>
    );
};

Layout.propTypes = {
    message: PropTypes.string,
};

export default Layout;
