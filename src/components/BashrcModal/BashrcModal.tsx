import React from 'react';
import {
  Button, Code,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, useClipboard,
} from '@chakra-ui/react';

const BashrcModal: React.FC<{
  isOpen: boolean, onClose: () => void,
  configData?: {[key: string] : string}
}> = ({ onClose, isOpen, configData }) => {
  console.log(configData);
  const { identityFile } = configData || {};
  const fileName = `
if [ -z "$SSH_AUTH_SOCK" ] ; then
   eval \`ssh-agent -s\`
   ssh-add ~/.ssh/${identityFile}
fi
  `;
  const { onCopy, hasCopied } = useClipboard(fileName, 2000);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent maxW={'680px'}>
        <ModalHeader>Add this to your .bashrc or .bashProfile</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <Code colorScheme="yellow" p={3} w={'full'}>
           if [ -z "$SSH_AUTH_SOCK" ] ; then <br/>
             &nbsp; eval `ssh-agent -s`<br/>
             &nbsp; ssh-add ~/.ssh/{identityFile}<br/>
           fi<br/>
          </Code>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={onCopy}
            colorScheme={hasCopied ? 'green' : 'blue'}
            mr={3} >
            {hasCopied ? 'Copied!' : 'Copy'}
          </Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BashrcModal;

