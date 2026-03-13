
//pega todos os usuários 
async function get_users(params) {
    const url ="https://jsonplaceholder.typicode.com/users";
    
    const response =await fetch(url);
    const users =await response.json();
    return users
    
}


//pega um usuário por id 
async function get_users_id(id) {

    const url="https://jsonplaceholder.typicode.com/users/"+id;
    const response= await fetch(url);
    const user= await response.json();

    return user
}


//pega todas as tarefas de um usuário por id 
async function get_Userid_todos(userid) {
    const url="https://jsonplaceholder.typicode.com/users/" + userid+ "/todos";
    const response=await fetch(url);
    const todos=await response.json();
    console.log(todos);
}
get_Userid_todos(1);



//pega uma tarefa por id 
async function get_todos_id(id) {
    const url ="https://jsonplaceholder.typicode.com/todos/"+id;
    const response =await fetch(url);
    const todo =await response.json();
   return todo

}

//pega uma foto por id 
async function get_photo (id) {
    const url ="https://jsonplaceholder.typicode.com/photos/"+id;
    const response =await fetch(url);
    const photo =await response.json();

    //o img é a tag onde a img esta se estiver dentro de uma div tem que colocar o caminho da div
    const img=document.createElement("img");
    img.src="https://picsum.photos/"+id

    const conteiner =document.getElementById("photos")
    conteiner.appendChild(img);    
}


//pega todas as fotos do primeiro album do usuário 
//por enquanto so retorna o json não carrega a imagem no html
async function get_user_album_photos(userid) {
  const response= await fetch("https://jsonplaceholder.typicode.com/users/"+userid+"/albums")
  const albums=await response.json();

  const album=albums[0];

  const responsephotos=await fetch("https://jsonplaceholder.typicode.com/albums/"+album.id+"/photos")
  const photos=await responsephotos.json();

  return photos
}



//pega todos os posts do usuário 
async function get_posts_id(userid) {
    const url ="https://jsonplaceholder.typicode.com/users/" +userid+"/posts";
    const response =await fetch(url);
    const data=await response.json();

   return data

}

//pega os comentários de um post por id 
async function get_comments_id(userpost) {
    const url ="https://jsonplaceholder.typicode.com/posts/"+userpost+"/comments";
    const response =await fetch(url);
    const comments=await response.json();

    return comments

}









