import UncontrolledFlow from '../components/flow/uncontrolled-flow';

const StepOne = ({ goNext }) => {
    return (
        <>
            <h1>Enter your name #1</h1>
            <button onClick={() => goNext({ name: 'peter' })}>Next</button>
        </>
    );
};
const StepTwo = ({ goNext }) => {
    return (
        <>
            <h1>Enter your age #2</h1>
            <button onClick={() => goNext({ age: 30 })}>Next</button>
        </>
    );
};
const StepThree = ({ goNext }) => {
    return (
        <>
            <h1>Enter your country #3</h1>
            <button onClick={() => goNext({ country: 'Hungary' })}>Next</button>
        </>
    );
};

function Flows() {
    return (
        <>
            <UncontrolledFlow onDone={(data) => console.log(data)}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledFlow>
        </>
    );
}

export default Flows;
