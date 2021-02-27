import axios from 'axios';

const ENDPOINT = 'https://api.images.vigdorov.ru';

class ImageAPI {
    auth(login) {
        return axios.post(`${ENDPOINT}/auth`, {
            login,
        });
    }

    request() {
        return axios.get(`${ENDPOINT}/list`);
    }

    find(id) {
        return axios.get(`${ENDPOINT}/list/${id}`);
    }

    create(url) {
        return axios.post(`${ENDPOINT}/list`, {
            url,
        });
    }

    toggleLike(id) {
        return axios.update(`${ENDPOINT}/list/${id}`);
    }

    remove(id) {
        return axios.delete(`${ENDPOINT}/list/${id}`);
    }
}

export default imageAPI = new ImageAPI();
