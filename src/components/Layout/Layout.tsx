import React, {FC, FormEvent, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl ,FormLabel, FormHelperText, Input} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';
import HostFile from "../Hostfile/Hostfile";
import Output from "../Output/Output";
import GitSnipets from "../GitSnipets/GitSnipets";

const Layout: FC<{ message?: string }> = (props) => {
    const {message} = props;
    const [output, setOutput] = useState({});

    const handleSubmit = (e: FormEvent, formValues: {}) => {
        e.preventDefault();
        setOutput(formValues);
    };
    return (
        <Box
            maxW={'1200px'}
            mx={'auto'}
        >
           <HostFile handleSubmit={handleSubmit}/>
           <Output data={output}/>
           <GitSnipets handleSubmit={handleSubmit}/>
        </Box>
    );
};

Layout.propTypes = {
    message: PropTypes.string,
};

export default Layout;
