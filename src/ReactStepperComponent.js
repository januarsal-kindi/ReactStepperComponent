import React, {  Component } from "react";
import "./stepper.sass";

export const TitleComponent = ({ children }) => {
    return (
        <div className="stepper--horizontal__circle">
            <span className="stepper--horizontal__circle__text">
                {children}
            </span>
        </div>
    );
};
export const TitleHeadlineComponent = ({ children }) => {
    return (
        <h3 className="heading__three">
            {children}
        </h3>
    );
};
export const DescriptionComponent = ({ children }) => {
    return (
        <p className="paragraph">
            {children}
        </p>
    );
};

export const ContentComponent = ({ children, disabled, active, id = undefined }) => {
    let className = '';
    if (disabled) {
        className = 'stepper--horizontal--disabled'
    } else if (active) {
        className = 'stepper--horizontal--active'
    }
    return (
        <div onClick={(event) => Stepper.onclickHendler(event, id)} className={`stepper--horizontal ${className}`}>
            {children}
        </div>
    );
};

export const DetailComponent = ({ children }) => {
    return (
        <div className="stepper--horizontal__details">
            {children}
        </div>
    );
};


export default class Stepper extends Component {
    constructor(props, context) {
        super(props, context);
        Stepper.onclickHendler = Stepper.onclickHendler.bind(this);
    }
    static Content = ContentComponent
    static Detail = DetailComponent
    static Title = TitleComponent
    static TitleHeadline = TitleHeadlineComponent
    static Description = DescriptionComponent

    static onclickHendler(event, id) {
        if (id && typeof this.props.onClick == 'function') {
            this.props.onClick(id)
        }
    }

    render() {
        return (
            <div className="stepper__row">
                {this.props.children}
            </div>
        );
    }
}
