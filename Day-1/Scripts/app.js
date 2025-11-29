document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone_no").value.trim();

    if (fname === "" || lname === "" || email === "" || phone === "") {
        alert("All fields are required!");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits!");
        return;
    }

    let branch = document.querySelector('input[name="branch"]:checked');
    if (!branch) {
        alert("Please select a branch!");
        return;
    }

    let skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length === 0) {
        alert("Select at least one skill!");
        return;
    }

    console.log("[Form Submission]");
    console.log("Name:", fname, lname);
    console.log("Email:", email);
    console.log("Branch:", branch.value);
    console.log("Skills:", [...skills].map(s => s.value).join(", "));

    alert("Form submitted successfully!");
});

const audio = document.getElementById("audioPlayer");
const audioInfo = document.getElementById("audioInfo");

audio.addEventListener("loadedmetadata", () => {
    let duration = Math.floor(audio.duration);
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    audioInfo.textContent = `Audio Duration: ${minutes}m ${seconds}s`;
});


const video = document.getElementById("videoPlayer");
const videoInfo = document.getElementById("videoInfo");

video.addEventListener("loadedmetadata", () => {
    let width = video.videoWidth;
    let height = video.videoHeight;

    videoInfo.textContent = `Video Resolution: ${width} × ${height}`;
});
