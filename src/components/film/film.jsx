import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import Image from 'react-image-file';
import { selectFilm } from '../../actions/index';
import { push } from 'react-router-redux'
import store from '../../store/index';
import './film.css'

const mapStateToProps = state => {
    return {        
        selectedFilm: state.rootReducer.selectedFilm
    };
};

const mapDispatchToProps = {
    selectFilm,
};

class ConnectedFilm extends Component {
    constructor(props) {
        super(props)

        this.selectFilm = this.selectFilm.bind(this);
    }

    selectFilm(event) {
        this.props.selectFilm(this.props.film);
        store.dispatch(push(`/edit/${this.props.film.id}`));
    }

    render() {
        return(
            <Row onClick={this.selectFilm}>
                <Col lg={3} md={3}>
                    {this.props.film.image ? <Image file={this.props.film.image} height="268px" />
                        : <img src={require('../../images/no-image.jpeg')} alt="" />
                    }
                </Col>
                <Col sm={4} md={4} lg={6}>
                    <div>                    
                        <h2>{this.props.film.name}</h2>
                        
                        <p><b>Rating: </b>{this.props.film.rating}</p>
                        <p><b>Description: </b><i>{this.props.film.description}</i></p>
                    </div>        
                </Col>
            </Row>
        )
    }
}

const Film = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilm);

export default Film;