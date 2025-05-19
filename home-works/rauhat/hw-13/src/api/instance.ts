import axios from "axios";

const accessKey = '7a6cab71-dd65-42c9-815f-0f0a109a2ab1';

export const instance = axios.create({
    baseURL: 'https://api.weather.yandex.ru/v2', 
    headers: {
        'X-Yandex-Weather-Key': accessKey
    }
});
