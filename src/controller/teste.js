
export async function get_users(){
   const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => console.log(json));

  return console.log(users);
}
