import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';

const Layout: FC<{ message?: string }> = (props) => {
    const {message} = props;
    return (
        <Box
            borderRadius={'lg'}
            color="white"
            p={5}
            bg={'red.300'}
            mb={5}
        >

        </Box>
    );
};

Layout.propTypes = {
    message: PropTypes.string,
};

export default Layout;
