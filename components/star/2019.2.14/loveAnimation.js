/**
 * @file 爱心交互
 */
class loveAnimation {
    /**
     * 
     * @param {number} numMax 
     * @param {number} numMin 
     * @param {array} textList ['刘', '欣', 'I', '❤️', 'you']
     */
    constructor({ numMax, numMin, textList }) {
        this.numMax = numMax
        this.numMin = numMin
        this.textList = textList
    }

    /**
     * @description 创建爱心
     * @param {number} top 
     * @param {number} left 
     */
    createdLove({top, left}) {
        let div = document.createElement('div')
        div.className = 'love-item'
        div.setAttribute('style', `
            transform: rotate(45deg) scale(${ Math.random() + .2});
        `)

        let divTwo = document.createElement('div')
        divTwo.className = 'move-animation'
        divTwo.setAttribute('style', `
            position: fixed;
            top: ${top}px;
            left: ${left}px;
        `);
        divTwo.appendChild(div)
        return divTwo
    }

    /**
     * @description 产生随机数字
     * @param {number} numMax 
     * @param {number} numMin 
     */
    randomNum(numMax, numMin) {
        let num = Math.random() * numMax / 2 + (numMax - numMin)
        return parseInt(num)
    }

    /**
     * @description 产生随机数字
     * @param {number} numMax 
     * @param {number} numMin 
     */
    randomLove(numMax, numMin) {
        let num = Math.random() * numMax + (numMax - numMin)
        return parseInt(num)
    }

    /**
     * @description 初始化爱心
     * @param {object} option
     * @param {number} top 顶部位置
     * @param {number} left 左侧位置
     */
    initLove({top, left, el}) {
        let initDiv = document.createElement('div')
        initDiv.id = `love-${new Date().getTime()}`
        initDiv.setAttribute('style', `
            position: fixed;
            top: ${top}px;
            left: ${left}px;
        `);
        // transform: rotate(45deg) scale(2);
        let len = this.randomNum(this.numMax, this.numMin)
        Array.apply(null, {length: len}).map((item, index) => {
            if (index % 2) {
                top += (this.randomLove(this.numMax, this.numMin) * 8)
                left += (this.randomLove(this.numMax, this.numMin) * 8)
            } else {
                top += -(this.randomLove(this.numMax, this.numMin) * 8)
                left += -(this.randomLove(this.numMax, this.numMin) * 8)
            }
            let love = this.createdLove({top, left})
            initDiv.appendChild(love)
        })
        el.appendChild(initDiv)
        console.log(el)
        const timeId = setTimeout(() => {
            el.removeChild(initDiv)
            clearTimeout(timeId)
        }, 3000)
    }
}

export default loveAnimation