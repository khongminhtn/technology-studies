import React from 'react'
import { Link } from 'react-router'

// Displays individual 'Product' component because thats what nested 
// under 'App' in routing and because Product route has the UR
class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            position: 'fixed',
            top: '20%',
            right: '20%',
            bottom: '20%',
            left: '20%',
            width: 450,
            height: 400,
            padding: 20,
            boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
            overflow: 'auto',
            background:'#fff'
        }
    }
    render() {
        return (
            <div style={this.styles}>
                <p>
                    <Link to={this.props.returnTo}>
                        Back
                    </Link>
                </p>
                {this.props.children}
            </div>
        )
    }
}

export {Modal}