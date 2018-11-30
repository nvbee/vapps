/*
 * @Author: monster.huangwei
 * @Date: 2018-11-04 14:05:55
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-09 16:10:05
 */
(function () {
  Date.prototype.format = function (fmt) {
    var o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      'S': this.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }

  Number.prototype.add = function (arg) { // 加法精确求值
    var s1 = this.toString()

    var s2 = arg.toString()
    var r1 = 0

    var r2 = 0

    try {
      if (s1.indexOf('.') >= 0) {
        r1 = s1.split('.')[1].length
      }

      if (s2.indexOf('.') >= 0) {
        r2 = s2.split('.')[1].length
      }
    } catch (e) {

    }

    var m = Math.pow(10, Math.max(r1, r2))

    return (this * m + arg * m) / m
  }

  Number.prototype.div = function (arg) { // 除法精确求值
    var s1 = this.toString()

    var s2 = arg.toString()
    var t1 = 0

    var t2 = 0

    try {
      if (s1.indexOf('.') >= 0) {
        t1 = s1.split('.')[1].length
      }

      if (s2.indexOf('.') >= 0) {
        t2 = s2.split('.')[1].length
      }
    } catch (e) {

    }

    var r1 = Number(this.toString().replace('.', ''))
    var r2 = Number(arg.toString().replace('.', ''))

    return (r1 / r2) * Math.pow(10, t2 - t1)
  }

  // eslint-disable-next-line no-extend-native
  Number.prototype.formatMoney = function () { // 将数值转化成0.00格式
    var s_x = ''

    try {
      if (isNaN(this)) {
        return s_x
      }

      var f_x = Number(parseInt(this.mul(100))).div(100)
      s_x = f_x.toString()

      var pos_decimal = s_x.indexOf('.')

      if (pos_decimal < 0) {
        pos_decimal = s_x.length
        s_x += '.'
      }

      while (s_x.length <= pos_decimal + 2) {
        s_x += '0'
      }

      return s_x
    } catch (e) {

    }

    return s_x
  }

  Number.prototype.mul = function (arg) { // 乘法精确求值
    var s1 = this.toString()

    var s2 = arg.toString()
    var m = 0

    try {
      if (s1.indexOf('.') >= 0) {
        m += s1.split('.')[1].length
      }

      if (s2.indexOf('.') >= 0) {
        m += s2.split('.')[1].length
      }
    } catch (e) {

    }

    var r1 = Number(s1.replace('.', ''))
    var r2 = Number(s2.replace('.', ''))

    return r1 * r2 / Math.pow(10, m)
  }

  Number.prototype.sub = function (arg) { // 减法精确求值
    return this.add(-arg)
  }

  Number.prototype.toPercent = function () { // 将数值转化为百分比
    var aa = this.mul(100)
    return '' + aa + '%'
  }

  /**
   * 判断字符串是否以str结尾
   * @param str
   * @returns {boolean}
   */
  String.prototype.endWith = function (str) {
    if (Tools.check.isEmpty(str)) return false
    if (this.substring(this.length - str.length) == str) return true
    return false
  }

  String.prototype.hideAddress = function () {
    var wArray = ['街', '路']
    var retStr

    var pos = 0

    if (Tools.check.isEmpty(this)) {
      return ''
    }

    for (var i = 0; i < wArray.length; i++) {
      pos = this.indexOf(wArray[i])

      if (pos > -1) {
        retStr = '*' + wArray[i] + this.substr(pos + 1)
        return retStr
      }
    }

    if (this.length > 10) {
      retStr = '*' + this.substr(-10)
    } else {
      retStr = this.toString()
    }

    return retStr
  }

  String.prototype.hideName = function () {
    var retStr = this.toString().substr(0)

    if (Tools.check.isEmpty(this)) {
      return ''
    }

    for (var i = 1; i < this.length; i++) {
      retStr += '*'
    }

    return retStr
  }

  String.prototype.hideCenter = function () {
    if (Tools.check.isEmpty(this)) {
      return ''
    }

    var len = this.length - 1
    var str = ''

    while (len > 0) {
      str = str + 'X'
      len--
    }

    return str + this.substr(-1)
  }

  /**
   * 判断字符串是否以str开头
   * @param str
   * @returns {boolean}
   */
  String.prototype.startWith = function (str) {
    if (Tools.check.isEmpty(str)) return false
    if (this.substring(0, str.length) == str) return true
    return false
  }
})()
var Base64 = function () {
  var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  this.encode = function (input) {
    var output = ''

    var chr1, chr2, chr3
    var enc1, enc2, enc3, enc4

    var i = 0

    input = _utf8_encode(input)

    while (i < input.length) {
      chr1 = input.charCodeAt(i++)
      chr2 = input.charCodeAt(i++)
      chr3 = input.charCodeAt(i++)

      enc1 = chr1 >> 2
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
      enc4 = chr3 & 63

      if (isNaN(chr2)) {
        enc3 = enc4 = 64
      } else if (isNaN(chr3)) {
        enc4 = 64
      }

      output = output + _keyStr.charAt(enc1) +
        _keyStr.charAt(enc2) +
        _keyStr.charAt(enc3) +
        _keyStr.charAt(enc4)
    }

    return output
  }

  this.decode = function (input) {
    var output = ''

    var chr1, chr2, chr3
    var enc1, enc2, enc3, enc4

    var i = 0

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++))
      enc2 = _keyStr.indexOf(input.charAt(i++))
      enc3 = _keyStr.indexOf(input.charAt(i++))
      enc4 = _keyStr.indexOf(input.charAt(i++))

      chr1 = (enc1 << 2) | (enc2 >> 4)
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
      chr3 = ((enc3 & 3) << 6) | enc4

      output = output + String.fromCharCode(chr1)

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2)
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3)
      }
    }

    output = _utf8_decode(output)

    return output
  }

  var _utf8_encode = function (input) {
    var output = ''

    input = input.replace(/\r\n/g, '\n')

    for (var i = 0; i < input.length; i++) {
      var chr = input.charCodeAt(i)

      if (chr < 128) {
        output += String.fromCharCode(chr)
      } else if ((chr > 127) && (chr < 2048)) {
        output += String.fromCharCode((chr >> 6) | 192)
        output += String.fromCharCode((chr & 63) | 128)
      } else {
        output += String.fromCharCode((chr >> 12) | 224)
        output += String.fromCharCode(((chr >> 6) & 63) | 128)
        output += String.fromCharCode((chr & 63) | 128)
      }
    }

    return output
  }

  var _utf8_decode = function (input) {
    var output = ''

    var i = 0
    var chr1 = 0

    var chr2 = 0

    var chr3 = 0

    while (i < input.length) {
      chr1 = input.charCodeAt(i)

      if (chr1 < 128) {
        output += String.fromCharCode(chr1)
        i++
      } else if ((chr1 > 191) && (chr1 < 224)) {
        chr2 = input.charCodeAt(i + 1)
        output += String.fromCharCode(((chr1 & 31) << 6) | (chr2 & 63))
        i += 2
      } else {
        chr2 = input.charCodeAt(i + 1)
        chr3 = input.charCodeAt(i + 2)
        output += String.fromCharCode(((chr1 & 15) << 12) | ((chr2 & 63) << 6) | (chr3 & 63))
        i += 3
      }
    }

    return output
  }
}

