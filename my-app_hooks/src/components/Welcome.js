import React from 'react';

class Welcome extends React.Component {
    render() {
        const { username } = this.props;
        return <h1>Welcome to my App {username}</h1>
    }
}

export default Welcome;