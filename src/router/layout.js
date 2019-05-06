const layout = [{
    path: '/',
    component: resolve => require(['pages/api'], resolve),
    meta: {
        //world data api junald, this will override page_title from store.js
        title: "Free World Info Rest API.",
    }
}]

export default layout
