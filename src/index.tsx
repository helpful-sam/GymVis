import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/searchbar.css';
import './css/model.css';
import './css/activeExercise.css';
import './css/exerciseCards.css';
import './css/menubar.css';
import './css/radio.css';
import Menubar from './components/Menubar';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import SingleExercise from './pages/SingleExercise';
import MultExercise from './pages/MultExercise';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <>
            <Menubar />
        </>

        <Routes>
            <Route path='/workout' element={<MultExercise />} />
            <Route path='/exercise' element={<SingleExercise />} />
        </Routes>
    </BrowserRouter>



);
