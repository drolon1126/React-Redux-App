import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '80%',
    margin: '10px auto',
    backgroundColor: 'lightgrey'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '200px',
    height: '240px',
    border: '2px solid black'
  },
}));


const Anime = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={props.anime.image_url}
        title={``}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p>{props.anime.type}</p>
          <h4>Title: {props.anime.title}</h4>
          <h5>{props.anime.episodes} episodes, Rated: {props.anime.rated}</h5>
          <h6>{props.anime.synopsis}</h6>
        </CardContent>
      </div>
    </Card>
  );
};

export default Anime;