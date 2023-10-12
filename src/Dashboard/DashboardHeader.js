import React from "react";
import { Segment, Progress, Header } from "semantic-ui-react";
import CurrentDateTime from "./CurrentDateTime";

const DashboardHeader = () => (
  <Segment className="header">
    <Header as="h3" textAlign="left">
      Application Logo
    </Header>
    <Header as="h3" textAlign="center">
      Application Name
    </Header>
    {/********Progress bar ****************/}
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "150px",
      }}
    >
      <Header as="h3" textAlign="right">
        <Progress
          percent={60}
          color="green"
          size="small"
          style={{ width: "20vh" }}
          textAlign="right"
        />
      </Header>
    </div>
    {/********Progress bar ****************/}
    
    <CurrentDateTime/>



  </Segment>
);

export default DashboardHeader;

{
  /* <Header as='h3' icon textAlign='right'>
      <Icon name='user' circular  style={{textAlign:'right'}} />
      <Header.Content>Username</Header.Content>
    </Header> */
}
