import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    // console.log(props);
    const { img, name, position, salary, age } = props.player;
    return (
        // <div className="player">
        //     <div>
        //         <img src={img} alt="" />
        //     </div>
        //     <div>
        //         <h3>{name}</h3>
        //     </div>
        // </div>




        <div className="players">
            <div><img src={img} alt="" /></div>
            <div className="player-body" >
                <h6 className="name-text">Name: {name}</h6>
                <p className="position-text">Position: {position} </p>
                <p className="salary-text">Weekly Salary : ${salary} </p>
                <p className="age-text">Age: {age} years old. </p>
            </div>
            <button
                className="btn"
                onClick={() => props.handleAddPlayer(props.player)}
            >
                <FontAwesomeIcon icon={faFutbol} />  Add player</button>
        </div>


    );
};

export default Player;