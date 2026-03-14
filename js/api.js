//nas funções de carregar cada "document.getelementbyid" se refere a uma div do html

//pega todos os usuários 
async function get_users(params) {
    const url ="https://jsonplaceholder.typicode.com/users";
    
    const response =await fetch(url);
    const users =await response.json();
    return users
    
}
//carrega todos os usuarios no html 
async function load_users(params) {
    const users=await get_users();
    const conteiner=document.getElementById("users");



    conteiner.innerHTML=`<pre>${JSON.stringify(users, null, 2)}</pre>`;

    
}


//pega um usuário por id 
    async function get_users_id(id) {

        const url="https://jsonplaceholder.typicode.com/users/"+id;
        const response= await fetch(url);
        const user= await response.json();

        return user
    }

//carrega o usuario no html por id no html
async function load_users_id() {
    const user= await get_users_id();
    
    const conteiner=document.getElementById("user");

    conteiner.innerHTML=`<pre>${JSON.stringify(user, null, 2)}</pre>`;

    
}


//pega todas as tarefas de um usuário por id 
async function get_Userid_todos(userid) {
    const url="https://jsonplaceholder.typicode.com/users/" + userid+ "/todos";
    const response=await fetch(url);
    const todos=await response.json();
   return todos
}




//carrega todas as tarefas de um usuario no html 
async function load_todo_id() {
    const todo=await get_Userid_todos();
    const conteiner=document.getElementById("todo");
    conteiner.innerHTML=`<pre>${JSON.stringify(todo, null, 2)}</pre>`
    
}




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

        return photo;
    
           
    }


//pega todas as fotos do primeiro album do usuário 
async function get_user_album_photos(userid) {
  const response= await fetch("https://jsonplaceholder.typicode.com/users/"+userid+"/albums");
  const albums=await response.json();

  const album=albums[0];

  const responsephotos=await fetch("https://jsonplaceholder.typicode.com/albums/"+album.id+"/photos");
  const photos=await responsephotos.json();

  return photos
}

//carrega o album 1 do usuario no html
async function load_user_album_photos(params) {
    const photos= await get_user_album_photos(1);
    const conteiner=document.getElementById("album");

    conteiner.innerHTML=`<pre>${JSON.stringify(photos, null, 2)}</pre>`


}


//pega todos os posts do usuário 
async function get_posts_id(userid) {
    const url ="https://jsonplaceholder.typicode.com/users/" +userid+"/posts";
    const response =await fetch(url);
    const data=await response.json();

   return data

}


//carrega os posts de um usuário no html
async function load_posts(params) {
    const post=await get_posts_id(1);
    const conteiner =document.getElementById("posts");

    conteiner.innerHTML=`<pre>${JSON.stringify(post, null, 2)}</pre>`


    
}



//pega os comentários de um post por id 
async function get_comments_id(userpost) {
    const url ="https://jsonplaceholder.typicode.com/posts/"+userpost+"/comments";
    const response =await fetch(url);
    const comments=await response.json();

    return comments

}


//carrega os comeentarios de um post no html 
async function load_comments(params) {
    const comments=await get_comments_id(1);
    const conteiner=document.getElementById("comments");

    conteiner.innerHTML=`<pre>${JSON.stringify(comments, null, 2)}</pre>`
    
}









