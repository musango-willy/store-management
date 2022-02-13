<template>
    <div class="check-out">
        <div class="left" id="leftscroll">
            <div class="left-top">
                <h6>Hey You</h6>
            </div>
            <div class="form-check">
                <form action="" @submit.prevent="" class="items-form">
                    <input
                        type="text" name="" autocomplete="off"
                        autocorrect="off" id="request-item"
                        placeholder="Search and Enter items ..."
                    >
                    <button type="submit">
                        <span class="fa fa-search"></span>
                    </button>
                </form>
                <table class="item-change">
                    <thead>
                        <tr>
                            <th><span>Item</span></th>
                            <th><span>Quantity</span></th>
                            <th><span>Category</span></th>
                            <th><span>Total</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Mumias Sugar</span></td>
                            <td><span>2</span></td>
                            <td><span>1 Kg</span></td>
                            <td><span>Ksh. 240</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button v-show="dismissible" @click="dismiss()">Dismis</button>
            <button v-show="!dismissible" @click="renderr()">Render</button>
            <transition name="poplist" mode="out-in">
                <ListItems v-show="dismissible"/>
            </transition>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus officiis tempore vero quaerat repudiandae aspernatur! Maxime necessitatibus cupiditate tempora, dolores quibusdam sed distinctio, dolorum debitis, modi ea enim sequi.</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus officiis tempore vero quaerat repudiandae aspernatur! Maxime necessitatibus cupiditate tempora, dolores quibusdam sed distinctio, dolorum debitis, modi ea enim sequi.</h1>
            
        </div>
        <div class="right">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia velit explicabo eius, placeat commodi expedita! Autem rerum, saepe voluptates delectus recusandae sunt aperiam culpa corporis nostrum eaque. Accusamus, perferendis quo.</h2>
        </div>

    </div>
</template>

<script>
import ListItems from "@/components/E_check/requestItems"
export default {
    components: {
        ListItems,
    },
    data() {
        return {
            dismissible: false,
        }
    },
    methods: {
        dismiss() {
            let scrol = document.getElementById("leftscroll");
            let pos = scrol.scrollTop;
            console.log(pos);
            this.dismissible = !this.dismissible;
            scrol.scrollTop = 10;
            return
        },
        renderr() {
            this.dismissible = !this.dismissible;
            setTimeout(function () {
                let scrol = document.getElementById("leftscroll");
                let pos = scrol.scrollTop;
                console.log(pos);
                scrol.scrollTop = 200;
            }, 10);
            // clearInterval(scrollInt);
            return
        }
    },

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
.poplist-enter-active, .poplist-leave-active {
    transition: opacity 0.3s ease-out,
        height 0.2s ease-in-out;
}
.poplist-enter-from, .poplist-leave-to {
    opacity: 0;
    height: 0px;
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
    scroll-snap-type: mandatory;
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
        width: 98%;
        min-height: 80px;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        box-shadow: 0px 0px 6px #000;

        form {
            position: relative;
            display: inline-block;
            margin: 4px;
            width: 100%;
            input[type='text'] {
                padding: 0 8px;
                width: 70%;
                height: 60px;
                font-size: 26px;
                font-weight: 600;
                font-family: 'Brush Script MT', sans-serif;
                border-radius: 4px 0 0 4px;
                border: 1px solid #000;
                border-right: none;
                outline: none;
                transition: border 0.25s ease-in-out,
                    background 0.25s ease-in-out;
                background: #d7f3d7;
                color: #060d4e;
                &:hover {
                    border: 1px solid #31cf31;
                    border-right: none;
                    background: #dcdfdc;
                }
            }
            button[type='submit'] {
                position: absolute;
                padding: 6px;
                height: 60px;
                border-radius: 0 4px 4px 0;
                border: 1px solid #000;
                border-left: none;
                background: #888;
                outline: none;
                cursor: pointer;
                transition: border 0.25s ease-in-out,
                    background 250ms ease-in-out;
                span {
                    transition: transform 250ms ease-in-out;
                }
                &:hover {
                    background: #36ec7c;
                    border: 1px solid #3b8055;
                    border-left: none;
                    span {
                        transform: scale(1.4);
                    }
                }
            }
        }
    }
    .item-change {
        // display: none;
        margin: 25px 0 15px 20px;
        width: 80%;
        min-height: 50%;
        border-radius: 4px;
        box-shadow: 0 0 5px #000;
        border-collapse: collapse;
        thead {
            margin-top: 4px;
            background: #3b8055;
            color: #b6c721;
            text-align: left;
            height: 30px;
            span {
                padding: 0 8px;
                font-weight: 1000;
                font-size: 16px;
                letter-spacing: 1px;
            }
        }
        tbody {
            background: #919192;
            td {
                height: 45px;
                span {
                    padding: 0 10px;
                    font-weight: 600;
                }
                &:nth-of-type(2), &:nth-of-type(3),
                &:nth-of-type(4) {
                    width: 20%;
                    border: 1px solid #000;
                    border-bottom: none;
                    border-top: none;
                    span {
                        display: flex;
                        justify-content: center;
                    }
                }
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