const api_url = 'http://172.20.10.2:4000/api';

 class FormService {
    async getCountry() {
        let data = await fetch(api_url + "/getCountry")
        console.log(data);
        const json = await data.json()
        return json
    }

    async create(obj){
        let data = await fetch(api_url + "/create", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
        const json = await data.json()
        return json
    }
}

export default new FormService()