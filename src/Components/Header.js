import React from 'react'
import { Header, Icon, Segment, Button } from 'semantic-ui-react'

const Headers = () => (
    
    
    
        <Segment className='header'>
        <Header as='h1' textAlign='right' style={{}}>
          <Button negative>Exit</Button>
        </Header>
        <Header as='h3' textAlign='left'>
          Application Logo
        </Header>
        <Header as='h3' textAlign='center'>
          Application Name
        </Header>
        </Segment>
    
    
   
)

export default Headers