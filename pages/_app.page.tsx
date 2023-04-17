import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Layout from '@/components/Layout';
import { GlobalStyles } from '@/styles/GlobalStyles';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true });

const App = ({ Component, pageProps }: AppProps) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Layout ref={ref}>
        {(Component as any)?.canvas && (
          <Scene
            className='pointer-events-none'
            eventSource={ref as any}
            eventPrefix='client'
          >
            {(Component as any).canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  );
};

export default App;
