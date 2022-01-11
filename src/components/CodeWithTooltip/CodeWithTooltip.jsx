import React from 'react';
import { Box, Tag, Tooltip } from '@chakra-ui/react';

const CustomizedTooltip = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p="1">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

CustomizedTooltip.displayName = 'Code with tooltip';

const CodeWithTooltip = ({ children }) => (
  <Tooltip label="Hover me">
    <CustomizedTooltip>{children}</CustomizedTooltip>
  </Tooltip>
);

export default CodeWithTooltip;

