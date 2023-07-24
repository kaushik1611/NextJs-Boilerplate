import '@/styles/globals.css';
import type { AppProps } from 'next/app';
/**
 * * Use fontsource for any custom google fonts. It improves the performance and takes care of preloading.
 * * Check the fontsource documentation if there is a variable version available use it.
 * * Learn More: https://fontsource.org/docs/introduction
 */
import '@fontsource/inter/variable.css';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

/**
 * * Next Layouts are a better way to apply the layout to the pages.
 * * Learn More: https://nextjs.org/docs/basic-features/layouts
 */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
