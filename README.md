<div align="center">
  <a title="service-reports">
    <img alt="Projeto 822" src="https://i.imgur.com/WOsYivs.png" />
  </a>
  <br />
  <h1>Service-Reports</h1>
</div>

<p align="center">
  API de alimentação de MySQL para monitoramento de Regressões Automatizadas no Grafana
</p>

---

## Dependências

- NodeJS 12.16.0 LTS (https://nodejs.org/en/)
- MySQL 5.7.29 +

## Inicialização

- Para inicializar a API em um ambiente local, certifique-se de ter o MySQL rodando na porta 3306:
```bash
$ npm install pm2 -g
$ npm install 
$ npm run start:local
```

- Para inicializar a API em um ambiente Docker, certifique-se de que as portas 3306 (MySQL), 8181 (API) e 3000 (Grafana) estejam disponíveis:
```bash
$ docker-compose up
```


## Documentação

- Para verificar a documentação Swagger da aplicação, acesse:
    
    - http://localhost:5000/api-docs
    - http://localhost:8181/api-docs (DOCKER)
