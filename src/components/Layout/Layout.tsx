import React, { FC, FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,

} from '@chakra-ui/react';
import FormContainer from '../FormContainer/FormContainer';

const Layout: FC<{ message?: string }> = (props) => {
  return (
    <>
      <Box
        w={'95%'}
        maxW={'1200px'}
        mx={'auto'}
      >
        <FormContainer/>
      </Box>
    </>
  );
};

Layout.propTypes = {
  message: PropTypes.string,
};

export default Layout;
