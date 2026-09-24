//KEY
//Công thức
//project:module:version:action:params
//Ví dụ: 
// - ecommerce:products:v1:list:q=abc
// - ecommerce:products:v1:detail:1


//version để làm gì?
// - Thay đổi code (cập nhật) -> Tăng version để vô hiệu hóa cache cũ
// - Muốn xóa tất cả cache của 1 module -> Tăng version

const PREFIX = 'ecommerce';
export const CACHE_KEYS = {
    POSTS: {
        VERSION: 2,
        VERSION_KEY: `${PREFIX}:posts:version`,
        LIST(ver: string, params = {}) {
            const queryString = new URLSearchParams(params).toString();
            return `${PREFIX}:posts:v${this.VERSION}:list:v${ver}:${queryString}`;
        },
        DETAIL(id: number) {
            return `${PREFIX}:posts:v${this.VERSION}:detail:${id}`
        }
    }
}

//TTL
export const CACHE_TTL = {
    POSTS: {
        LIST: 3600 * 12, //12 tiếng
        DETAIL: 3600 //1 tiếng
    }
}

//{x: 1, y:2} -> x=1&y=2
