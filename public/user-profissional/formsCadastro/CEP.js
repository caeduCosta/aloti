function pesquisarCEP(cep) {
    // Remove caracteres inválidos do CEP
    cep = cep.replace(/\D/g, '');

    if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
          } else {
            alert("CEP não encontrado!");
          }
        })
        .catch(error => {
          alert("Erro ao buscar o CEP.");
          console.error(error);
        });
    } else {
      alert("Formato de CEP inválido!");
    }
  }