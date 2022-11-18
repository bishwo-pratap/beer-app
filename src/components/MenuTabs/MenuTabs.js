import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AllBeers from '../AllBeers/AllBeers';
import MyBeers from '../MyBeers/MyBeers';

/**
 *  Renders Tabs component.
 *  Can be configured for dynamic rendering by changing `menuTabs`. 
 *  Needs specific component for `TabBody` property.
 * 
 * @returns Tabs component
 */
function MenuTabs() {
  const menuTabs = [
    {
      keyName: 'AllBeers',
      title: 'All Beers',
      TabBody: AllBeers
    },
    {
      keyName: 'MyBeers',
      title: 'My Beers',
      TabBody: MyBeers
    }
  ]

  return (
    <Tabs defaultActiveKey={menuTabs[0].keyName} transition={false} id='simple-tab' className='home-tab mb-3'>
      {menuTabs.length && menuTabs.map(({keyName, title, TabBody})=>{
        return (
          <Tab eventKey={keyName} title={title} key={keyName}>
            <TabBody />
          </Tab>
        )
      })}
    </Tabs>
  );
}

export default MenuTabs;
