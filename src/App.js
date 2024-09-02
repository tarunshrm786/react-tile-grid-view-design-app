import React, { useState, useEffect } from 'react';
import GridView from './components/GridView/GridView';
import TileView from './components/TileView/TileView';
import DetailView from './components/DetailView/DetailView';
import Header from './components/Header/Header';
import './App.css';
import { fetchData } from './services/apiService';

function App() {
    const [students, setStudents] = useState([]);
    const [view, setView] = useState('grid');
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            const data = await fetchData();
            setStudents(data);
        };
        fetchStudents();
    }, []);

    const handleTileClick = (student) => {
        setSelectedStudent(student);
        setView('detail');
    };

    const handleBack = () => {
        setView('tile');
    };

    return (
        <div className="app">
            <header>
                {/* <HorizontalMenu />
                <HamburgerMenu /> */}
                <Header />
            </header>
            <main>
                {view === 'grid' && <GridView students={students} />}
                {view === 'tile' && <TileView students={students} onTileClick={handleTileClick} />}
                {view === 'detail' && <DetailView student={selectedStudent} onBack={handleBack} />}
            </main>
            <footer>
                <button onClick={() => setView('grid')}>Grid View</button>
                <button onClick={() => setView('tile')}>Tile View</button>
            </footer>
        </div>
    );
}

export default App;
