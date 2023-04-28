# Users Management (Back-end)

Projeto feito para praticar Docker. Fazendo containers de aplicações diferentes(Back e Front) se comunicarem na mesma Network.

## Rodando o projeto

Você precisa ter o [Git](https://git-scm.com/) e o [Docker](https://www.docker.com/) instalados na sua máquina.
<br/>
OBS: Verifique a [documentação](https://github.com/gabriellima2/users-management-docker-front) do frontend.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/users-management-docker-api.git

2. Acesse a pasta:
$ cd users-management-docker-api

3. Crie a imagem:
$ docker build -t <nome-da-imagem> .

4. Crie e rode o container:
$ docker run -i -d --rm -p "3000:3000" <nome-da-imagem>

O servidor será aberto em http://localhost:3000
```
