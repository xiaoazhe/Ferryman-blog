import request from '@/utils/request'
export default {
    sendsms(mobile){
        return request({
            url:`/user/sendsms/${mobile}`,
            method: 'put'
        })
    },
    register(data,code){
        return request({
            url:`/user/register?code=` + code,
            method: 'post',
            data
            
        })
    },
    login(data){
        return request({
            url:`/user/login`,
            method: 'post',
            data
        })
    },
    info(){
       return request({
           url: `/user/info`,
           method: 'get'
       }) 
    },
    saveinfo(user){
        return request({
            url: `/user/saveinfo`,
            method: 'put',
            data: user
        })
    }
}