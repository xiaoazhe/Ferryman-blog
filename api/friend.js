import request from '@/utils/request'
export default {
    save(pojo) {
        return request({
          url: `/link/save`,
          method: 'post',
          data: pojo
        })
    },
    findPage(pageNum, pageSize) {
        return request({
          url: `/link/findPage`,
          method: 'post',
          data:{
            pageNum,
            pageSize
        }
        })
    },
    findById(id) {
        return request({
          url: `/link/findById/${id}`,
          method: 'get'
        })
    },
    friendTop() {
        return request({
          url: `/link/friendTop`,
          method: 'get'
        })
    }
}
