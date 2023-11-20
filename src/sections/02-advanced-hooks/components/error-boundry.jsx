import React from 'react';

export class ErrorBoudry extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.log('Error: ', error);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export const Test = () => {
    throw new Error('hello from error');
    // return <h2>test</h2>;
};
