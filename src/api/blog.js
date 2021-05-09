import request from './request';


// 获取博客
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    // console.log(page, categoryid, limit);
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

// 获取博客分类
export async function getBlogTypes() {
    return await request.get('/api/blogtype')
}

/**
 * 获取单个博客
 * @param {*} id 
 * @returns 
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}


/**
 * 提交评论
 * @param {*} commentInfo 
 * @returns 
 */
export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo)
}

/**
 * 分页获取评论
 * @param {*} blogId 
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
export async function getComments(blogId, page = 1, limit = 10) {
    return await request.get('/api/comment', {
        params: {
            blogId,
            page,
            limit
        }
    })
}

