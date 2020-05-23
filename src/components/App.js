import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID Xv4nJrkyQrU37lfMBS8rUIraNsUD15CLRe0x9jjswxo'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit2={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;