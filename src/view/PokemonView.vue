<template>
    <div class="pokemon-view">
        <PokemonImagen :PokemonId="26" />
        <PokemonOpciones />
    </div>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';

export default {
    name: 'PokemonView',
    components: {
        PokemonImagen,
        PokemonOpciones
    }
}
</script>

<style>
.pokemon-view {
    width: min(860px, 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 3rem clamp(1.5rem, 4vw, 3.5rem);
    border-radius: 32px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(253, 230, 138, 0.8));
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.2);
}

@media (max-width: 640px) {
    .pokemon-view {
        padding: 2rem 1.25rem;
    }
}
</style>