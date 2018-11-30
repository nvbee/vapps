/*
 * @Author: monster.huangwei 
 * @Date: 2018-11-06 23:10:22 
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-06 23:23:43
 */
import Vue from 'vue';
import toast from '_c/com-toast.vue';
const ToastConstructor = Vue.extend(toast);
let removeDom = event => {
  setTimeout(()=>{
    event.remove()
  },500)

};
ToastConstructor.prototype.close = function() {
    this.visible = false;
    removeDom(this.$el)
};
const Toast = (options = {},callback = ()=>{}) => {

    var instance = new ToastConstructor().$mount(document.createElement('div'))
    let duration = options.duration || 2000;
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.success = options.success || false;
    document.body.appendChild(instance.$el);
    instance.visible = true;
    Vue.nextTick(() => {
        instance.timer = setTimeout(function() {
            instance.close();
            callback();
        }, duration);
    })
    return instance
};

export default Toast
