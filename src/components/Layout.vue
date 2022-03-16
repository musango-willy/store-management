<template>
    <div class="layout">
        <div class="top-bar">
            <div class="left">
                <div class="logo">
                    <span class="fa fa-home"></span>
                </div>
            </div>
            <div class="right">
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
                <h2><router-link to="/"><span class="fa fa-home"></span>Home</router-link></h2>
                <h2>
                    E-check
                    <div class="children">
                        <router-link to="/checkout"><span class="fa fa-bars"></span> dashboard</router-link>
                        <router-link to="/"><span class="fa fa-file"></span> receipt</router-link>
                        <router-link to="/"><span class="fa fa-user"></span> user</router-link>
                    </div>
                </h2>
                <h2><router-link to="/admin"><span class="fa fa-bar-chart"></span> Admin</router-link></h2>
                <h2><router-link to="/products"><span class="fa fa-database"></span> Products</router-link></h2>
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
        }
    },
    created() {

    },
    methods: {
        dropDownEcheck() {
            this.echeckMenu = !this.echeckMenu
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
    transition: opacity 0.25s ease-out;
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
    height: 6%;
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
    background: linear-gradient(to right, #cf3baa, #2dceda, #cf3baa);
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
    background: linear-gradient(120deg, #94a6bb, #afafbb, #dad7cd);
    min-width: 200px;
    max-width: 250px;
    height: 93.5%;
    padding: 4px 10px;
    border-top-right-radius: 4px;
    font-family: 'Poppins', sans-serif;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 0 3px #000;
    display: flex;
    flex-direction: column;

    h2 {
        width: 100%;
        color: #000;
        background: transparent;
        margin-top: 0.4rem;
        min-height: 3rem;
        padding: 8px 8px;
        font-size: 18px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        border-bottom: 1px solid rgba(0,0,0,0.5);
        position: relative;
        transition: border 250ms ease;

        a {
            text-decoration: none;
            font-size: 18px;
            padding: 8px 0;
            color: #052329;
            width: 100%;
            display: block;
            transition: margin 250ms ease;
            letter-spacing: 1px;

            span {
                margin-right: 4px;
            }
            &.router-link-exact-active {
                color: #0e3f6d;
                margin-left: 2px;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0%;
                    top: 0%;
                    width: 5px;
                    height: 100%;
                    background: #1a575c;

                }
            }
        }

        .children {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            padding: 0 12px;

            a {
                color: #1b334e;
                display: flex;
                align-items: center;
                text-decoration: none;
                height: 2.5rem;
                width: 100%;
                padding: 8px 6px;
                font-size: 16px;
                position: relative;
                border-bottom: 1px solid #888;
                transition: box 250ms ease;

                &:nth-child(1) {
                    margin-top: 8px;
                }
                &.router-link-exact-active {
                    color: #334d68;
                    border-bottom: 1px solid rgba(0,0,0,0.8);

                    &::before {
                        content: '';
                        position: absolute;
                        left: 0%;
                        width: 4px;
                        height: 100%;
                        background: #3e74b3;

                    }
                }
                &:hover {
                    padding-left: 12px;
                    box-shadow: 0px 0px 5px #fff;
                    &::before {
                        content: '';
                        position: absolute;
                        left: 0%;
                        width: 3px;
                        height: 100%;
                        background: #1a575c;

                    }
                }
            }
        }
        &:hover {
            &:nth-child(1), &:nth-child(3), &:nth-child(4) {
                border-bottom: 1.5px solid rgba(0,0,0,0.9);
                a {
                    margin-left: 6px;
                }
                &::before {
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 0%;
                    height: 100%;
                    width: 4px;
                    background: blue;
                }
            }

        }
    }
}

.context-side {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 92%;
    // overflow-y: auto;
}
@media print {
    * {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }
    .side-bar,
    .top-liner,
    .top-bar {
        display: none;
    }
}
</style>