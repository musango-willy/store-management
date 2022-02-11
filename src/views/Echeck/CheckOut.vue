<template>
    <div class="check-out">
        <div class="left">
            <div class="left-top">
                <h6>Hey You</h6>
            </div>
            <div class="form-check">
                <form action="" @submit.prevent="" class="items-form">
                    <input type="text" name="" id="request-item">
                    <button type="submit">
                        <span class="fa fa-search"></span>
                    </button>
                </form>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus officiis tempore vero quaerat repudiandae aspernatur! Maxime necessitatibus cupiditate tempora, dolores quibusdam sed distinctio, dolorum debitis, modi ea enim sequi.</h1>

        </div>
        <div class="right">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia velit explicabo eius, placeat commodi expedita! Autem rerum, saepe voluptates delectus recusandae sunt aperiam culpa corporis nostrum eaque. Accusamus, perferendis quo.</h2>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: .3em;
}
::-webkit-scrollbar-track {
    background: #888; 
}
::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #021191, #f31909); 
    border-radius: 5px;
}
.check-out {
    position: relative;
    display: flex;
    padding: 4px;
    height: 100vh;
    color: #000;
    font-size: 20px;
    overflow: auto;
}
.left {
    padding: 8px;
    width: 60%;
    height: 92.8vh;
    border-right: 1px solid #1d2e21;
    overflow-y: auto;

    .left-top {
        width: 100%;
        height: 200px;
        border-bottom: 1px solid #000;
    }
    .form-check {
        margin-top: 100px;
        margin-bottom: 15px;
        width: 100%;
        height: 200px;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        box-shadow: 0px 0px 6px #000;

        form {
            margin: 4px;
            width: 100%;
            input[type='text'] {
                padding: 0 8px;
                width: 60%;
                height: 50px;
                font-size: 26px;
                font-weight: 600;
                font-family: 'Poppins', sans-serif;
                border-radius: 4px;
                outline: none;
                color: #060d4e;
            }
        }
    }
}
.right {
    width: 40%;
    height: 92.5vh;
    padding: 8px;
    margin: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 6px;
    overflow-y: auto;
    // box-shadow: -1px -9px 12px 5px #000;
    box-shadow: 0px 0px 20px #000;
}
</style>