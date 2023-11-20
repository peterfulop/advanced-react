import { ErrorBoudry } from './sections/02-advanced-hooks/components/error-boundry';
import { ForwardingRefs } from './sections/02-advanced-hooks/components/forwarding-refs';
import { Portal } from './sections/02-advanced-hooks/components/portal';

const Test = () => {
    throw new Error('hello from error');
    // return <h2>test</h2>;
};

function App() {
    return (
        <>
            <Portal />
            <ForwardingRefs />
            <h2>Title</h2>
            <ErrorBoudry fallback={<p>Error at child level!</p>}>
                <Test />
            </ErrorBoudry>
        </>
    );
}

export default App;
