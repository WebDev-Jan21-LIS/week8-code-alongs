import React from 'react';

function UserDetail({ username }) {
    return (
        <h1>User detail: {username}</h1>
    )
}

class LoggedUser extends React.Component {
    // - State represents information that the component is in charge of
    // - State is always an object
    // - Changes on the state may affect the component rendering
    // - State can only exist on Class Components*

    //* This is not true when using Hooks <- 

    state = {
        username: "miguel",
        email: "miguel.bgomes@gmail.com",
        isLoggedIn: false
    }

    handleChangeUsername = () => {
        //Change the state (username) to Laura
        //this.state.username = 'Laura'; no-no

        this.setState({
            username: 'Laura',
            email: 'laura@gmail.com'
        })
    }

    handleToggleLogged = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        const { username, isLoggedIn } = this.state;
        return (
            <div>
                <h1>Logged User: {username}</h1>
                <p>{`User is logged in: ${isLoggedIn}`}</p>
                <button onClick={this.handleChangeUsername}>Change username</button>
                <button onClick={this.handleToggleLogged}>Toggle logged</button>
                <UserDetail username={username} />
            </div>
        )
    }

}

export default LoggedUser;