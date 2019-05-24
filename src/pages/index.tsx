import * as React from 'react'
import DefaultLayout from '../layouts/index'

import './index.css'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    const renderPage = () => {
      return (
        <div>
        <div className="jumbotron-background" >
          <header className="jumbotron bg-cover text-white" >
            <h1 className="jumbotron-text">
              Does reaching top cognitive and physical performance seem elusive?
            </h1>
          </header>
        </div>
        <div>
          <h1>Hi people</h1>
          <p>
            Welcome to your new{' '}
            <strong>{this.props.data.site.siteMetadata.title}</strong> site.
          </p>
          <p>Now go build something great.</p>
        </div>
      </div>
      )
    }

    return (
      <DefaultLayout>
        {renderPage}
      </DefaultLayout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
