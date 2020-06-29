import React, { Component } from 'react'
import axios from 'axios'
import Aux from '../hoc/Auxiliar'
import Modal from '../components/UI/Modal/Modal'
import Button from '../components/UI/Button/Button'
import PokeBall from '../components/UI/PokeballLoader/PokeBall'
import './PokemonCard.css'


class PokemonCard extends Component {
    state = {
        pokemonInfo: null,
        loading: false,
        show: false
    }

    componentDidMount() {
        this.getPokemonData()
    }

    async getPokemonData() {
        if (this.props.pokemon.url) {
            this.setState({ loading: true })
            axios.get(this.props.pokemon.url)
                .then(response => response.data)
                .then(data => {
                    if (data) {
                        this.setState({ pokemonInfo: data, loading: false })
                    }
                    else {
                        console.log('error')
                        this.setState({ loading: false })
                    }

                })
                .catch(error => {
                    this.setState({ loading: false })
                    console.log(error)
                })
        }
    }

    modalHandler = () => {
        const show = this.state.show
        this.setState({ show: !show });
    }

    render() {
        const { pokemonInfo, show } = this.state
        let sprite = null, modal = null, item = null

        if (pokemonInfo) {
            sprite =
                <img
                    src={pokemonInfo.sprites.front_default}
                    alt={pokemonInfo.name}
                    onLoad={() => this.setState({ loaded: true })}>
                </img>

            modal =
                <Modal
                    show={show}
                    modalClosed={this.modalHandler}
                    thumbs={pokemonInfo.sprites}
                    abilities={pokemonInfo.abilities}
                    stats={pokemonInfo.stats}
                    types={pokemonInfo.types}>
                    {pokemonInfo.name}
                </Modal>
        }

        if (this.state.loading)
            item = <PokeBall></PokeBall>

        else
            item =
                <div className="Item">
                    <div className="Sprite">{sprite}</div>
                    <div className="Info">
                        <div>{this.props.pokemon.name}</div>
                        <div>
                            <Button clicked={this.modalHandler} btnType="Success">Ver más</Button>
                        </div>
                    </div>
                </div>

        return (
            <Aux>
                <div className="col-sm-6 col-12">
                    {item}
                </div>
                {modal}
            </Aux>
        )
    }
}

export default PokemonCard