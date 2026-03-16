//nas funções de carregar cada "document.getelementbyid" se refere a uma div do html

//pega todos os usuários 
export async function get_users(params) {
    
    try{
    const response =await fetch ("https://jsonplaceholder.typicode.com/users");

    if(!response.ok){
        throw new Error("Erro de requisição"+response.status); 
    }
    const users=await response.json();
    return users;
    }   

    catch(error){
    console.error("Erro ao buscar usuário",error);
    return[];

    }
}


       

//carrega todos os usuarios no html 
export async function load_users() {
    try {

        const users = await get_users();

        const conteiner = document.getElementById("users");

        if (!conteiner) {
            throw new Error("Elemento #users não encontrado no HTML");
        }

        conteiner.innerHTML = `<pre>${JSON.stringify(users, null, 2)}</pre>`;

        console.log(users);

    } 
    catch (error) {

        console.error("Erro ao carregar usuários:", error);

        const conteiner = document.getElementById("users");

        if (conteiner) {
            conteiner.innerHTML = "<p>Erro ao carregar usuários.</p>";
        }

    }
}


//pega um usuário por id 
   export async function get_users_id(id) {

    try {

        const url = "https://jsonplaceholder.typicode.com/users/" + id;

        const response = await fetch(url);

        if (!response) {
            throw new Error("Erro na requisição: " + response.status);
        }
        else{
            const user = await response.json();

            return user;
        }
    } 
    catch (error) {

        return "Erro ao buscar usuário por ID:", error;

    }

}
//carrega o usuario no html por id no html
    export async function load_users_id(id) {

    try {

        const user = await get_users_id(id);

        const conteiner = document.getElementById("user");

        if (!conteiner) {
            throw new Error("Elemento #user não encontrado no HTML");
        }

        conteiner.innerHTML = `<pre>${JSON.stringify(user, null, 2)}</pre>`;

    } 
    catch (error) {

        console.error("Erro ao carregar usuário:", error);

        const conteiner = document.getElementById("user");

        if (conteiner) {
            conteiner.innerHTML = "<p>Erro ao carregar usuário.</p>";
        }

    }

}


//pega todas as tarefas de um usuário por id 
export async function get_Userid_todos(userid) {

    try {

        const url = `https://jsonplaceholder.typicode.com/users/${userid}/todos`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const todos = await response.json();

        return todos;

    } 
    catch (error) {

        console.error("Erro ao buscar tarefas do usuário:", error);

        return [];

    }

}





//carrega todas as tarefas de um usuario no html 
export async function load_todo_id(userid) {

    try {

        const todo = await get_Userid_todos(userid);

        const conteiner = document.getElementById("todo");

        if (!conteiner) {
            throw new Error("Elemento #todo não encontrado no HTML");
        }

        conteiner.innerHTML = `<pre>${JSON.stringify(todo, null, 2)}</pre>`;

    } 
    catch (error) {

        console.error("Erro ao carregar tarefas:", error);

        const conteiner = document.getElementById("todo");

        if (conteiner) {
            conteiner.innerHTML = "<p>Erro ao carregar tarefas.</p>";
        }

    }

}




//pega uma tarefa por id 
export async function get_todos_id(id) {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const todo = await response.json();

        return todo;

    } 
    catch (error) {

        console.error("Erro ao buscar tarefa:", error);

        return null;

    }

}

//pega uma foto por id 
    export async function get_photo(id) {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const photo = await response.json();

        return photo;

    } 
    catch (error) {

        console.error("Erro ao buscar foto:", error);

        return null;

    }

}


//pega todas as fotos do primeiro album do usuário 
export async function get_user_album_photos(userid) {

  try {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/albums`);

    if (!response.ok) {
      throw new Error("Erro ao buscar álbuns: " + response.status);
    }

    const albums = await response.json();

    if (!albums || albums.length === 0) {
      return [];
    }

    const album = albums[0];

    const responsephotos = await fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`);

    if (!responsephotos.ok) {
      throw new Error("Erro ao buscar fotos: " + responsephotos.status);
    }

    const photos = await responsephotos.json();

    return photos;

  } 
  catch (error) {

    console.error("Erro ao buscar fotos do álbum:", error);

    return [];

  }

}
//carrega o album 1 do usuario no html
export async function load_user_album_photos(userid) {

    try {

        const photos = await get_user_album_photos(userid);

        const conteiner = document.getElementById("album");

        if (!conteiner) {
            throw new Error("Elemento #album não encontrado no HTML");
        }

        if (!photos || photos.length === 0) {
            conteiner.innerHTML = "<p>Nenhuma foto encontrada.</p>";
            return;
        }

        conteiner.innerHTML = `<pre>${JSON.stringify(photos, null, 2)}</pre>`;

    } 
    catch (error) {

        console.error("Erro ao carregar fotos do álbum:", error);

        const conteiner = document.getElementById("album");

        if (conteiner) {
            conteiner.innerHTML = "<p>Erro ao carregar fotos.</p>";
        }

    }

}


//pega todos os posts do usuário 
export async function get_posts_id(userid) {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`);

        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const data = await response.json();

        return data;

    } 
    catch (error) {

        console.error("Erro ao buscar posts do usuário:", error);

        return [];

    }

}


//carrega os posts de um usuário no html
export async function load_posts(userid) {

    try {

        const posts = await get_posts_id(userid);

        const conteiner = document.getElementById("posts");

        if (!conteiner) {
            throw new Error("Elemento #posts não encontrado no HTML");
        }

        if (!posts || posts.length === 0) {
            conteiner.innerHTML = "<p>Nenhum post encontrado.</p>";
            return;
        }

        conteiner.innerHTML = `<pre>${JSON.stringify(posts, null, 2)}</pre>`;

    } 
    catch (error) {

        console.error("Erro ao carregar posts:", error);

        const conteiner = document.getElementById("posts");

        if (conteiner) {
            conteiner.innerHTML = "<p>Erro ao carregar posts.</p>";
        }

    }

}



//pega os comentários de um post por id 
export async function get_comments_id(userpost) {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userpost}/comments`);

        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const comments = await response.json();

        return comments;

    } 
    catch (error) {

        console.error("Erro ao buscar comentários:", error);

        return [];

    }

}


//carrega os comeentarios de um post no html 
export async function load_comments(postid) {

    try {

        const comments = await get_comments_id(postid);

        const conteiner = document.getElementById("comments");

        if (!conteiner) {
            throw new Error("Elemento #comments não encontrado no HTML");
        }

        if (!comments || comments.length === 0) {
            conteiner.innerHTML = "<p>Nenhum comentário encontrado.</p>";
            return;
        }

        conteiner.innerHTML = `<pre>${JSON.stringify(comments, null, 2)}</pre>`;

    } 
    catch (error) {

        console.error("Erro ao carregar comentários:", error);

        const conteiner = document.getElementById("comments");

        if (conteiner) {
            conteiner.innerHTML = "<p>Erro ao carregar comentários.</p>";
        }

    }

}









