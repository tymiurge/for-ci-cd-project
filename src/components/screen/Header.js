import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Header = props => (
    <Menu stackable inverted color='blue'>
        <Menu.Item active='true' >
            <Icon name='money bill alternate outline' />
        </Menu.Item>

        <Menu.Item
            active={false}
            onClick={() => alert('go to logs')}
        >
            Logs
        </Menu.Item>

        <Menu.Item
            active={false}
            onClick={() => alert('go to stats')}
        >
            Statistics
        </Menu.Item>
    </Menu>
)

export default Header
