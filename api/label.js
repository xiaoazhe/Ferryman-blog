import request from '@/utils/request'
export default {
    toplist(){
        return request({
            url: `/label/toplist`,
            method: 'get'
        })
    }

}