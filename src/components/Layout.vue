<template>
    <div class="layout">
        <div class="top-bar">
            <div class="left">
                <div class="logo">
                    <span class="fa fa-home"></span>
                </div>
                <div class="links">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </div>
            </div>
            <div class="right">
                <h6><span class="fa fa-cog"></span></h6>
                <h6>
                    <span class="fa fa-user">
                        <span class="fa fa-caret-down"></span>
                    </span>
                </h6>
            </div>
        </div>
        <div class="top-liner">

        </div>
        <div class="body-content">
            <div class="side-bar">
                <ul>
                    <li><span>Home</span></li>
                    <li>
                        <span @click="dropDownEcheck()">
                            E-check
                            <span v-show="!exactEcheckMenu" class="fa fa-caret-down"></span>
                            <span v-show="exactEcheckMenu" class="fa fa-caret-up"></span>
                        </span>
                        <transition name="drop" mode="out-in">
                            <ul v-show="exactEcheckMenu">
                                <li><router-link to="/checkout">Dashboard</router-link></li>
                                <li><router-link to="/about">Receipts</router-link></li>
                                <li><router-link to="/about">Total</router-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li>
                        <span @click="dropDownAdmin()">
                            <span class="fa fa-charts"></span>
                            Admin
                            <span v-show="!exactAdminMenu" class="fa fa-caret-down"></span>
                            <span v-show="exactAdminMenu" class="fa fa-caret-up"></span>
                        </span>
                        <transition name="drop" mode="out-in">
                            <ul v-show="exactAdminMenu">
                                <li><router-link to="/">Dashboard</router-link></li>
                                <li><router-link to="/about">Products</router-link></li>
                                <li><router-link to="/about">Inventories</router-link></li>
                            </ul>
                        </transition>
                    </li>
                </ul>
                <div class="side-footer">
                    <ul>
                        <li><span class="fa fa-facebook"></span></li>
                        <li><span class="fa fa-facebook"></span></li>
                        <li><span class="fa fa-facebook"></span></li>
                        <li><span class="fa fa-reddit"></span></li>
                    </ul>
                </div>
            </div>
            <div class="context-side">
                <router-view v-slot="{ Component }">
                    <transition name="routes" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Layout",
    data() {
        return {
            echeckMenu: true,
            adminMenu: true,
        }
    },
    created() {

    },
    methods: {
        dropDownEcheck() {
            this.echeckMenu = !this.echeckMenu
            return
        },
        dropDownAdmin() {
            this.adminMenu = !this.adminMenu
            return
        },
        
    },
    computed: {
        exactEcheckMenu() {
            return this.echeckMenu
        },
        exactAdminMenu() {
            return this.adminMenu
        },
    },

}
</script>

<style lang="scss" scoped>

.layout {
    position: relative;
    margin: 0;
    padding: 0%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to right, #94a6bb, #cbcbcc);
}
.routes-enter-from, .routes-leave-to {
    opacity: 0;
}
.routes-enter-active, .routes-leave-active {
    transition: opacity 0.5s ease-out;
}
.drop-enter-from, .drop-leave-to {
    opacity: 0;
}
.drop-enter-active {
    animation: bounce-in 0.2s;
    opacity: 0;
    transition: opacity 0.45s ease-in-out;
}
.drop-leave-active {
    animation: bounce-in 0.2s reverse;
    opacity: 0;
    transition: opacity 0.45s ease-in-out;
}
@keyframes bounce-in {
  0% {
    margin-top: -50px;
  }
//   50% {
//     margin-top: -25px;
//   }
  100% {
    margin-top: 0px;
  }
}

.top-bar {
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 45px;
    background: #0e3f6d;
    .left {
        display: flex;
        justify-content: space-around;
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 40px;
            cursor: pointer;
            color: #fff;
            transition: transform 300ms ease-in-out,
                color 300ms ease;
            span {
                font-size: 24px;
                
            }
            &:hover {
                color: #abc;
                transform: scale(1.2);
            }
        }
        .links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            a {
                text-decoration: none;
                padding: 0 10px;
                text-decoration-thickness: 2px;
                text-decoration-color: #e669c6;
                transition: text-decoration-line 300ms ease-in-out;
                &:hover {
                    text-decoration-line: underline;
                }
            }
        }

    }
    .right {
        display: flex;
        align-items: center;
        h6 {
            margin: 0 10px;
            padding: 0 10px;
            color: #fff;
            cursor: pointer;
            transition: trnasform 300ms ease;
            span {
                display: flex;
                justify-content: center;
                width: 25px;
                transition: border-bottom 300ms ease,
                    color 300ms ease;
            }
            &:hover {
                span {
                    color: #abc;
                }
                transform: scale(1.2);
            }
        }
    }
}
.top-liner {
    float: top;
    position: absolute;
    top: 45px;
    width: 100vw;
    height: 8px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    // background: transparent;
    background: linear-gradient(to right, #2dceda, #e669c6);
}
.body-content {
    position: relative;
    height: 100vh;
    margin: 52px 0;
    overflow: auto;
    color: #2c3e50;
    background-color: #cbcbcc;
}
.side-bar {
    position: relative;
    float: left;
    // background: #aeaeaf;
    background: linear-gradient(to right, #94a6bb, #afafbb);
    color: #2c3e50;
    min-width: 200px;
    max-width: 250px;
    height: 93.5%;
    padding: 4px 10px;
    border-top-right-radius: 4px;
    font-family: 'Poppins', sans-serif;
    overflow-y: auto;
    overflow-x: hidden;

    ul {
        // width: 104%;
        margin-bottom: 32%;
        transition: height 250ms ease-in-out;
        li {
            list-style: none;
            line-height: 50px;
            padding: 0 4px;
            // cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,.4);
            span {
                position: relative;
                font-weight: 1000;
                font-size: 16px;
                span {
                    position: absolute;
                    right: -170%;
                    top: -10%;
                    width: 130%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 17px;
                    cursor: pointer;
                    transition: color 250ms ease;
                    &:hover {
                        color: #ec111c;
                    }
                }
            }

            ul {
                position: static;
                padding: 0 15px;
                margin: 0;
                // display: none;
                li {
                    line-height: 42px;
                    // padding: 0 24px;
                    border-bottom: none;
                    border-left: none;
                    a {
                        color: inherit;
                        text-decoration: none;
                        font-size: 14px;
                        
                        &.router-link-exact-active {
                            color: #701079;
                            font-weight: 1000;
                        }
                    }
                    &:nth-child(1), &:nth-child(2),&:nth-child(3),
                    &:nth-child(4) {
                        // width: 50%;
                        transition: box-shadow 400ms ease;
                        border-bottom: .1em solid #000;
                        &:hover {
                            font-size: 16px;
                            color: #642561;
                            border-left: 2px solid orangered;
                            box-shadow: 0 0 25px rgba(0,0,0,.3);

                        }
                    }
                    &:last-of-type {
                        border-bottom: none;
                    }
                }
            }
            &:nth-child(1) {
                cursor: pointer;
                transition: color 250ms ease,
                    box-shadow 400ms ease;
                &:hover {
                    border-left: 2px solid cyan;
                    color: #642561;
                    box-shadow: 0 0 25px rgba(0,0,0,.3);
                }
            }
        }
    }
    .side-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        margin: 6px 0;
        width: 184px;
        height: 6%;
        box-shadow: 0 0 25px rgba(0,0,0,.3);
        // height: 2px;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                padding: 0 4px;
                border-bottom: none;
            }
        }
    }
}
.context-side {
    padding: 0;
    margin: 0;
}
</style>