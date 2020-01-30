class Github {
    constructor() {
        // TODO: Make a NodeJS back-end, from where to fetch and hide the id's on Heroku
        this.client_id = ""; // TODO: Add
        this.client_secret = ""; // TODO: Add
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
