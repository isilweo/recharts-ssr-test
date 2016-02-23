import React from 'react';
import ReactDOM from 'react-dom/server';
import Chart from '../shared/chart'
export default class Html extends React.Component {

  render() {

    return (
      <html>
        <body>
          <div id="main">
            {this.props.appContent}
          </div>
          <script src="bundle.js" />
        </body>
      </html>
    );
  }
}
