import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tourist from './weather/component/pages/Tourist';
import Restaurant from './weather/component/pages/Restaurant';
import HomePage from './weather/component/pages/HomePage';
import Header from './Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <br/>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/tourist' element={<Tourist/>}></Route>
                <Route path='/restaurant' element={<Restaurant/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
