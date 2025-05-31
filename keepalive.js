import https from 'https'
const TUNNEL_URL = 'https://api-balanca.loca.lt';

function keepAlive() {
    https.get(TUNNEL_URL, (res) => {
        console.log(`Keep-alive enviado: statusCode: ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`Erro: ${e.message}`);
    });
}

// Executa a função a cada 5 minutos
setInterval(keepAlive, 1 * 60 * 1000);

console.log('Script de keep-alive iniciado...');
