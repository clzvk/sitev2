// Selecionando o formulário de adicionar produto
const addProductForm = document.getElementById('add-product-form');

// Adicionando um listener para o evento de submit do formulário
addProductForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    // Obtendo os valores dos campos do formulário
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productImage = document.getElementById('product-image').files[0];

    // Criando um objeto FormData
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);

    // Enviando os dados para o backend via fetch
    fetch('/api/add-product', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao adicionar produto.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Produto adicionado com sucesso:', data);
        // Lógica adicional após o sucesso do envio, como redirecionamento ou atualização da interface
    })
    .catch(error => {
        console.error('Erro ao adicionar produto:', error);
        // Lidar com o erro, como exibir uma mensagem de erro para o usuário
    });

    // Resetando o formulário após o envio
    addProductForm.reset();
});
