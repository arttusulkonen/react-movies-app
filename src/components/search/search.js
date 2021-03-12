import React, {Component} from 'react';export default class Search extends Component {    state = {        title: '',        type: 'all',    }    handleKey = (e) => {        if(e.key === 'Enter'){            this.props.search(this.state.title, this.state.type)        }    }    onLabelChange = (event) => {        this.setState({            title: event.target.value,        })    }    handleChange = (event) => {        this.setState(() => ({            [event.target.name]: event.target.value        }), () => {            this.props.search(this.state.title, this.state.type)        })    }    render() {        const {type} = this.state;        return (            <div className='row'>                <div className="input-field">                    <input                        placeholder='search'                        type="search"                        className="validate"                        value={this.state.search}                        onChange={this.onLabelChange}                        onKeyDown={this.handleKey}                    />                    <button className='btn search-btn' onClick={() => this.props.search(this.state.title, this.state.type)}>Search</button>                    <div className='radio-buttons'>                        <label>                            <input                                className="with-gap"                                name="type"                                type="radio"                                value='all'                                onChange={this.handleChange}                                checked={type === 'all'}                            />                            <span>All</span>                        </label>                        <label>                            <input                                className="with-gap"                                name="type"                                type="radio"                                value='movie'                                onChange={this.handleChange}                                checked={type === 'movie'}/>                            <span>Movie</span>                        </label>                        <label>                            <input                                className="with-gap"                                name="type"                                type="radio"                                value='series'                                onChange={this.handleChange}                                checked={type === 'series'}/>                            <span>Series</span>                        </label>                    </div>                </div>            </div>        )    }}