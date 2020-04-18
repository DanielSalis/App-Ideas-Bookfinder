import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/loading.json';

import './style.css';

export default class Loading extends Component {

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className="lottie-container">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        );
    }
}