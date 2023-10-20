
export default function enviarMensagem (mensagem: string){
    return ()=>{
        fetch('http://18.230.23.227:3000/enviar-mensagem', {
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