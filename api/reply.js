import request from '@/utils/request'

export default {
    newlist(){
        return request({
            url:`/reply/newlist`,
            method: 'get'
        })
    },
    getByProId(proId,page,size){
        return request({
            url:`/reply/getByProId?proId=` + proId,
            method: 'post',
            data:{
                pageNum : page,
                pageSize : size
            }
        })
    },
    save(par){
        return request({
            url:`/reply/save`,
            method: 'post',
            data: par
        })
    },
    delectComment(id){
        return request({
            url:`/reply/delectComment/${id}`,
            method: 'get'
        })
    }
}