/*
 * @Author: monster.huangwei 
 * @Date: 2018-11-13 10:14:53 
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-13 10:15:18
 */

var prefixSupport = function () {
        var prefixArr = ["webkit", "moz", "ms", "o", ""]
        let str = ''
        for ( let i = 0; i < prefixArr.length; i++) {
            let prefix = prefixArr[i];
            if ( typeof document[prefix + 'Hidden'] !== undefined ) 
            str = prefix;
            break
        }
        return str
    }

var  hidden = prefixSupport() + 'Hidden';
var  visibilityChange = prefixSupport() + 'visibilitychange';
var  visibilityState = prefixSupport() + 'VisibilityState'

export { 
    hidden,
    visibilityChange,
    visibilityState
 }