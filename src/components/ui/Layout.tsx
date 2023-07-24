import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
