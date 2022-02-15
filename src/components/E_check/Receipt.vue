<template>
    <div class="page">
        <div class="list-header">
            <ul>
                <li><span></span></li>
                <li><span>Item</span></li>
                <li><span>Price</span></li>
            </ul>
        </div>
        <div class="list-body">
            <ul>
                <li>
                    <span>1</span>
                    <span>
                        <p class="left-spa">Dormans efjaijfioqe fqojifjoeiq Coffee</p>
                        <h6>100 g</h6>
                    </span>
                    <span>Ksh. 120</span>
                </li>
                <li>
                    <span>1</span>
                    <span>
                        <p class="left-spa">Dormans efjaijfioqe fqojifjoeiq Coffee</p>
                        <h6>100 g</h6>
                    </span>
                    <span>Ksh. 120</span>
                </li>
                <li>
                    <span>1</span>
                    <span>
                        <p class="left-spa">Dormans efjaijfioqe fqojifjoeiq Coffee</p>
                        <h6>100 g</h6>
                    </span>
                    <span>Ksh. 120</span>
                </li>
                <li>
                    <span>1</span>
                    <span>
                        <p class="left-spa">Dormans efjaijfioqe fqojifjoeiq Coffee</p>
                        <h6>100 g</h6>
                    </span>
                    <span>Ksh. 120</span>
                </li>
                <li>
                    <span>1</span>
                    <span>
                        <p class="left-spa">Dormans efjaijfioqe fqojifjoeiq Coffee</p>
                        <h6>100 g</h6>
                    </span>
                    <span>Ksh. 120</span>
                </li>

            </ul>
        </div>
        <div class="list-footer">
            <ul>
                <li><span>Total</span></li>
                <li><span>Ksh. 1000</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Receipt",

}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: .4em;
}
::-webkit-scrollbar-track {
    background: #acaba6; 
}
::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #021191, #0f0f0f); 
    border-radius: 5px;
}
.page {
    position: relative;
    height: 100%;
}
.list-header {
    position: absolute;
    top: 0%;
    width: 100%;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        height: 32px;
        background: #33833e;
        border-radius: 4px 4px 0 0;

        li {
            padding: 0 4px;
            span {
                font-size: 17px;
                font-weight: 900;
                color: #d6b006;
            }
            &:nth-child(1) {
                width: 15%;
            }
            &:nth-child(2) {
                width: 59%;
            }
            &:last-child {
                width: 26%;
            }
        }
    }
}
.list-body {
    // position: absolute;
    padding-top: 34px;
    width: 100%;
    height: 90.5%;
    overflow-y: auto;
    overflow-x: hidden;
    background: linear-gradient(to bottom, #88ada5, #9dd9f5);
    ul {
        // margin-top: 34px;
        list-style: none;
        width: 100%;

        li {
            display: flex;
            align-items: center;
            height: 38px;
            border-bottom: 1px dotted;
            transition: height 250ms ease-in-out,
                background 250ms ease-in-out;
            span {
                font-weight: 500;
                
                &:nth-child(1) {
                    text-align: center;
                    width: 15%;
                    font-weight: 1000;

                }
                &:nth-child(2) {
                    display: flex;
                    width: 61%;
                    p {
                        margin-right: 3px;
                        width: 65%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    h6 {
                        padding: 0 1px;
                        font-weight: inherit;
                        width: 35%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                &:last-child {
                    width: 24%;
                    padding: 0 4px;
                }
            }
            &:hover {
                height: 42px;
                background: #88ada5;
                cursor: pointer;
            }
        }
    }
}
.list-footer {
    padding: 4px 2px;
    height: 50px;
    background: #5a5e5d;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 2px solid #fc0410;

    ul {
        list-style: none;
        display: flex;
        cursor: pointer;
        

        li {
            span {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 12px 0 6px 0;
                font-weight: 1000;
            }
            &:nth-child(1) {
                width: 50%;
                span {
                    font-size: 18px;
                }
            }
            &:last-child {
                width: 40%;
                span {
                    // margin-top: 4px;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 20px;
                    border-bottom: 2px solid #000;
                    transition: border 250ms ease,
                        transform 250ms ease;
                }
                
            }
        }
        &:hover {
            li:last-child span {
                color: rgba(0,0,0,.8);
                transform: scale3d(1.2, 1,1.2);
                border-bottom: 2px solid #08e2ab;
            }
        }
    }
}
@media print {
    * {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }
    .page {
        width: 90vw;
        height: 100vh;
    }
    .list-header {
        display: none;
    }
    .list-body {
        // width: 90vw;
        height: 90.5vh;
        ul {
            width: 90vw;
        }
        ul li {
            border: none !important;
        }
    }
}
</style>