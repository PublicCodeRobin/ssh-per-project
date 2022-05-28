import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormLabel, FormHelperText, Input, Button, Flex } from '@chakra-ui/react';
import { useForm } from '../../hooks/useForm';
import Form from '../Form/Form';
import { useLocalStorage } from '../../hooks/useLocalStorage';


type inputModel = {
  name: string,
  displayName?: string,
  defaultValue?: string,
  type: string,
  helperText : string,
  placeholder: string,
};


const SshConfigFile: FC<{
  message?: string,
  handleSubmit: Function,
  formInputs: inputModel[],
}> =
 (
   props
 ) => {
   const { handleSubmit, formInputs } = props;

   const defaultInputs = {};
   formInputs.forEach((input) => {
     // @ts-ignore
     defaultInputs[input.name] = '';
   });

   console.log({ defaultInputs });
   const [saved] = useLocalStorage('hostfile', defaultInputs);

   const { formValues, handleChange } = useForm(saved, 'hostfile');

   // @ts-ignore
   const submitForm = (e) => {
     e.preventDefault();

     console.log({ formValues }, 'in form');
     if (!!formValues) {
       handleSubmit(formValues);
     }
   };

   return (
     <Box
       maxW={'1200px'}
       mx={'auto'}
     >
       <Form onSubmit={submitForm}>
         <Flex spacing={3}  gap={'80px'} direction={'column'}>
           <fieldset>
             <Flex gap={'20px'}
               direction={'column'}
             >
               {formInputs.map((item) => {
                 const { name = '', placeholder } = item;
                 // @ts-ignore
                 const value = formValues[name];
                 return (
                   <FormControl key={item.name}>
                     <FormLabel htmlFor={item.name}>{item.displayName}</FormLabel>
                     <Input
                       name={name}
                       id="host"
                       type={item.type}
                       value={value}
                       onChange={handleChange}
                       placeholder={placeholder}
                     />
                     <FormHelperText>{item.helperText}</FormHelperText>
                   </FormControl>
                 );
               })}
               <Button
                 colorScheme="green"
                 variant="solid"
                 type={'submit'}>
                 Generate SSH config
               </Button>
             </Flex>
           </fieldset>
         </Flex>
       </Form>
     </Box>
   );
 };

SshConfigFile.propTypes = {
  message: PropTypes.string,
};

export default SshConfigFile;
