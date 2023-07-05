FROM ubuntu:latest

#Comando fixo
ENTRYPOINT [ "echo", "Hello" ]
#CMD [ "echo", "World" ]
#Comando variavel que entra como parametro do entrypoint
CMD [ "Celso" ]