
export default function enviarMensagem (mensagem: string, url: string){
    return ()=>{
        fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({mensagem: mensagem})
                    })
                        .then(response => {
                        if (response.ok) {
                        return response.json() 
                        } else {
                        throw new Error('Erro na solicitação POST.');
                        }
                    })
                        .catch(error => {
                        console.error('Erro:', error);
                    });
    }
}