var base64 = new Base64()

var Tools = {
  check: {
    /**
     * 校验对象是否为空
     * @param {*} obj 
     * @return {Boolean}
     */
    isEmpty: function (obj) {
      if ((Object.prototype.toString.call(obj) === '[object Array]' && obj.length == 0) ||
        (Object.prototype.toString.call(obj) === '[object Object]' && JSON.stringify(obj).length <= 2) ||
        obj == null || obj == undefined || ('' + obj) == '') {
        return true
      }
      return false
    }
  },
  convert: {
    /**
     * 对象转base64
     * @param obj 需要转换的对象
     * @return {String}
     */
     jsonToBase64: obj => {
       if (Tools.check.isEmpty(obj)) return '';
       return base64.encode(JSON.stringify(obj))
     },

     /**
      * base64转对象
      * @param str 需要转换的base644
      * @return {Object}
      */
     base64ToJson: str => {
       if (Tools.check.isEmpty(str)) return {};
       return JSON.parse(base64.decode(str))
     },

     /**
      * 去除空格
      * @param {*} str 
      */
     trim: function (str) {
      if (Tools.check.isEmpty(str)) {
        return str;
      } else {
        return ("" + str).replace(/ /g, "");
      }
    },

     /**
      * 将字符串或数字转换为0,000.00
      * @param {*} str 
      * @param {*} val 
      */
     convertMoney: function (str, val) {
      val = Tools.convert.trim(val);
      return str + Number(val).div(100).formatMoney().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
    }
  }
}
export { Tools }
