document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-signo');
    const resultadoDiv = document.getElementById('resultado');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário
            const dataNascimento = new Date(document.getElementById('data-nascimento').value);
            const dia = dataNascimento.getUTCDate();
            const mes = dataNascimento.getUTCMonth() + 1; // Meses começam em 0
            
            // Chama a função para determinar o signo
            const signo = obterSigno(dia, mes);
            resultadoDiv.innerHTML = `<h2>Seu signo é: ${signo}</h2>`;
        });
    } else {
        console.error('Elemento com ID "form-signo" não encontrado.');
    }

    // Função para obter o signo
    function obterSigno(dia, mes) {
        if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) return 'Áries';
        if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) return 'Touro';
        if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) return 'Gêmeos';
        if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) return 'Câncer';
        if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) return 'Leão';
        if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) return 'Virgem';
        if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) return 'Libra';
        if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) return 'Escorpião';
        if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) return 'Sagitário';
        if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) return 'Capricórnio';
        if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) return 'Aquário';
        if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) return 'Peixes';
        return 'Signo não encontrado';
    }
});
