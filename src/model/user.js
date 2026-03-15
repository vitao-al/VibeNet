class User {
    id = '';
    name = '';
    username = '';
    email = '';
    address = {}; 
    phone = '';
    website = '';
    company = {};    
    fotoperfil = '';
    posts = {};

  constructor(data,foto,posts) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.address = data.address; 
    this.phone = data.phone;
    this.website = data.website;
    this.company = data.company; // Mantém como o objeto literal {name, catchPhrase, bs}
    this.fotoperfil = foto;
    this.posts = posts
  }
}
export {User}