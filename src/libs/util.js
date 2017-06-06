import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://n.api.admin.hdpfans.dev' :
    env === 'production' ?
    '/' :
    'https://debug.url.com';

util.ajax = axios.create({
    // baseURL: ajaxUrl,
    // withCredentails:true,
    // timeout: 30000
});

export default util;