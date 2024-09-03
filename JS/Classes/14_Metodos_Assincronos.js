// 14. Classes com Métodos Assíncronos
// Classes em JavaScript também podem ter métodos assíncronos, facilitando o uso de async/await para operações assíncronas.

class DataFetcher {
    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

const fetcher = new DataFetcher();
fetcher.fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Este exemplo demonstra como integrar operações assíncronas diretamente dentro de classes.

// Esses conceitos e padrões de design avançados ampliam a capacidade de trabalhar com classes 
// em JavaScript de forma eficiente, modular e escalável.Eles são particularmente úteis 
// em projetos de maior porte, onde a organização e reutilização de código são cruciais.