

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



const errorMessage = (input, message) => {
  const formControl = input.parentElement;  //pelo input agora está pegando o pai
  
  const span = formControl.querySelector('span');

  formControl.className = 'form-control error';
  span.innerText = message;
}

const successMessage = (input) => {
  
  const formControl = input.parentElement;
  formControl.className = 'form-control success';

}

const successSubmit = () => {
  let form_control = document.getElementsByClassName('form-control');

// sabemos que tem um array, agora precisamos contar quantos tem lá dentro
  let count = form_control.length - 1;
  let soma = 0;

  for (let i = 0; i < form_control.length; i++){

    if (form_control[i].className === 'form-control success'){

      soma = 0 + i;
      sendData(count, soma);
    }
  }  
  console.log(count, soma);
}



function sendData(count, soma){
  if (count === soma){
    console.log('dados enviados com sucesso');
  }
}



// FUNÇÃO

function validarDadosDeEntrada(){
//  console.log('executando o callback')

//  const nomeValue = nome.value.trim();
//

  if (nome.value.trim() === ''){
    errorMessage(nome, "O nome do usuário deve ser informado");
  }
  else {
    successMessage(nome);
  }
///////////////////////////////////////////////////
  if (email.value.trim() === ''){

    errorMessage(email, "O e-mail é obrigatório");
  }  
  else {
    successMessage(email);
  }
///////////////////////////////////////////////////
  if (senha.value.trim() === ''){

    errorMessage(senha, 'A senha deve ser informada');
  }
  else {
    successMessage(senha);
  } 
///////////////////////////////////////////////////
  if (confirmeSenha.value.trim() === ''){

    errorMessage(confirmeSenha, 'Digite novamente a senha');
  }
  else {
    successMessage(confirmeSenha);
  }
///////////////////////////////////////////////////
  if (telefone.value.trim() === ''){

    errorMessage(telefone, 'Digite o telefone');
  }
  else {
    successMessage(telefone);
  }
///////////////////////////////////////////////////
  if (data.value.trim() === ''){

    errorMessage(data, 'A data deve ser informada');
  }
  else {
    successMessage(data);
  }



  successSubmit()
};
