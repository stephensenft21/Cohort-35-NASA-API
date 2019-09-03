nasaContainer = document.getElementById("nasa--container")
console.log("hello", nasaContainer)
let NasaObject = (nasaPic) => {
    console.log("nasa object firing")
    let nasaHtml = `<section>
    <h1>NASA PAGE</h1>
    <h2>Title${nasaPic.title}</h2>
    <p>Date:${nasaPic.date}</p>
    <p>info:${nasaPic.explanation}</p>
    <p>Copywright${nasaPic.copyright}</p>
    <img src="${nasaPic.url}"alt="Nasa Img">
    <p>CopyRight: ${nasaPic.copywright}</p>
    </section>
`
    return nasaHtml
}



//out to dom
let PrintToDom = (htmlString) => {

    nasaContainer.innerHTML += htmlString;
    console.log("print to dom firing")
}
fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(Response => Response.json())
    .then(parsedResponse => {
        console.table(parsedResponse)
        PrintToDom(NasaObject(parsedResponse))
    })