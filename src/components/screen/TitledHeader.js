import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const TitledProfile = ({title}) => (
    <Menu inverted color='blue' borderless>
        <Menu.Item name='browse' onClick={()=>alert('go!')}>
            <Icon name='arrow left' />
        </Menu.Item>

        <Menu.Item header>
            { title }
        </Menu.Item>

    </Menu>
)

export default TitledProfile
