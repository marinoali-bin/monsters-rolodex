import React, { Component } from "react"
import CardList from "./components/card-list/card-list.component"
import "./App.css"
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(rep => rep.json())
      .then(users => this.setState({ monsters: users }))
      .then(monsters => console.log(this.state.monsters))
  }

  handleChange = e => {
    const txt = e.target.value
    this.setState({ searchField: txt })
  }

  render() {
    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>-Monsters Rolodex-</h1>

        <SearchBox handleChange={this.handleChange} placeholder="Seach" />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
