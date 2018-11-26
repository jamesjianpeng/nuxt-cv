/**
 * 节流函数
 * @function
 * @param {function} callback 
 * @param {number} interval 
 * @example
 *  var func = function() {
 *   console.log(window.innerWidth, window.innerHeight)
 *  }
 *
 * func = throttle(func, 2000)
 * window.addEventListener('resize', func) 
 */
export const throttle = function (callback, interval) {
    let self = callback;
    let timer;
    let firstTime = true;

    return function() {
        if (firstTime) { // 首次调用
            self.apply(this, arguments);
            firstTime = false;
        }
        if (timer) { // timer 存在则表示上次的改变还没有执行
            return false;
        }
        timer = setTimeout(function() {
            self.apply(this, arguments);
            timer = null;
        }, interval || 500)
    }
}