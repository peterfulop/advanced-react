import './App.css';
import CurrentUserLoader from './components/CurrentUserLoader';
import Modal from './components/Modal';
import SmallAuthorListItems from './components/authors/SmallAuthorListItems';
import SmallBookListItems from './components/books/SmallBookListItems';
import LeftSideComp from './components/layout/LeftSideComp';
import RightSideComp from './components/layout/RightSideComp';
import NumberedList from './components/lists/NumberedList';
import RegularList from './components/lists/RegularList';
import SplitScreen from './components/split-screen';
import { UserInfo } from './components/user-info';
import { PARAM_KEY } from './constants';
import { authors } from './data/authors';
import { books } from './data/books';

function App() {
    return (
        <>
            <SplitScreen leftWidth={2} rightWidth={3}>
                <LeftSideComp title="Left">
                    <RegularList
                        items={authors}
                        parameterKey={PARAM_KEY.AUTHOR}
                        ItemComponent={SmallAuthorListItems}
                    />
                    <NumberedList
                        items={books}
                        parameterKey={PARAM_KEY.BOOK}
                        ItemComponent={SmallBookListItems}
                    />
                </LeftSideComp>
                <RightSideComp title="Right">
                    <Modal>
                        <CurrentUserLoader>
                            <UserInfo />
                        </CurrentUserLoader>
                    </Modal>
                </RightSideComp>
            </SplitScreen>
        </>
    );
}

export default App;
