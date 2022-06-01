import React, {Component} from 'react';

class Dashboard extends Component{

    componentDidMount() {
        console.log("test")
    }

    render() {
        return(
            <div>
                <a href="/Lecture1Cal">Lecture 1</a>
            </div>
        )
    }
}

export default Dashboard;