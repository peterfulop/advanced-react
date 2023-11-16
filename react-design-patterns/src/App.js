import './App.css';
import Modal from './components/Modal';
import SmallAuthorListItems from './components/authors/SmallAuthorListItems';
import SmallBookListItems from './components/books/SmallBookListItems';
import LeftSideComp from './components/layout/LeftSideComp';
import RightSideComp from './components/layout/RightSideComp';
import NumberedList from './components/lists/NumberedList';
import RegularList from './components/lists/RegularList';
import SplitScreen from './components/split-screen';
import { PARAM_KEY } from './constants';
import { authors } from './data/authors';
import { books } from './data/books';
import DataSource from './components/loaders/DataSource';
import axios from 'axios';
import DataSourceRenderPattern from './components/loaders/DataSourceRenderPattern';
import { UserInfo } from './components/user-info';
import { BookInfo } from './components/book-info';
import ResourceLoader from './components/loaders/ResourceLoader';

const getData = async (url) => {
    const response = await axios.get(url);
    return response;
};

const getDataFromLocalStorage = (key) => {
    return { data: localStorage.getItem(key) };
};

const Message = ({ msg }) => <h1>{msg}</h1>;

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
                        <ResourceLoader resourceUrl={'/books/2'} paramKey={PARAM_KEY.BOOK}>
                            <BookInfo />
                        </ResourceLoader>
                        <DataSource getData={() => getData('/users/2')} paramKey={PARAM_KEY.USER}>
                            <UserInfo />
                        </DataSource>
                        <DataSource
                            getData={() => getDataFromLocalStorage('test')}
                            paramKey={PARAM_KEY.MSG}
                        >
                            <Message />
                        </DataSource>
                        <DataSourceRenderPattern
                            getData={() => getData('/users/2')}
                            render={(resource) => <UserInfo user={resource} />}
                        />
                    </Modal>
                </RightSideComp>
            </SplitScreen>
        </>
    );
}

export default App;
