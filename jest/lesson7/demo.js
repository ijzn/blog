import axios from 'axios';
export function runCallBack (callback) {
    callback('11');
}

export function createNewClass(classItem) {
    new classItem()
}

export function getData() {
    return axios.get('/api')
}