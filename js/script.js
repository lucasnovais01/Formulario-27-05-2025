

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmeSenha = document.getElementById("confirmeSenha");
const telefone = document.getElementById("telefone");
const data = document.getElementById("data");


form.addEventListener('submit', (e)=>{  //IMPORTANTE COLOCAR O 'e'
  e.preventDefault(); //VAI EVITAR O COMPORTAMENTO PADRÃO 
  validarDadosDeEntrada();
});



const errorMessage = (message) => {
  console.log(message);
}
const sucessMessage = (message) => {

}


function validarDadosDeEntrada(){
//  console.log('executando o callback')

//  const nomeValue = nome.value.trim();
//

  if (nome.value.trim() === ''){
    errorMessage(nome, "O nome do usuário deve ser informado");
  }
  else {
    sucessMessage();
  }
///////////////////////////////////////////////////
  if (email.value.trim() === ''){

    errorMessage(email, "O e-mail é obrigatório");
  }  
  else {
    sucessMessage();
  }
///////////////////////////////////////////////////
  if (senha.value.trim() === ''){

    errorMessage(senha, 'A senha deve ser informada');
  }
  else {
    sucessMessage();
  } 
///////////////////////////////////////////////////
  if (confirmeSenha.value.trim() === ''){

    errorMessage(confirmeSenha, 'Digite novamente a senha');
  }
  else {
    sucessMessage();
  }
///////////////////////////////////////////////////
  if (telefone.value.trim() === ''){

    errorMessage(telefone, 'Digite o telefone');
  }
  else {
    sucessMessage();
  }
///////////////////////////////////////////////////
  if (data.value.trim() === ''){

    errorMessage(data, 'A data deve ser informada');
  }
  else {
    sucessMessage();
  }
};
