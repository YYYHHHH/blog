let tools = {
    _type: function(obj) {
        let class2type = {};
        let toString = class2type.toString;
        return obj == null ? String(obj) :
            class2type[toString.call(obj)] || 'object';
    },
    isObject: function(obj) {
        return this._type(obj) === 'object';
    },
    formatDate: function(date, fmt) {
        if (this.isObject(date) === false) {
            return date;
        }
        date = new Date(date);
        //console.log('date：' + date);
        if (fmt === undefined) {
            fmt = 'yyyy-MM-dd hh:mm:ss';
        }
        let o = {
            'M+': date.getMonth() + 1, //月份
            'd+': date.getDate(), //日
            'h+': date.getHours(), //小时
            'm+': date.getMinutes(), //分
            's+': date.getSeconds(), //秒
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度
            'S': date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        return fmt;
    },
};
export default tools;