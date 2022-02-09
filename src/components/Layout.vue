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
                    <li @click="dropDownEcheck()">
                        <span>
                            E-check
                            <span v-show="!exactEcheckMenu" class="fa fa-caret-down"></span>
                            <span v-show="exactEcheckMenu" class="fa fa-caret-up"></span>
                        </span>
                        <transition name="drop">
                            <ul v-show="exactEcheckMenu">
                                <li><router-link to="/checkout">Dashboard</router-link></li>
                                <li><router-link to="/about">Receipts</router-link></li>
                                <li><router-link to="/about">Total</router-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li @click="dropDownAdmin()">
                        <span>
                            <span class="fa fa-charts"></span>
                            Admin
                            <span v-show="!exactAdminMenu" class="fa fa-caret-down"></span>
                            <span v-show="exactAdminMenu" class="fa fa-caret-up"></span>
                        </span>
                        <transition name="drop">
                            <ul v-show="exactAdminMenu">
                                <li><router-link to="/">Dashboard</router-link></li>
                                <li><router-link to="/about">Products</router-link></li>
                                <li><router-link to="/about">Inventories</router-link></li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
            <div class="context-side">
                <!-- <transition name="routes" mode="out-in">
                    <router-view/>
                </transition> -->
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
            adminMenu: false,
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
    transition: opacity 0.3s ease-out;
}
.drop-enter-active, .drop-leave-active {
    transition: opacity 300ms ease-in-out;
}
.drop-enter-from, .drop-leave-to {
    opacity: 0;
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
    float: left;
    // background: #aeaeaf;
    background: linear-gradient(to right, #94a6bb, #afafbb);
    color: #2c3e50;
    min-width: 200px;
    max-width: 250px;
    height: 100%;
    padding: 4px 10px;
    font-family: 'Poppins', sans-serif;

    ul {
        width: 104%;
        transition: height 250ms ease;
        li {
            list-style: none;
            line-height: 50px;
            padding: 0 4px;
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,.4);
            span {
                position: relative;
                font-weight: 1000;
                font-size: 16px;
                span {
                    position: absolute;
                    right: -120%;
                    top: -10%;
                    font-size: 17px;
                }
            }

            ul {
                position: static;
                // display: none;
                li {
                    line-height: 42px;
                    padding: 0 24px;
                    border-bottom: none;
                    border-left: none;
                    a {
                        color: #2c3e50;
                        text-decoration: none;
                        font-size: 14px;
                        transition: color 250ms ease,
                            font 250ms ease;
                        &:hover {
                            color: #000;
                            font-size: 16px;
                        }
                        &.router-link-exact-active {
                            color: #000;
                            font-weight: 1000;
                        }
                    }
                    &:nth-child(1), &:nth-child(2),&:nth-child(3),
                    &:nth-child(4) {
                        &:hover {
                            border-left: 2px solid orangered;

                        }
                    }
                }
            }
            &:nth-child(1) {
                transition: color 250ms ease;
                &:hover {
                    border-left: 2px solid cyan;
                    color: cyan;
                }
            }
        }
    }
}
.context-side {
    padding: 0;
    margin: 0;
}
</style>