export type PokemonData = {
  sprites: {
    front_default : string
  }
  name: string
  id: string
  types: {
      slot: number
      type: {
       name : string
       url : string
    }
  } []
}
