class Github {
    constructor() {
        // TODO: Make a NodeJS back-end, from where to fetch and hide the id's on Heroku
        this.client_id = "7b0ca0ec7689a393bd40";
        this.client_secret = "0375fe46e360e7ba84debc843864b53f65976f3b";
        this.repos_count = 5;
        this.order = "asc";
        this.repos_sort = "updated";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&order=${this.order}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        // We await the fetch and 'transofrm' it in json format.
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        // We return what we got from the fetch.
        return {
            profile,
            repos
        };
    }
}
