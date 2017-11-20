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
                <div key={i} className="wall">
                    <Star/>
                </div>
            );
        }
        return (
            <div id="stars-frame">
                {stars}
            </div>
        )
    }
};
