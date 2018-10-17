import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import VotesIcon from '@material-ui/icons/Star';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  badge: {
    background: '#0099cc',
  },
  card: {
    maxWidth: 400,
    minHeight: '560px',
    margin: '35px',
  },
  cardheader: {
    paddingLeft: '13px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#0099cc',
    width: 80,
    height: 80,
  },
  weblink: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'rgba(0, 0, 0, 0.54)'
  },
  titlestyle: {
    fontSize: '18px',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  yearstyle: {
    fontSize: '15px',
    lineHeight: '1',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  caststyle: {
    fontSize: '15px',
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  langstyle: {
    fontSize: '15px',
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  genrestyle: {
    fontSize: '15px',
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  rowheader: { fontSize: '24px', },
  rowcontent: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  rowcontentcast: {
    color: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'left'
  },
  plot: {
    minHeight: '160px',
  },
  votecolor: {
    color: '#ff9900',
    width: '30px'
  }
});


class MovieCard extends React.Component {


state = { 
      expanded: false,
      title: '',
      year: '',
      rated: '',
      genre: '',
      plot: '',
      language: '',
      poster: '',
      website: '',
      cast: '',
      votes: '',
      imdbID: ''
};


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  movieDetails = () => {
    
    var that = this;

    var url = 'http://www.omdbapi.com/?t=' + this.props.title + '&apikey=5fc0b4d0'
    
    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ title: data.Title, year: data.Year, plot: data.Plot, rated: data.Rated, language: data.Language, genre: data.Genre, poster: data.Poster, website: data.Website, cast: data.Actors, votes: data.imdbRating, imdbID: data.imdbID});
    });
}

  componentDidMount() {
    
     this.movieDetails();
     
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader className={classes.cardheader}
          avatar={
            <Avatar className={classes.avatar}>
              {this.state.rated}
            </Avatar>
          }
          action={
            <IconButton>
              <a className={classes.weblink} href={'https://www.imdb.com/title/' + this.state.imdbID}><LinkIcon /></a>
            </IconButton>
          }
          title={
            <span aria-label={this.state.title} className={classes.titlestyle}>
              {this.state.title}<p className={classes.yearstyle}>{this.state.year}</p>
            </span>}
        />
        <CardMedia
          className={classes.media}
          image={'https://image.tmdb.org/t/p/w500/'+this.props.image}
          genre={this.state.genre}
        />
        <CardContent>
          <div className={classes.plot} component="p">
            {this.state.plot}
          </div>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Votes">
             
             <Badge Badge classes={{badge: classes.badge}} color="secondary" badgeContent={this.state.votes} className={classes.votecolor}>
           
             <VotesIcon variant="contained"></VotesIcon>
            </Badge>

          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <p className={classes.rowheader} paragraph>Genre</p>
            <p className={classes.rowcontent}>{this.state.genre}</p>
            <p className={classes.rowheader} paragraph>Language</p>
            <p className={classes.rowcontent}>{this.state.language}</p>
            <p className={classes.rowheader} paragraph>Cast</p>
            <p className={classes.rowcontentcast}>{this.state.cast}</p>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MovieCard);

