import request from '@/utils/request'

export default {
    list(type,label,page,size){
        return request({
            url:`/problem/${type}?label=` + label,
            method: 'post',
            data: {
                pageNum : page,
                pageSize : size
            }
        })
    },
    getById(id){
        return request({
            url:`/problem/getById?id=` + id,
            method: 'get'
        })
    },
    getSimilarById(id){
        return request({
            url:`/problem/getSimilarById?id=` + id,
            method: 'get'
        })
    },
    save(par){
        return request({
            url:`/problem/save`,
            method: 'post',
            data: par
        })
    },
    good(id){
        return request({
            url:`/problem/setGood/${id}`,
            method: 'get'
        })
    },
    setCollect(id, statusId){
        return request({
            url:`/problem/setCollect/${id}/${statusId}`,
            method: 'get'
        })
    },
    getCollect(statusId, page, size){
        return request({
            url:`/problem/collect/getCollect/${statusId}`,
            method: 'post',
            data: {
                pageNum : page,
                pageSize : size
            }
        })
    },
    deleteCollect(id, statusId){
        return request({
            url:`/problem/collect/deleteCollect/${id}/${statusId}`,
            method: 'get'
        })
    },
    delete(){
        return request({
            url:`/problem/collect/delete`,
            method: 'get'
        })
    }
}