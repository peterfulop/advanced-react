import './App.css';
import { GreenSmallButton } from './components/composition';
import { RedButton, SmallRedButton } from './components/partial';
import { RecursiceComponent } from './components/recursive';

const myNestedObject = {
    key1: 'value',
    key2: {
        innerKey1: 'innerValue1',
        innerKey2: {
            innerInnerKey1: 'innernInnerValue1',
            innerInnerKey2: 'innernInnerValue2',
        },
    },
    key3: 'value3',
};

function App() {
    return (
        <>
            <RecursiceComponent data={myNestedObject} />
            <GreenSmallButton text="greeen button" />
            <RedButton text="red button" />
            <SmallRedButton text="small red button" />
        </>
    );
}

export default App;
