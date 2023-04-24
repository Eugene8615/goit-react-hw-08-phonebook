import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      200: '#E2E8F0',
      900: '#11111',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.900',
      },
    },
  },
});
