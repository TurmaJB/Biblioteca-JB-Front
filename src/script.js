document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    fetch('http://localhost:3750/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            alert('Erro ao registrar usuário: ' + data.erro);
        } else {
            alert('Usuário registrado com sucesso!');
            window.location.href = ""
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao registrar usuário.');
    });
});






