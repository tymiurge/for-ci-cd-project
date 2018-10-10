import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Header = props => (
    <Menu stackable inverted color='blue'>
        <Menu.Item active={props.active === 'buckets'} onClick={ () => props.history.push('/summary') }>
            Buckets
        </Menu.Item>

        <Menu.Item
            active={props.active === 'logs'}
            onClick={ () => props.history.push('/logs') }
        >
            Logs
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item icon='user'>
            <Dropdown.Menu>
              <Dropdown.Item 
                onClick={ () => props.history.push('/profile') }
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                onClick={ () => props.history.push('/login') }
              >
                Sign-out
            </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Menu.Menu>
    </Menu>
)

export default withRouter(Header)
