import { useState } from 'react';
import ControlledFlow from '../components/flows/controlled-flow';

const StepOne = ({ data, goNext, goPrev }) => {
    const [name, setName] = useState(data?.name || '');

    return (
        <>
            <h4>Enter your name #1</h4>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => goNext({ name })}>Next</button>
        </>
    );
};
const StepTwo = ({ data, goNext, goPrev }) => {
    const [age, setName] = useState(data?.age || '');

    return (
        <>
            <button onClick={() => goPrev({})}>Prev</button>
            <h4>Enter your age #2</h4>
            <input
                name="age"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => goNext({ age })}>Next</button>
        </>
    );
};
const StepThree = ({ data, goNext, goPrev }) => {
    const [country, setCountry] = useState(data?.country || '');

    return (
        <>
            <button onClick={() => goPrev({})}>Prev</button>
            <h4>Enter your country #3</h4>
            <input
                name="country"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <button onClick={() => goNext({ country })}>Next</button>
        </>
    );
};

const StepLast = ({ goPrev, onDone }) => {
    return (
        <>
            <button onClick={() => goPrev({})}>Prev</button>
            <h4>Submit</h4>
            <button onClick={onDone}>Submit</button>
        </>
    );
};

function Flows() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [data, setData] = useState({});

    const onNext = (dataFromStep) => {
        const updatedData = { ...data, ...dataFromStep };
        setData(updatedData);
        setCurrentStepIndex(currentStepIndex + 1);
    };

    const onPrev = () => {
        setCurrentStepIndex(currentStepIndex - 1);
    };

    const onDone = () => {
        console.log('DONE!', data);
    };
    return (
        <>
            <h2>ControlledFlow</h2>
            <ControlledFlow
                currentIndex={currentStepIndex}
                data={data}
                onNext={onNext}
                onPrev={onPrev}
                onDone={() => onDone()}
            >
                <StepOne />
                <StepTwo />
                {data?.age > 25 && <StepThree />}
                <StepLast onDone={onDone} />
            </ControlledFlow>
        </>
    );
}

export default Flows;
