import request from '@/utils/request'
export default {
    findPage(pageNum, pageSize, name) {
        return request({
          url: `/material/findPage`,
          method: 'post',
          data:{
            pageNum,
            pageSize,
            name
        }
        })
    },
    findById(id) {
        return request({
          url: `/material/findById/${id}`,
          method: 'get'
        })
    }
}
