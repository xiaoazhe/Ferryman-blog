import request from '@/utils/request'
export default {
    search(page, size, searchMap) {
        return request({
          url: `/comment/search/${page}/${size}`,
          method: 'post',
          data: searchMap
        })
    },
    save(pojo) {
        return request({
          url: `/comment/save`,
          method: 'post',
          data: pojo
        })
    },
    getCommentAndReply(pageNum, pageSize) {
        return request({
          url: `/comment/getCommentAndReply`,
          method: 'post',
          data:{
            pageNum,
            pageSize
        }
        })
    }
}
