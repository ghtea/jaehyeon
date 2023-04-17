import { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = forwardRef<unknown, LayoutProps>(
  ({ children, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => localRef.current);

    return (
      <div
        {...props}
        ref={localRef}
        // className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'
        css={{
          display: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    );
  },
);

Layout.displayName = 'Layout';

export default Layout;
