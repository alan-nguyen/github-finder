// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    GitHub.getUser(userText).then(data => {
      console.log(data);
    });
  }
});
