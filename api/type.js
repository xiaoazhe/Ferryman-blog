import request from '@/utils/request'
// 查询全部
export default {
    findAll() {
        return request({
            url: '/type/findAll',
            method: 'post'
        })
    },
    findBlogByTypeId(data, typeId) {
        return request({
            url: `/type/findBlogByTypeId?id=`+typeId,
            method: 'post',
            data
        })
    }
}