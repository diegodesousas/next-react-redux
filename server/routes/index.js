const routes = [
    {
        path: "/",
        page: "/", 
        cache: true,
        params: params => params
    },
    {
        path: "/about",
        page: "/about", 
        cache: true,
        params: params => params
    },
    {
        path: "/batman-tv-shows",
        page: "/batman-tv-shows", 
        cache: true,
        params: params => params
    },
    {
        path: "/bat-post/:id",
        page: "/batman-tv-show", 
        cache: true,
        params: params => ({ id : params.id })
    }
];

module.exports = routes;
