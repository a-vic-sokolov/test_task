import React from 'react'
import {useState} from 'react'
import {Redirect, Route, Switch} from "react-router";
import {Quote} from "./Quote";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'

export const App = (props) => {
 return (
     <div>
         <Container>
             <Switch>
                 <Route path="/" component={Quote}/>
                 <Redirect from="/?id" to="/" />
             </Switch>
         </Container>
     </div>
 )
}