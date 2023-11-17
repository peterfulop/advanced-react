import React from 'react';

const ControlledFlow = ({ children, currentIndex, onNext, onPrev, data }) => {
    const currentChild = React.Children.toArray(children)[currentIndex];
    const goNext = (dataFromStep) => {
        if (currentIndex < children.filter((child) => child).length - 1) {
            onNext(dataFromStep);
        }
    };
    const goPrev = (dataFromStep) => {
        if (currentIndex !== 0) {
            onPrev();
        }
    };

    if (React.isValidElement(currentChild)) {
        return React.createElement(currentChild.type, {
            ...currentChild.props,
            data,
            goPrev,
            goNext,
        });
    }
};

export default ControlledFlow;
