import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tourist from './travel/component/pages/Tourist';
import Restaurant from './travel/component/pages/Restaurant';
import HomePage from './travel/component/pages/HomePage';
import BoardPage from './travel/component/pages/BoardPage';
import BoardViewPage from './travel/component/pages/BoardViewPage';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <br/>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/tourist' element={<Tourist/>}></Route>
                <Route path='/restaurant' element={<Restaurant/>}></Route>
                <Route path='/board' element={<BoardPage/>}></Route>
                <Route path='/board-view/:id' element={<BoardViewPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
