import request from '@/utils/request'
export default {
    search(page, size, parentid) {
        return request({
          url: `/gossip/comment/${parentid}/${page}/${size}`,
          method: 'get'
        })
    },
    pageByUser(page, size, parentid) {
      return request({
        url: `/gossip/pageByUser/${page}/${size}`,
        method: 'get'
      })
  },
    findById(id) {
        return request({
          url: `/gossip/${id}`,
          method: 'get'
        })
    },
    delete(id) {
      return request({
        url: `/gossip/${id}`,
        method: 'delete'
      })
  },
    commentlist(id) {
        return request({
          url: `/gossip/findAllByPre/${id}`,
          method: 'get'
        })
    },
    thumbup(id){
        return request({
            url: `/gossip/thumbsUp/${id}`,
            method: 'put'
        })
    },
    save(pojo) {
        return request({
          url: `/gossip/save`,
          method: 'post',
          data: pojo
        })
    }
}
