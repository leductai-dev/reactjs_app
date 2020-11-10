import React, { Component } from 'react'
import {
    Route,
    Link,
  } from "react-router-dom";
const menuLink = [
    {
        "namePage": "Trang Chủ",
        "to":"/",
        "exact":true
    },
    {
        "namePage": "Quản Lý Sản Phẩm",
        "to":"/products-list",
        "exact":false
    },
]
var Menulink =({lable, to, activeOnlyWhenExact} )=>{
    return (
        <Route 
            path = {to}
            exact = {activeOnlyWhenExact}
            children= {({match})=>{
                var active = (match)? "active":" ";
                return (
                    <li className={`nav-item ${active} `}>
                        <Link to={to} className="nav-link">{lable}</Link>
                </li>

                )
            
            }}
            />
    )}
export default class Menu extends Component {
    render() {
        return (
           
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        {this.showMenuLink(menuLink)}
                    </ul>
                </nav>
           
        )
    }
    showMenuLink(menuLink){
        var result = null;
        if(menuLink.length >0){
            result = menuLink.map((link,index)=>{
                return(
                <Menulink 
                key = {index}
                lable={link.namePage}
                to ={link.to}
                activeOnlyWhenExact = {link.exact}
                ></Menulink>
                )
            })
        }
        return result;
    }
}

