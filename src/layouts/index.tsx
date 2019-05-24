import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import "./index.scss"

//import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <nav className="navbar container">
    <div className="row col-8 mx-auto">
      <Link to="/" >
        <img
          src="/images/UGL_Logo_Purple.png"
          className="img-fluid"
          alt="Upgrade Labs"
        />
      </Link>
    </div>
  </nav>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
