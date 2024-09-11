# Encurtador de URL 

API encurtadora de URL desenvolvida em Node.js 

## Endpoints

### POST - /shorten 

Parâmetros: ```{url: "https://example.com"}```

Resposta: ```{
"short_url": url-shortener-jjho.onrender.com/8mQWu7iDrpOppMAl9TgV7,
}```

### GET - /:urlId

Redireciona o usuário para a página original do link encurtado

Exemplo de requisição:  ```https://url-shortener-jjho.onrender.com/8mQWu7iDrpOppMAl9TgV7 ```

## Observações

* Url base pode mudar futuramente para tornar mais acessível 
* API pode apresentar estabilidade devido ao tipo de hosting
