import React, {ReactNode} from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

const Header = () => (
  <nav className='navbar container'>
    <div className='row col-8 mx-auto'>
      <Link to='/' >
        <img
          src='/images/UGL_Logo_Purple.png'
          className='img-fluid'
          alt='Upgrade Labs'
        />
      </Link>
    </div>
  </nav>
);

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div>
      <Helmet
        title='Upgrade Labs'
        meta={[
          { name: 'description', content: 'Upgrade Labs' },
          { name: 'keywords', content: 'fitness, wellness, biohacking' },
        ]}
      />
      <Header />
      <div>
        {props.children}
      </div>
    </div>
  );
}

export enum Foo {
  One = 'one',
  Two = 'bob',
}

function titlePlease(flag: boolean): string {
  return Foo.One;
}
