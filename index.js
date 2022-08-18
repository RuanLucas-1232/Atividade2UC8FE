var listaUsuarios = [{Pedro: {idade: 18, email: 'pedro@gmail.com'}}, {João: {idade: 20, email: 'joao@gmail.com'}}, {Marcos: {idade: 24, email: 'marcos@gmail.com'}}, {Antônio: {idade: 25, email: 'julio@gmail.com'}}]

if (listaUsuarios.length <= 100) {
    console.log('Insira seu nome');
    const nome = 'Júlio'
    const idade = '18'
    const email = 'julio@gmail.com'
    const data  = '19/07/2022'

    let dataAtual = '01/07/2022'
    
    if (idade >= 18) {
        if (data > dataAtual) {
            const usuario = {nome, idade, email}
            
            console.log('Dados cadastrados com sucesso!');
        
        } else {
            console.log('Digite a data do evento corretamente');
            
        }
    } else {
        console.log('Não pode participar, pois é menor de idade.');
    }
}
