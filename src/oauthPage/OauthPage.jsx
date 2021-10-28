import React from 'react';

import { authenticationService } from '../_services';

class OauthPage extends React.Component {
  constructor(props) {
      super(props);
      var url = new URL(window.location);
      var params = new URLSearchParams(url.search);
      this.state = {
        code: params.get('code')
      }
    }

    componentDidMount () {
      authenticationService.getTokensWithCode(this.state.code);
    }
      
    render() {
        return (
            <div>
            </div>
        )
    }
}

export { OauthPage }; 