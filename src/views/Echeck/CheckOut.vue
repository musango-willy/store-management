<template>
    <div class="check-out" id="check-out-page">
        <div class="left" id="leftscroll">
            <div class="left-top">
                <h6>Hey You</h6>
            </div>
            <div class="form-check">
                <form action="" @submit.prevent="getItems()" class="items-form">
                    <input
                        type="text" name="" autocomplete="off"
                        v-model="requestTag"
                        autocorrect="off" id="request-item"
                        placeholder="Search for items . . ."
                    >
                    <button type="submit">
                        <span class="fa fa-search"></span>
                    </button>
                </form>
                <transition name="changeitems" mode="out-in">
                    <div v-show="itemFound">
                        <transition name="popspinner" mode="out-in">
                            <table class="item-change" v-if="editSelected != []">
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
                                        <td><span>{{this.editSelected[0].name}}</span></td>
                                        <td><span><input type="number" ref="changeQuantity" v-model="quantity" name=""></span></td>
                                        <td><span>{{this.editSelected[0].quantity_category}}</span></td>
                                        <td><span>{{this.editSelected[0].price}}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </transition>
                        <button class="add-cart" v-show="priceESection" @click="addReceipt()">
                            Add to Cart
                        </button>
                    </div>
                </transition>
            </div>
            <button @click="open = true">Open Modal</button>
            <button v-show="dismissible" @click="dismiss()">Dismis</button>
            <button v-show="!dismissible" @click="renderr()">Render</button>
            <div
                class="list-request"
                v-show="dismissible"
                :class="{ loadingitems: loadingrequest }"
            >
                <transition name="poplist" mode="out-in">
                    <ListItems
                        :itemsFound="foundList"
                        :noItem="itemsNull"
                        v-show="dismissible"
                        @selectItem="chooseItem"
                    />
                </transition>
            </div>
        </div>
        <div class="right">
            <div class="receipt-list">
                <Receipt :listToBuy="receiptList" />
            </div>
            <div class="total-amount">
                <BuyOut />
            </div>
        </div>
        <transition name="popspinner" mode="out-in">
            <DualRing v-show="loadingspinner"/>
        </transition>
        <Teleport to="body">
            <div v-if="open" class="modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>
        </Teleport>
    </div>
</template>

<script>
import axios from 'axios'
import ListItems from "@/components/E_check/requestItems"
import Receipt from "@/components/E_check/Receipt"
import BuyOut from "@/components/E_check/BuyItems"
import DualRing from "@/components/Others/DualRing"
export default {
    components: {
        ListItems,
        Receipt,
        BuyOut,
        DualRing,
    },
    data() {
        return {
            open: null,
            dismissible: true,
            itemFound: true,
            requestTag: null,
            loading: false,
            requestFromApi: false,
            foundList: null,
            itemsNull: false, // toggle data for items component
            quantityEdit: true, // edit quantity and price toggle
            editSelected: [], // change price before adding receipt
            quantity: 1, // change selected item quantity
            receiptList: null, // items to be bought list

        }
    },
    created() {
        document.addEventListener('keyup', (event) => {
            const keyName = event.key;

            if (keyName === '/') {
                this.$refs.changeQuantity.focus();
            }
        }, false);
        this.editSelected.push({
            name: '',
            category: '',
            price: '',
            quantity_category: '',
            quantity: 1
        });
    },
    methods: {
        async getItems() {
            this.loading = !this.loading;
            this.requestFromApi = !this.requestFromApi;
            if (this.requestTag === "") {
                this.foundList = null;
                this.loading = !this.loading;
                this.requestFromApi = !this.requestFromApi;
                return;
            } else {
                try {
                    const res = await axios.get(`get_item/${ this.requestTag }`)
                    this.requestTag = "";
                    this.itemsNull = true;
                    this.foundList = res.data;
                } catch(e) {
                    console.error(e);
                }
                this.loading = !this.loading;
                this.requestFromApi = !this.requestFromApi;
                return;
            }
        },
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
        chooseItem(index) {
            const data = this.foundList[index]
            if(this.editSelected != []) {
                this.editSelected = [];
            }
            this.editSelected.push({
                name: data.name,
                category: data.category,
                price: data.price,
                quantity_category: data.quantity_category,
                quantity: 1
            });
            console.log(this.editSelected);
            return;
        },
        addReceipt() {
            this.editSelected[0].quantity = this.quantity;
            if (this.receiptList === null) {
                this.receiptList = [];
            }
            this.receiptList.push(this.editSelected[0]);
            console.log(this.receiptList);
        },
    },
    computed: {
        loadingrequest() {
            return this.requestFromApi;
        },
        loadingspinner() {
            return this.loading;
        },
        priceESection() {
            return this.quantityEdit
        }
    },

}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: .35em;
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
.popspinner-enter-active, .popspinner-leave-active {
    transition: opacity 0.3s ease-out;
}
.popspinner-enter-from, .popspinner-leave-to {
    opacity: 0;
}
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  height: 40%;
  margin-left: -150px;
  background: #fff;
}

.check-out {
    position: relative;
    display: flex;
    padding: 4px;
    height: 100vh;
    color: #000;
    font-size: 20px;
    overflow: auto;
    // background: #abc;
}
.left {
    scroll-snap-type: mandatory;
    padding: 8px;
    margin: 0 4px 0 0;
    width: 60%;
    height: 92.8vh;
    overflow-y: auto;
    background: #b8b8b9;

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
        transition: height 250ms ease-in-out;

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
.loadingitems {
    filter: blur(2px);
}
.list-request {
    position: relative;
    margin-bottom: 10px;
    height: 300px;
    width: 84%;
    transition: filter 200ms ease-in-out;
}
.right {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 40%;
    height: 92.9vh;
    padding: 8px;
    margin: 0 0 0 8px;
    border-top-left-radius: 4px;
    background: #b8b8b9;
    overflow-y: auto;
    // box-shadow: 0px 2px 8px -2px #000;

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