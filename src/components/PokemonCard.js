import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clicked=() => {
    this.setState(prevState => ({ clicked: !prevState.clicked}))
  }

  render() {
    const {pokemon} = this.props
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? pokemon.sprites.back : pokemon.sprites.front} onClick={this.clicked}/> 
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
