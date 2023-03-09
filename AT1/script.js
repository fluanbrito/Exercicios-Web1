function gerarSenha() {
	const caracteres = ['a', 'e', 'i', 'o', 'u', 1, 2, 3, 4, 5];
	let senha = '';
  
	for (let i = 0; i < 8; i++) {
	  let indice = Math.floor(Math.random() * caracteres.length);
	  senha += caracteres[indice];
	}
  
	document.getElementById('senha').value = senha;
  
	const tabela = document.getElementById('senhas-geradas');
	const linha = tabela.insertRow();
	const coluna = linha.insertCell();
	coluna.textContent = senha;
  }
  