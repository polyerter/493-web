import React from "react";
import 'animate.css';

let time = 0;

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const {date} = this.state; // { date: 06.12.2022 19:17:00 }
        const min = date.getMinutes();
        const second = date.getSeconds();
        
        let className = '';

        if (second % 10 == 0) {
            className = 'animate__fadeInLeft';
        } else if(second % 5 == 0) {
            className = 'animate__fadeOutRight';
        }

        return <div>
            {min}:{second}

            <div className={"animate__animated " + className}>Hello World</div>
        </div>;
    }
}

export default Clock;