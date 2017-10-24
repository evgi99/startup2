/**
 * Created by Evgi on 10/24/2017.
 */
import React from 'react'
import Star from 'material-ui/svg-icons/action/stars'

export default class StarsFrame extends React.Component {
    render() {
        var stars = [];
        for (var i = 0; i < this.props.numberOfStars1; i++) {
            stars.push(
                <Star key={i} style={{margin:'0.5em', width: 'calc(100%/7)', height: '50'}}/>
            );
        }
        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        )
    }
};
