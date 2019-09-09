import React from 'react'
import '../css/Header.scss'
export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="page-header">
                <h1>山西农信社</h1>
            </div>
        )
    }
}