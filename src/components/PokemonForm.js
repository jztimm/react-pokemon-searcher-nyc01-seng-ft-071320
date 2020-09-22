import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  render() {
    const {name, hp, backUrl, frontUrl, change, submit} = this.props
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={change}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={change}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={change}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={change}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
