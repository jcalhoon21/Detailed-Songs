import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => { //maps through an array of our song objects
            return (
                <div className='item' key={ song.title }>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)} >
                                SELECT
                        </button>
                    </div>
                    <div className='content'>
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

// could be called anything it wants, by conevention its mapStateToProps
// state contains all of the data inside the redux store
const mapStateToProps = (state) => {
    return { 
        songs: state.songs   // acts as props in the songlist component
    }; 
};

export default connect(
        mapStateToProps, 
        { selectSong }  // ES6 syntax shortened selectSong from identifying a key `selectSong: selectSong`
                        // have to pass an action creator through the connect() so the dispatch knows
)(SongList); 

//always going to have mapstatetoprops, that takes in state
//always going to return in mapstatetoprops what will be considered props in the component
//always going to have connect() with the current component (songlist)
