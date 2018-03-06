import React from 'react';
import { connect } from "react-redux";
import Film from '../film/film';


const mapStateToProps = state => {
    return { 
        films: state.rootReducer.films
    };
};

const ConnectedList = ({films}) => (
    films.map(film => (
        <Film film={film} key={film.id} />
    ))
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;

