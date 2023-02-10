import React, { Component } from 'react'

import CountContainer from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {

    render() {
        return (
            <div>
                <CountContainer />
                <hr />
                <Person />
            </div>
        )
    }
}
