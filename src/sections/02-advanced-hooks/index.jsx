import { CallbackAsRef } from './components/use-callback-as-ref';
import UseId from './components/use-id';
import ImperativeHandle from './components/use-imperative-handle';
import LayoutEffect from './components/use-layout-effect';

const AdvancedHooks = () => {
    return (
        <>
            {/* <Portal />
            <ForwardingRefs />
            <h2>Title</h2>
            <ReactKeys /> */}
            <LayoutEffect />
            <br />
            <br />
            <UseId />
            <br />
            <br />
            <UseId />
            <br />
            <br />
            <CallbackAsRef />
            <br />
            <br />
            <ImperativeHandle />
        </>
    );
};

export default AdvancedHooks;
