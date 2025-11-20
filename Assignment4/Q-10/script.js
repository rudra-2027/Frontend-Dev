function buildResume() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const github = document.getElementById("github").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();

  const emailErr = document.getElementById("emailErr");
  const gitErr = document.getElementById("gitErr");
  const linkErr = document.getElementById("linkErr");

  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^https:\/\//;

  if (!emailRegex.test(email)) {
    emailErr.style.display = "block";
    isValid = false;
  } else {
    emailErr.style.display = "none";
  }

  if (!urlRegex.test(github)) {
    gitErr.style.display = "block";
    isValid = false;
  } else {
    gitErr.style.display = "none";
  }

  if (!urlRegex.test(linkedin)) {
    linkErr.style.display = "block";
    isValid = false;
  } else {
    linkErr.style.display = "none";
  }

  if (!isValid) return;

  const resume = {
    name: name,
    email: email,
    skills: skills.split(",").map((s) => s.trim()),
    github: github,
    linkedin: linkedin,
  };

  document.getElementById("outputBox").textContent = JSON.stringify(
    resume,
    null,
    2
  );
}
