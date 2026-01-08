<template>
    <div class="pokemon-opciones">
        <h1>Opciones</h1>
        <ul>
            <li>Pikachu</li>
            <li>Bulbasaur</li>
            <li>Charmander</li>
            <li>Squirtle</li>
        </ul>
    </div>
</template>
<script>
import ConsumirAPIPokemon from '../clients/PokemonClient.js';

export default {
    name: 'PokemonOpciones',
    data() {
        return {
            opciones: []
        }
    },
    async created() {
        this.opciones = await ConsumirAPIPokemon();
    }
}
</script>
<style>
.pokemon-opciones {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: 1rem;
    max-width: 320px;
    width: min(320px, 100%);
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
    margin: 0 auto;
    align-self: center;
}

.pokemon-opciones ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.pokemon-opciones li {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    transition: background-color 0.3s, transform 0.3s;
    width: 100%;
}

.pokemon-opciones li:hover {
    background-color: #fef3c7;
    transform: translateY(-2px);
}
</style>