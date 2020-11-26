import React, {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokegame.css'


class Pokegame extends Component{
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }
  render(){
  let hand1 = [];
  let hand2 = [...this.props.pokemon]
  while(hand1.length < hand2.length){
    let randomIndex = Math.floor(Math.random() * hand2.length)
    let randomPokemon = hand2.splice(randomIndex,1)[0]
    hand1.push(randomPokemon)
  }
  let hand1Score = null;
  let hand2Score = null;
  hand1.map(x => hand1Score += x.base_experience)
  hand2.map(x => hand2Score += x.base_experience)
  var hand1Win = false;
  var hand2Win = false;
  if(hand1Score > hand2Score){
    hand1Win = true
  } else {
    hand2Win = true
  }
    return(

      <div className='Pokegame'>
        <div className='Pokegame-hand1'>
          {hand1Win ? <h1 className='Pokegame-winner'>You Win</h1> : <h1 className='Pokegame-loser'>You Lose</h1>}
          <h3>{hand1Score}</h3>
          {hand1.map(x => 
            <Pokecard
              key={x.id + 1}
              id={x.id}
              name={x.name}
              type={x.type}
              base_experience={x.base_experience}
            />
          )}
        </div>
        <div className='Pokegame-hand2'>
            {hand2Win ? <h1 className='Pokegame-winner'>You Win</h1> : <h1 className='Pokegame-loser'>You Lose</h1>}
            <h3>{hand2Score}</h3>
            {hand2.map(x => 
              <Pokecard 
                key={x.id + 1}
                id={x.id}
                name={x.name}
                type={x.type}
                base_experience={x.base_experience}
              />
            )}
        </div>

      </div>
    )
  }
}

export default Pokegame;