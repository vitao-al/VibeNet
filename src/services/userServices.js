import * as api from "../controller/api.js"
import { User } from "../model/user.js";
import { get_fotoperfil } from "../model/fotoperfil.js";

const users = []; // Aqui pode ser const pois usamos .push()

for (let i = 1; i <= 10; i++) {
  const userData = await api.get_users_id(i);
  const userPosts = await api.get_posts_id(i);
  
  // CORREÇÃO: Use 'let' para permitir que o valor mude
  let userFoto = ""; 

  const fotoData = await get_fotoperfil(i);

  if (!fotoData) {
    userFoto = "../../../defaultfoto.png";
  } else {
    // Se fotoData for apenas a string do caminho, use-a direto
    userFoto = fotoData; 
  }

  if (!userData) {
    console.log(`Usuário ${i} não existe!`);
  } else {
    const user = new User(userData, userFoto, userPosts);
    users.push(user);
  }
}

export function sortearUsuarios(users) {
    // Criamos uma cópia para não estragar o array original
    let listaCopiada = [...users]; 
    
    for (let i = listaCopiada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de lugar (Destructuring)
        [listaCopiada[i], listaCopiada[j]] = [listaCopiada[j], listaCopiada[i]];
    }
    
    return listaCopiada;
}
export function timeline(users) {
    // Criamos uma cópia para não estragar o array original
    let listaCopiada = [...users]; 
    
    for (let i = listaCopiada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de lugar (Destructuring)
        [listaCopiada[i], listaCopiada[j]] = [listaCopiada[j], listaCopiada[i]];
    }
    
    return listaCopiada;
}

export { users};
console.log(users);