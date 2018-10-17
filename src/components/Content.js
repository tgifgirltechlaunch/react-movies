import React from "react";
import MovieCard from "./MovieCard";


const styles = {
    contentContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '5px 5px 25px 5px',
        padding: '10px'
    },
    movieContainer:{
        display: 'flex',
        flexDirection: 'row',
    },
    movieItem:{
        display: 'flex',
        minWidth: '400px',
        flexWrap: 'wrap'
    },
    movie:{
        maxWidth: '460px',
    }
};

export default class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
    }

    
    componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1725933f8cee44c2d3c3e6ca6c5a608f&include_adult=false&language=en-US&page=1'
        
        fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(data => {
            let movies = data.results.map((film) => {
               return(
                   
                    <div style={styles.movie} key={film.results}>
                       <MovieCard
                            title={film.title}
                            image={film.poster_path}
                        />
                    </div>
               )
            })
            this.setState({movies: movies});
        })
    }

    render() {
        return(
          <div style={styles.contentContainer}>
              <div style={styles.movieContainer}>
                <div style={styles.movieItem}>{this.state.movies}</div>
              </div>
          </div>
        )
    }
}
