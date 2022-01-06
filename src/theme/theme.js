import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    brand: {
      200: '#243245',
    },
    second: {
      200: '#0fcb6b',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
      },

      defaultProps: {
        variant: 'outline',
        size: 'md',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 500,
        textTransform: 'uppercase',
      },
    },
  },
});
export default theme;
