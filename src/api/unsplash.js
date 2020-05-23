import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Xv4nJrkyQrU37lfMBS8rUIraNsUD15CLRe0x9jjswxo'
    }
});