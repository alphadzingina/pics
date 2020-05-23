import React from 'react';
import './SearchBar';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
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