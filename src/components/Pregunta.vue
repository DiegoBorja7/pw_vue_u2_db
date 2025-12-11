<template>
    <div>
        <img src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif" alt="Yes Image">
        <br>
        <div class="pregunta-container">
            <input type="text" placeholder="Escribe tu pregunta aquí..." />
            <p>Recuerda terminar con el signo de interrogacion (?) </p>
            <h2>Seré millonario?</h2>
            <h1>Yes</h1>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Pregunta',
}

</script>

<style>
    img {
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }

    .pregunta-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        padding: 2rem;
        border-radius: 25px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        min-width: 300px;
        max-width: 500px;
    }

    input {
        width: 90%;
        padding: 0.5rem;    
        border-radius: 10px;
        border: none;
        margin-bottom: 1rem;
        font-size: 1rem;
    }

    input:focus {
        outline: none;
        box-shadow: 0 0 25px rgb(202, 76, 54);
    }

    h1 {
        font-size: 3rem;
        margin: 0.5rem 0;
    }

    h2 {
        margin-top: 70px;
    }

</style>