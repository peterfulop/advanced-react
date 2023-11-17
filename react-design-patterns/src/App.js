import { useState } from 'react';
import './App.css';
import ControlledModal from './components/modals/controlled-modal';

function App() {
    const [shouldDislay, setShouldDisplay] = useState(false);

    return (
        <>
            <ControlledModal shouldDisplay={shouldDislay} onClose={() => setShouldDisplay(false)}>
                <h4>Body of the modal</h4>
            </ControlledModal>
            <button onClick={() => setShouldDisplay(!shouldDislay)}>
                {shouldDislay ? 'Hide Modal' : 'Show Modal'}
            </button>
        </>
    );
}

export default App;
