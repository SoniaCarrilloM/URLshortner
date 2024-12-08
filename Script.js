async function shortURL() {
  const Url = document.getElementById("url").value;
  const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`
  );
  if (response.ok) {
    const data = await response.text();
    const currentDate = new Date().toLocaleDateString();

    document.getElementById("result").innerHTML = `
        shortend URL : <a href="${data}" target="_blank">${data}</a> (Shortened on: ${currentDate})`;
  } else {
    document.getElementById("result").innerHTML = "Error shortening";
  }
}
