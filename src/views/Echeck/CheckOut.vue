<template>
    <div class="check-out" id="check-out-page">
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
                <transition name="changeitems" mode="out-in">
                    <div v-show="itemFound">
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
                                    <td><span><input type="number" ref="changeQuantity" name="" value="1" id=""></span></td>
                                    <td><span>1 Kg</span></td>
                                    <td><span>Ksh. 240</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="add-cart">
                            Add to Cart
                        </button>
                    </div>
                </transition>
            </div>
            <button v-show="dismissible" @click="dismiss()">Dismis</button>
            <button v-show="!dismissible" @click="renderr()">Render</button>
            <div class="list-request" v-show="dismissible">
                <transition name="poplist" mode="out-in">
                    <ListItems v-show="dismissible"/>
                </transition>
            </div>
        </div>
        <div class="right">
            <div class="receipt-list">
                <Receipt />
            </div>
            <div class="total-amount">
                <BuyOut />
            </div>
        </div>

    </div>
</template>

<script>
// import axios from 'axios'
import ListItems from "@/components/E_check/requestItems"
import Receipt from "@/components/E_check/Receipt"
import BuyOut from "@/components/E_check/BuyItems"
export default {
    components: {
        ListItems,
        Receipt,
        BuyOut,
    },
    data() {
        return {
            dismissible: true,
            itemFound: true,
        }
    },
    created() {
        document.addEventListener('keyup', (event) => {
            const keyName = event.key;

            if (keyName === '/') {
                this.$refs.changeQuantity.focus();
            }
        }, false);
    },
    methods: {
        dismiss() {
            this.dismissible = !this.dismissible;
            return
        },
        renderr() {
            this.dismissible = !this.dismissible;
            setTimeout(function () {
                let scrol = document.getElementById("leftscroll");
                scrol.scrollTop = 250;
            }, 10);
            return
        },
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
        height 0.4s ease-in-out;
}
.poplist-enter-from, .poplist-leave-to {
    opacity: 0;
    height: 0px;
}
.changeitems-enter-active, .changeitems-leave-active {
    transition: opacity 0.3s ease-out,
        height 0.4s ease-in-out;
}
.changeitems-enter-from, .changeitems-leave-to {
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
    overflow-y: auto;

    .left-top {
        width: 100%;
        height: 150px;
        border-bottom: 1px solid #000;
    }
    .form-check {
        position: relative;
        margin-top: 10px;
        margin-bottom: 15px;
        padding: 4px 4px;
        width: 98%;
        min-height: 80px;
        max-height: 180px;
        box-shadow: 0px 0px 4px #000;

        .add-cart {
            position: absolute;
            right: 15px;
            bottom: 8px;
            padding: 0 5px;
            height: 50px;
            font-weight: 800;
            background: #448eee;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background 300ms ease,
                transform 250ms ease;
            &:hover {
                background: #0a52af;
                transform: scale3d(1.1, 1.05, 1.1);
            }
        }

        form {
            position: relative;
            display: inline-block;
            margin: 4px;
            width: 100%;
            input[type='text'] {
                padding: 0 8px;
                width: 76%;
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
        margin: 15px 0px 4px 5px;
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
                    padding: 0 8px;
                    font-weight: 600;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    input {
                        text-align: center;
                        height: 42px;
                        width: 100px;
                        border: none;
                        border-bottom: 2px solid #31cf31;
                        // border-radius: 8px;
                        border-top-right-radius: 4px;
                        border-top-left-radius: 4px;
                        outline: none;
                        font-weight: 700;
                        font-size: 20px;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background: transparent;
                        transition: border 250ms ease-in-out,
                            box-shadow 250ms ease-in-out;
                    }
                    &:hover {
                        input {
                            border-bottom: 2px solid #ed47f3;
                            box-shadow: 0 0 3px #000;
                        }
                    }
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
.list-request {
    position: relative;
    margin-bottom: 10px;
    height: 300px;
    width: 84%;
}
.right {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 40%;
    height: 92.9vh;
    padding: 8px;
    margin: 0;
    border-top-left-radius: 4px;
    overflow-y: auto;
    box-shadow: 0px 2px 8px -2px #000;

    .receipt-list {
        width: 90%;
        min-height: 400px;
        max-height: 500px;
        border-radius: 4px;
        background: #abc;
    }
    .total-amount {
        width: 100%;
        height: 80px;
        background: #abc;
    }
}
</style>