let quote={

    fetchQuote:function() {

        fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key": "edf541cb5fmshb3db5be369328f0p1b7ddbjsnda2b30909fac"
            }
        })
        .then(response => response.json())
        .then(data=>this.displayQuote(data))
    },

displayQuote : function(data){
    const {content}=data;
    const {name}=data.originator;
    document.querySelector(".quote").innerHTML = "''" + content  + "''";
    document.querySelector(".AuthorName").innerHTML = "-" + name;
}};

document.querySelector("#generate").addEventListener("click",function() {
    quote.fetchQuote();
});

