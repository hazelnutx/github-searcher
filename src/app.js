const searchUser = document.querySelector("#searchUser");
const github = new Github();
const ui = new Interface();

searchUser.addEventListener("keypress", e => {
    // this is for enter, so I won't pass through every github username and fetch at every letter typed
    // so here I watch to see if it's enter, then I fetch the input value
    let key = e.which || e.keyCode;
    if (key === 13) {
        const inputText = e.target.value;

        if (inputText !== "") {
            github.getUser(inputText).then(data => {
                if (data.profile.message === "Not Found") {
                    alert("User not found");
                } else {
                    ui.showProfile(data.profile);
                }
            });
        } else {
            //TODO: Clear the input field
            // Clear input
        }
    }
});
