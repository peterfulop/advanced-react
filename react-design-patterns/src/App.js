import './App.css';
import LargeAuthorListItems from './components/authors/LargeAuthorListItems';
import SmallAuthorListItems from './components/authors/SmallAuthorListItems';
import LargeBookListItems from './components/books/LargeBookListItems';
import SmallBookListItems from './components/books/SmallBookListItems';
import LeftSideComp from './components/layout/LeftSideComp';
import RightSideComp from './components/layout/RightSideComp';
import NumberedList from './components/lists/NumberedList';
import RegularList from './components/lists/RegularList';
import SplitScreen from './components/split-screen';
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
                    <RegularList
                        items={authors}
                        parameterKey={PARAM_KEY.AUTHOR}
                        ItemComponent={LargeAuthorListItems}
                    />
                    <RegularList
                        items={books}
                        parameterKey={PARAM_KEY.BOOK}
                        ItemComponent={LargeBookListItems}
                    />
                </RightSideComp>
            </SplitScreen>
        </>
    );
}

export default App;
