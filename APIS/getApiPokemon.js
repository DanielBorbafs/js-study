async function buscaPokemon(params) {
  pokemon = 'ditto';
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const response = await fetch(urlPokemon);
    if (!response.ok) {
      throw new Error('Erro na requisição' + response.status);
    }
    const data = await response.json();

    const infosPokemon = {
      nome: data.name,
      img: data.sprites.front_default,
    };

    console.log(infosPokemon);
  } catch (error) {
    console.error('Erro ao buscar o Pokemao', error);
  }
}

buscaPokemon();
