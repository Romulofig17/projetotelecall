function cadastrar() {
  // Obter os valores do formulário
  var firstName = document.getElementById("firstname").value;
  var birthdate = document.getElementById("birthdate").value;
  var motherName = document.getElementById("mothername").value;
  var cpf = document.getElementById("cpf").value;
  var cellphone = document.getElementById("cellphone").value;
  var phone = document.getElementById("phone").value;
  var cep = document.getElementById("cep").value;
  var rua = document.getElementById("rua").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado").value;
  var number = document.getElementById("number").value;
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  // Criar um objeto com os dados do usuário
  var userData = {
    firstName: firstName,
    birthdate: birthdate,
    motherName: motherName,
    cpf: cpf,
    cellphone: cellphone,
    phone: phone,
    cep: cep,
    rua: rua,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    number: number,
    login: login,
    password: password,
  };

  // Enviar os dados para o servidor (substitua a URL pelo seu endpoint real)
  fetch("https://seuservidor.com/cadastrar-usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Cadastro bem-sucedido:", data);
      // Adicione aqui qualquer lógica adicional após o cadastro bem-sucedido
    })
    .catch((error) => {
      console.error("Erro ao cadastrar:", error);
    });
}
