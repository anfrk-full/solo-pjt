import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tourist from './travel/component/pages/Tourist';
import Restaurant from './travel/component/pages/Restaurant';
import HomePage from './travel/component/pages/HomePage';
import BoardPage from './travel/component/pages/BoardPage';
import BoardViewPage from './travel/component/pages/BoardViewPage';
import BoardWritePage from './travel/component/pages/BoardWritePage';
import BoardEditPage from './travel/component/pages/BoardEditPage';
import DetailRestaurant from './travel/component/pages/DetailRestaurant';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { LoginProvider } from './travel/component/context/LoginContext';

function App() {
    return (
        <LoginProvider>
            <BrowserRouter>
                <Header />
                <br/>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/tourist' element={<Tourist/>}></Route>
                    <Route path='/restaurant/:id' element={<Restaurant/>}></Route>
                    <Route path='/board' element={<BoardPage/>}></Route>
                    <Route path='/board-view/:id' element={<BoardViewPage/>}></Route>
                    <Route path='/board-write' element={<BoardWritePage/>}></Route>
                    <Route path='/board-edit/:id' element={<BoardEditPage/>}></Route>
                    <Route path='/restaurant/view/:id' element={<DetailRestaurant/>}></Route>
                </Routes>
            </BrowserRouter>
        </LoginProvider>
    );
}

export default App;
