import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData, pageChange } from '../actions/actions';

import Anime from './anime';

const AnimeList = props => {
  const [pageValue, setPageValue] = useState(1);
  useEffect(()=>{
    props.getData(props.pageNo);
  },[props.pageNo]);

  return (
    <>
      <h1>Animu!</h1>
      <button onClick={
        (e)=>{
            e.preventDefault();
            props.pageChange('decrement');
          }
        }>{'<'}</button>
      <span>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
        ) : (
          `Page Number: ${props.pageNo}`
        )}
      </span>
      <button onClick={(e)=>{e.preventDefault(); props.pageChange('increment');}}>{'>'}</button>
      <div>
        <form onSubmit={e=>{
          e.preventDefault();
          props.pageChange('jump',pageValue);
        }}>
          <button>Jump to page:</button>
          <input 
            type='number'
            value={pageValue}
            name='pageValue'
            onChange={e=>{
              let tmp = e.target.value < 1 ? 1 : e.target.value;
              setPageValue(tmp);
            }}
          />
        </form>
      </div>
      {props.animes &&
        props.animes.map(anime => <Anime key={anime.mal_id} anime={anime} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    animes: state.animes,
    pageNo: state.pageNo
  };
};
export default connect(
  mapStateToProps,
  { getData, pageChange }
)(AnimeList);