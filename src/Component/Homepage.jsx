import React from 'react'
import Albums from './Albums';
import { Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            isFetching: true
        };
    }

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
            }
        }

        const loadArtist = async (artist) => {
            const artistRawData = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, options)
            const artistaData = await artistRawData.json()
            this.setState(
                { playlists: this.state.playlists.concat([artistaData.data.slice(0, 4)]) }
            )        
        }

        Promise.all([
            loadArtist("Eminem"),
            loadArtist("Metallica"),
            loadArtist("Madonna"),
            loadArtist("Behemoth"),
            this.setState({
                isFetching: false
            })
        ])
    }

    render() {

        return (
            <>
            {this.state.isFetching 
            ? 
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            :
            this.state.playlists.map(playlist => playlist.map(song => 
            <Link>
                <Albums music={song} />
            </Link>
            ))}
            </>
        )
    }
}

export default Homepage;
