/*
 * @Author: monster.huangwei 
 * @Date: 2018-11-04 16:53:51 
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-10 15:56:02
 */
import {Tools} from '@/lib/tools'
const util = {
    /**
     * 设置页面标题
     * @param title 标题名称
     */
    setTitle: (title) => {
        console.log('title', title)
        if (Tools.check.isEmpty(title)) {
          title = "停车缴费";
        }
        window.document.title=title;
    }
}

export default util