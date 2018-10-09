import React from 'react'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'

const Header = props => (
    <Menu stackable inverted color='blue'>
        <Menu.Item active={true} >
            Buckets
        </Menu.Item>

        <Menu.Item
            active={false}
            onClick={() => alert('go to logs')}
        >
            Logs
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item text={(<Icon name='user' />)}>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Sign-out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Menu.Menu>
    </Menu>
)

export default Header
