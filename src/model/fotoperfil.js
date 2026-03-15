// A chave é o ID do usuário, o valor é o caminho da foto
const fotoperfil = {
    1: "../../../public/fp1.jpeg",
    2: "../../../public/fp2.jpeg",
    3: "../../../public/fp3.jpeg",
    4: "../../../public/fp4.jpeg",
    5: "../../../public/fp5.jpeg",
    6: "../../../public/fp6.jpeg",
    7: "../../../public/fp7.jpeg",
    8: "../../../public/fp8.jpeg",
    9: "../../../public/fp9.jpeg",
    10: "../../../public/fp10.jpeg"


};

async function get_fotoperfil(id) {
    return fotoperfil[id]; 
}

export { get_fotoperfil };