class Interface {
    constructor() {
        this.profile = document.querySelector(".profile");
    }

    showProfile(user) {
        //TODO: Try to implement this, as we check if there is a Probile Bio or not
        // const userBio = `<span>
        //         ${user.bio} !== null ? ${user.bio} : "nothing here"
        //     </span>`;
        //TODO: Show repos, organazations.
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3 userData">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-block" style="background: white;">Github Profile</a>
                        <span class="bio">${user.bio}</span>
                            <div class="row col-md-4"><a href="${user.blog}" target="_blank">${user.blog}</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row justify-content-center bioUser">
                            <span class="badge just">${user.login}</span>
                        </div>
                        <div class="row justify-content-center">
                            <span class="badge">Followers: ${user.followers}</span>
                            <span class="badge">Following: ${user.following}</span>
                        </div>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}
