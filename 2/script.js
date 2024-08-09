function buscarPosts(){
    var url = "https://jsonplaceholder.typicode.com/todos";

    var tablebody = document.querySelector("#tablebody");
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            console.log("mensagem");
            console.log(data);
            
            data.forEach(post => {
                //post.userId post.id post.title post.body
                tablebody.innerHTML += '<tr>' 
                        + '<td>' + post.userId + '</td>'
                        + '<td>' + post.id + '</td>'
                        + '<td>' + post.title + '</td>'
                        + '<td>' + post.completed + '</td>'
                        + '</tr>';
            });            

            for (let i = 0; i < data.length; i++) {
                //                
            }

        }).catch((error) => {
            console.error("Deu erro na requisição " + error);
        });
    

}

window.onload = function() {
    var button = document.getElementById('myButton');
    button.click(); 
};