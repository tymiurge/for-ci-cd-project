import React from 'react'
import { Table, Button, Icon, Label } from 'semantic-ui-react'

class EntriesTable extends React.Component {

    render() {
        return (


<div>
            <div>
                <Button circular icon='plus' color='blue' />
                <Button circular icon='filter' color='blue' />
                <Button circular icon='settings' color='blue' />
            </div>

            <Table compact celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell collapsing>#</Table.HeaderCell>
                        <Table.HeaderCell collapsing>Type</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        
                        <Table.HeaderCell collapsing>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell><Icon name='sign-in'color='green'/></Table.Cell>
                        <Table.Cell>Salary</Table.Cell>
                        
                        <Table.Cell>3000</Table.Cell>
                        <Table.Cell>
                            <Label color='green' horizontal>
                                salary
                            </Label>
                        </Table.Cell>
                        <Table.Cell collapsing>7 oct 2018</Table.Cell>
                        
                        
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell><Icon name='sign-in'color='green'/></Table.Cell>
                        <Table.Cell>Depesit return</Table.Cell>
                        
                        <Table.Cell>500</Table.Cell>
                        <Table.Cell>
                            <Label color='violet' horizontal>
                                deposit
                            </Label>
                        </Table.Cell>
                        <Table.Cell collapsing>6 oct 2018</Table.Cell>
                        
                        
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell><Icon name='sync alternate' color='blue'/></Table.Cell>
                        <Table.Cell>Transfer from Home storage to Bank account</Table.Cell>
                        
                        <Table.Cell>1500</Table.Cell>
                        <Table.Cell>
                            <Label color='blue' horizontal>
                                transfer
                            </Label>
                        </Table.Cell>
                        <Table.Cell collapsing>6 oct 2018</Table.Cell>
                        
                        
                    </Table.Row>

                    <Table.Row>
                        
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell><Icon name='sign-out' color='red' /></Table.Cell>
                        <Table.Cell>Buy food for 1 week</Table.Cell>
                        
                        <Table.Cell>1500</Table.Cell>
                        <Table.Cell>
                            <Label color='olive' horizontal>
                                food
                            </Label>
                        </Table.Cell>
                        <Table.Cell collapsing>6 oct 2018</Table.Cell>
                        
                        
                    </Table.Row>

                    <Table.Row>
                        
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell><Icon name='sign-out' color='red' /></Table.Cell>
                        <Table.Cell>charge car - 10 lt</Table.Cell>
                        
                        <Table.Cell>370</Table.Cell>
                        <Table.Cell>
                            <Label color='brown' horizontal>
                                car
                            </Label>
                        </Table.Cell>
                        <Table.Cell collapsing>6 oct 2018</Table.Cell>
                        
                        
                    </Table.Row>

                    <Table.Row>
                        
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell><Icon name='sign-out' color='red' /></Table.Cell>
                        <Table.Cell>car TO</Table.Cell>
                        
                        <Table.Cell>1370</Table.Cell>
                        <Table.Cell>
                            <Label color='brown' horizontal>
                                car
                            </Label>
                        </Table.Cell>
                        <Table.Cell collapsing>6 oct 2018</Table.Cell>
                        
                        
                    </Table.Row>


                </Table.Body>
            </Table>
  </div>
        )
    }
}

export default EntriesTable
