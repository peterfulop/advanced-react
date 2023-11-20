import { ForwardingRefs } from './components/forwarding-refs';
import { Portal } from './components/portal';
import ReactKeys from './components/react-keys';

const AdvancedHooks = () => {
    return (
        <>
            <Portal />
            <ForwardingRefs />
            <h2>Title</h2>
            <ReactKeys />
        </>
    );
};

export default AdvancedHooks;
