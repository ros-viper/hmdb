import React, { Component } from 'react';
import { connect } from "react-redux";
import Film from '../film/film';
import { selectFilm } from '../../actions/index';
import store from '../../store/index';

const mapStateToProps = state => {
    return {
        selectedFilm: state.rootReducer.selectedFilm,
        films: state.rootReducer.films
    };
};

const mapDispatchToProps = {
    selectFilm,
};

class ConnectedForm extends Component {
    constructor(props) {
        super(props)
        
    }

    componentWillMount(){
        let film = this.props.selectedFilm;
        if (this.props.selectedFilm === null) {
            film = this.props.films.find(film => film.id === parseInt(this.props.params.id));
            this.props.selectFilm(film);            
        }
        this.setState({
            selectedFilm: film
        });
    }
    
    render() {
        return(
            <Film film={this.state.selectedFilm} />
        )
    }

};

const editForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default editForm;