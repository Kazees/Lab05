# Baseado na imagem nginx:alpine
FROM nginx:alpine

# Remove a configuração padrão para evitar conflitos.
RUN rm /etc/nginx/conf.d/default.conf

# Copia tudo que estiver na pastar src
COPY . /usr/share/nginx/html/

# Expor a porta 80 do container para que possamos nos conectar a ela
EXPOSE 80