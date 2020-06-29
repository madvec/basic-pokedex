import React, { Component } from 'react'
import Aux from '../hoc/Auxiliar'
import PokemonCard from './PokemonCard'
import Loader from '../components/UI/Loader/Loader'
import axios from 'axios'
import './PokemonViews.css'

class PokemonViews extends Component {
    state = {
        data: null,
        loading: false,
        nextUrl: null,
        prevUrl: null,
        limit: 20,
        offset: 0
    }

    componentDidMount() {
        let url = 'http://pokeapi.co/api/v2/pokemon/?limit=6&offset=0';
        this.getPokemon(url);
    }

    nextHandler = () => {
        if (this.state.nextUrl) {
            this.getPokemon(this.state.nextUrl)
        }
    }

    prevHandler = () => {
        if (this.state.prevUrl) {
            this.getPokemon(this.state.prevUrl)
        }
    }

    async getPokemon(url) {
        if (url) {
            this.setState({ loading: true })
            axios.get(url)
                .then(response => response.data)
                .then(data => {
                    if (data)
                        this.setState({
                            data: data,
                            nextUrl: data.next,
                            prevUrl: data.previous,
                            loading: false
                        })
                    else {
                        this.setState({ loading: false })
                        console.log('error')
                    }

                })
                .catch(error => {
                    this.setState({ loading: false })
                    console.log(error)
                })
        }
    }

    render() {
        const { data, loading } = this.state;
        let card = null
        if (loading)
            return <Loader />

        if (data) {
            if (!loading)
                card = data.results.map((pokemon, index) => {
                    return <PokemonCard pokemon={pokemon} key={index} loading={loading} />
                })

        }

        return (
            <Aux>
                <div className='row Main-wrapper'>{card}</div>
                <div className='row Controls'>
                    <button disabled={!this.state.prevUrl} onClick={this.prevHandler}>Previous</button>
                    <button disabled={loading} onClick={this.nextHandler}>Next</button>
                </div>
            </Aux>
        )
    }
}

export default PokemonViews