import axios from 'axios'
import { getUser } from '@/utils/auth'
export default {
    addfdfsUploadImage (data) {
        // return axios.get({
        //     'http://121.5.129.126:8001/file/fdfsUploadImage', {
        //         data: {
        //             file: params
        //         }
        //     },
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        return axios.post('http://121.5.129.126:8001/file/fdfsUploadImage',
            data
            , {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': "Bearer " + getUser().token
                }
            }
        )
    },
    deletefdfsImage (params) {
        return axios.post('http://121.5.129.126:8001/file/deletefdfsImage', params,
            {
                headers: { 'Authorization': "Bearer " + getUser().token }
            }
        )
    }
}
