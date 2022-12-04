import SearchBar from './components/SearchBar.js';
import ImageList from './components/ImageList.js';
import searchImages from './api.js';
import { useState } from 'react';


function App() {
    const [images, setImages] = useState([]);

    const handleSumbit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSumbit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;