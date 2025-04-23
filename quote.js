async function quote() {
    const response = await fetch('https://qapi.vercel.app/api/random');
    const data = await response.json();
    console.log(data);
    document.getElementById("quote").innerHTML=data.quote;
    document.getElementById("author").innerHTML=data.author;
}
quote()