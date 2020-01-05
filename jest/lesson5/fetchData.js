import axios from 'axios'

export function fetchData() {
    return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}