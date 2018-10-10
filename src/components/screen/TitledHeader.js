import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const TitledProfile = ({title, history}) => (
    <Menu inverted color='blue' borderless>
        <Menu.Item name='browse' onClick={ () => history.goBack() }>
            <Icon name='arrow left' />
        </Menu.Item>

        <Menu.Item header>
            { title }
        </Menu.Item>

    </Menu>
)

export default withRouter(TitledProfile)
