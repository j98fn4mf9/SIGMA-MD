FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/j98fn4mf9/SIGMA-MD /root/j98fn4mf9/SIGMA-MD
WORKDIR /root/j98fn4mf9/SIGMA-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 
