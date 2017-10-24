/**
 * Created by Evgi on 10/19/2017.
 */
import React from 'react';
import { Redirect, HashRouter, Route, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home'
import VideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset'
import ViewList from 'material-ui/svg-icons/action/view-list'
import Game from '../NineGame/Game'


export default class Tabs extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Link to="/home">
                            <RaisedButton buttonStyle={{borderRadius: 0}} style={{borderRadius: 0}}
                                          className="tab" label="Home" primary = {true} icon={<ActionHome/>}/>
                        </Link>
                        <Link to="/tab1">
                            <RaisedButton buttonStyle={{borderRadius: 0}} style={{borderRadius: 0}}
                                          className="tab" label="Tab 1" primary = {true} icon={<ViewList  />}/>
                        </Link>
                        <Link to="/tab2">
                            <RaisedButton buttonStyle={{borderRadius: 0}} style={{borderRadius: 0}}
                                          className="tab" label="Nine Game" primary = {true} icon={<VideogameAsset/>}/>
                        </Link>
                    </div>

                    <Route path="/home" component={() => (<div> home </div>)}/>
                    <Route path="/tab1" component={() => (<div> tab1 </div>)}/>
                    <Route path="/tab2" component={Game}/>
                    {/*<Route path="/" exact to="/home" />*/}
                    <Route path="/" exact component={() => (<div> home </div>)}/>
                </div>
            </HashRouter>
        )
    }
}