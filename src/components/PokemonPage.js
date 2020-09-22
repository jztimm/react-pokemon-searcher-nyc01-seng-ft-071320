import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: '',
    name: '',
    hp: 0,
    frontUrl: '',
    backUrl: ''
  }

  componentDidMount() {
    fetch('http://localhost:4000/pokemon')
    .then(res => res.json())
    .then(pokemonData => {
      this.setState(()=>({pokemon: pokemonData}))
    })
  }

  changeHandler = (event) => {
    event.persist()
    this.setState(() => ({
      [event.target.name]: event.target.value
    }))
  }

  filterSearch = (data) => {
    if (this.state.search === '') {
      return data
    } else {
      return data.filter(el => el.name.startsWith(this.state.search))
    }
  }

  submitHandler = (event) => {
    const {pokemon, name, hp, backUrl, frontUrl} = this.state
    event.persist()
    event.preventDefault()
    let options = {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    }
    fetch('http://localhost:4000/pokemon', options)
    .then(res => res.json())
    .then(newPoke => {
      this.setState(()=> ({
        pokemon: [newPoke, ...pokemon]
      }))
    })
  }


  render() {
    const {pokemon, search, name, hp, frontUrl, backUrl} = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm name={name} hp={hp} front={frontUrl} back={backUrl} change={this.changeHandler} submit={this.submitHandler}/>
        <br />
        <Search changeHandler={this.changeHandler} search={search}/>
        <br />
        <PokemonCollection pokemon={this.filterSearch(pokemon)}/>
      </Container>
    )
  }
}

export default PokemonPage
