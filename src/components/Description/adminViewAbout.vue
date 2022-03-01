<template>
    <div class="view">
        <div class="slot-section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Deserunt incidunt reiciendis maiores reprehenderit
                dolorem? Dolores architecto exercitationem impedit natus,
                minima earum maxime, ratione nihil eveniet iure magni dolore
                laborum aut.
            </p>
        </div>
        <div class="minimize">
            <button>
                <span class="fa fa-caret-up"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.view {
    position: relative;
    display: none;
    justify-content: center;
    align-items: center;
    margin: 8px;
    margin-top: 0%;
    padding: 10px;
    width: 98%;
    min-height: 150px;
    // border: 1px solid #000;
    background: linear-gradient(to right, #698191, #4d6180);
    box-shadow: 1px 2px 5px 2px #000;

    .minimize {
        position: absolute;
        bottom: 2px;
        left: 50%;
        // cursor: pointer;

        button {
            width: 32px;
            height: 26px;
            // background: #f91201;
            border: none;
            border-radius: 50%;
            color: #fff;
            background: linear-gradient(to right, #f91201, #038af8);
            cursor: pointer;
            transition: background 400ms ease-in-out;

            &:hover {
                background: linear-gradient(to right, #038af8, #f91201);
            }
        }
    }
}
.slot-section {
    width: 60%;
    color: #fff;

    p {
        font-family: 'Ubuntu' sans-serif;
        font-size: 18px;
    }
}

</style>