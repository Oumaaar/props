import React from 'react'

const Header = (props) => {
    console.log(props)
    const name = 'Omar'
    props.getData(name) 
    return (
        <div>
            {props.fullName}
            <h1>{props.Bio}</h1>
            <p>{props.profession}</p>
            {props.alertFct('name')}
        </div>
        
    )
}

export default Header
