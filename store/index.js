export const state = ()=> ({

    posts: [],
    categories: []

})

export const mutations = {

    frontPagePosts(state,posts){
        state.posts = posts;
    }, frontPagecategories(state,categories){
        state.categories = categories;
    }
}