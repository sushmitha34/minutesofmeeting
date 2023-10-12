import React, { Component } from "react";

class DateTimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: new Date().toLocaleString(),
      activeTimeInSeconds: 0,
    };
  }

  componentDidMount() {
    this.updateCurrentTime();
    // Update the current date and time every second
    this.intervalID = setInterval(() => this.updateCurrentTime(), 1000);

    // Track the active time the user has spent on the web page
    this.activityIntervalID = setInterval(() => this.updateActiveTime(), 1000);
  }

  componentWillUnmount() {
    // Clear the intervals when the component is unmounted to prevent memory leaks
    clearInterval(this.intervalID);
    clearInterval(this.activityIntervalID);
  }

  updateCurrentTime() {
    this.setState({
      currentDateTime: new Date().toLocaleString(),
    });
  }

  updateActiveTime() {
    this.setState((prevState) => ({
      activeTimeInSeconds: prevState.activeTimeInSeconds + 1,
    }));
  }

  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  render() {
    const { currentDateTime, activeTimeInSeconds } = this.state;
    const formattedActiveTime = this.formatTime(activeTimeInSeconds);

    return (
      <div>
        <p
          style={{
            position: "fixed",
            top: "30px",
            right: "140px",
            fontSize:"medium",
            fontFamily:"sans-serif"
          }}
        >
          {currentDateTime}
        </p>
        <p
          style={{
            position: "fixed",
            top: "50px",
            right: "190px",
            fontSize:"medium",
            fontFamily:"sans-serif"
          }}
        >
          {formattedActiveTime}
        </p>
      </div>
    );
  }
}

export default DateTimeDisplay;
