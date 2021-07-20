import request from '@/utils/request'
// 分页查询
export default {
    findPage(pageNum,pageSize) {
        return request({
            url: '/blog/findPage',
            method: 'post',
            data:{
                pageNum,
                pageSize
            }
        })
    },
  findPageType(pageNum,pageSize,enabled) {
        return request({
            url: '/blog/findPage',
            method: 'post',
            data:{
                pageNum,
                pageSize,
                enabled
            }
        })
    },
    findUserPage(pageNum,pageSize,id) {
        return request({
            url: '/blog/findUserPage',
            method: 'post',
            data:{
                pageNum,
                pageSize,
                id
            }
        })
    },
    getBlogById(id) {
        return request({
            url: '/blog/getBlogById?id='+id,
            method: 'post'
        })
    },
    getHotBlog() {
        return request({
            url: '/blog/hotBlog',
            method: 'post'
        })
    },
    saveBlog(data) {
        return request({
            url: '/blog/saveBlog',
            method: 'post',
            data
        })
    },
    delete(id) {
        return request({
            url: `/blog/delete/${id}`,
            method: 'get'
        })
    }
}
