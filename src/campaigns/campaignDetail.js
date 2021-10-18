import React from 'react';
import { HeaderContainer } from 'carbon-components-react';
import { Header } from 'carbon-components-react';
import { SkipToContent } from 'carbon-components-react';
import { HeaderMenu, HeaderSideNavItems } from 'carbon-components-react';
import { HeaderNavigation } from 'carbon-components-react';
import { HeaderMenuItem } from 'carbon-components-react';
import { HeaderName } from 'carbon-components-react';
import { HeaderMenuButton } from 'carbon-components-react';
import { SideNav, SideNavItems } from 'carbon-components-react';

class CampaignDetail extends React.Component {
  
  constructor(){
    super();
    this.state={
      user: '',
      pass: ''
    }
  }

  render() {
    return (
      <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="Defiance Analytics">
                <HeaderMenuItem isCurrentPage href="#">
                  Campaigns
                </HeaderMenuItem>
                <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
                <HeaderMenuItem href="#">Budget</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Templates">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
                <HeaderMenu aria-label="Link 4" menuLinkName="Reporting">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}>
                <SideNavItems>
                  <HeaderSideNavItems>
                    <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                      <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                      <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                      <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                    </HeaderMenu>
                  </HeaderSideNavItems>
                </SideNavItems>
              </SideNav>
            </Header>
          )}
        />
    )
  }
}

export default CampaignDetail;