<template>
    <div class="slide-show">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <img :src="slides[nowIndex].src">
            </a>
        </div>
        <h2>{{slides[nowIndex].title}}</h2>
        <ul class="slide-pages">
            <li @click="left">&lt;</li>
            <!-- <li @click="goto(prevIndex)">&lt;</li> -->
            <li v-for="(item,index) in slides" :key="index" @click="goto(index)">
                <a :class="{on:index == nowIndex}">{{index+1}}</a>
            </li>
            <!-- <li @click="goto(nextIndex)">&gt;</li> -->
            <li @click="right">&gt;</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowIndex: 0
        }
    },
    props: {
        slides: {
            type: Array,
            default: []
        }
    },
    computed:{
        prevIndex(){
            if(this.nowIndex === 0){
                console.log(this.slides.length-1);
                return this.slides.length-1;
            }else{
                console.log(this.nowIndex -1)
                return this.nowIndex - 1;
            }
        },
        nextIndex(){
            if(this.nowIndex === this.slides.length-1){
                console.log(this.nowIndex);
                return  0;
            }else{
                console.log(this.nowIndex +1)
                return this.nowIndex + 1;
            }
        }
    },
    mounted() {
        console.log(this.slides)
    },
    methods: {
        goto(index) {
            this.nowIndex = index;
        },
        left() {
            this.nowIndex -= 1;
            if (this.nowIndex < 0 || this.nowIndex == 0) {
                this.nowIndex = this.slides.length-1;
            };
            return this.nowIndex;
        },
        right() {
            this.nowIndex += 1;
            if (this.nowIndex > (this.slides.length-1)) {
                this.nowIndex = 0;
            };
            return this.nowIndex;
        }
    }
}
</script>

<style scoped>
.slide-trans-enter-active {
    transition: all .5s;
}

.slide-trans-enter {
    transform: translateX(900px);
}

.slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
}

.slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
}

.slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
}

.slide-img {
    width: 100%;
}

.slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
}

.slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
}

.slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
}

.slide-pages li .on {
    text-decoration: underline;
}
</style>
