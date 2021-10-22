import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import cx from 'classnames';
import { history } from '../_helpers';
import { authenticationService } from '../_services';
import { PrivateRoute } from '../_components';
import { Content, HeaderMenuButton } from 'carbon-components-react';
import { Header, HeaderContainer, HeaderName } from 'carbon-components-react';
import { HeaderGlobalBar, HeaderGlobalAction } from 'carbon-components-react';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { Dashboard16, VolumeUpFilled16, User24 } from '@carbon/icons-react';
import { SkipToContent, SideNavLink } from 'carbon-components-react';
import CampaignDetailComponent from '../campaigns/campaignDetail';
import CampaignControlDetailComponent from '../campaigns/CampaignControlDetail';
import EtfComponent from '../ETF/ETF';
import { HomePage } from '../HomePage';
import { OauthPage } from '../OauthPage/OauthPage'
// import { Login } from '../login/login';


function App (props) {

    const logout = () => {
        authenticationService.logout();
        history.push('/login');
    }

    const StoryContent = ({ useResponsiveOffset = true }) => {

        const content = (
          <div className="bx--grid--full-width">
            <div className="bx--row" style={{'margin': '0'}}>
              <div className="bx--col" style={{padding: '0rem', marginLeft: '16rem'}}>
                <Router>
                  <Switch>
                    <Route path='/' exact component={EtfComponent}/>  
                    <Route path='/campaigns' exact component={CampaignDetailComponent}></Route>                  
                    <Route path='/campaignscontroldetail' exact component={CampaignControlDetailComponent}></Route>                  
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        );
        const style = {
          height: '100%',
        };
        if (useResponsiveOffset) {
          style.margin = '0';
          style.width = '100%';
        }
        style.padding = '3rem 0rem 0rem 0rem'
        return (
          <Content id="main-content" style={style}>
            {content}            
          </Content>
        );
      };
    
    if(localStorage.email){
        return (
            <>
            <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="IBM Platform Name">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <HeaderName prefix="">
                    Defiance Analytics
                </HeaderName>
                <HeaderGlobalBar>
                    <HeaderGlobalAction
                    aria-label="Notifications"
                    >
                    <User24 />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                  <SideNavItems>
                    <SideNavLink renderIcon={Dashboard16} href="/">
                    ETFs
                    </SideNavLink>
                    <SideNavLink renderIcon={Dashboard16} href="/campaigns">
                    Campaigns
                    </SideNavLink>
                    <SideNavLink renderIcon={Dashboard16} href="/campaignscontroldetail">
                    Campaign Control Detail
                    </SideNavLink>
                    <SideNavLink renderIcon={VolumeUpFilled16} onClick={logout}>
                    Logout
                    </SideNavLink>
                  </SideNavItems>
                </SideNav>
              </Header>
            )}
            />
            <StoryContent>
                
            </StoryContent>
    
        </>
        );
    }else{
         return <Router>
             <PrivateRoute exact path="/" component={HomePage} />
             <Route path="/oauth2.html" component={OauthPage} />
            </Router>
        // return <Router>
        //          <Route path="/" component={Login} />
        //        </Router>
    }
    

}

export { App }; 