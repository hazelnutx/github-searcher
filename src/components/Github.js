class Github {
    constructor() {
        // TODO: Make a NodeJS back-end, from where to fetch and hide the id's on Heroku
        this.client_id = "7b0ca0ec7689a393bd40";
        this.client_secret = "e2e69b12a311bdf2cf9828527dd427c069c8b650";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        return {
            profile
        };
    }
}
