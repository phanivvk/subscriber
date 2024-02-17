import axios, { AxiosRequestConfig } from 'axios';




const axiosInstance = axios.create({
    baseURL: "http:/localhost:5202/api",
    httpsAgent: { rejectUnauthorized: false }
})

export const HttpPost = (path: string, body: any) => {
    console.log(body)
    return axios.post(`http://localhost:7155/api/${path}`, body,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            withCredentials: true
        }
    );
}

