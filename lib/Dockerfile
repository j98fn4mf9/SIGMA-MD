FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/jamesshbw3/SIGMA-MD /root/jamesshbw3/SIGMA-MD
WORKDIR /root/jamesshbw3/SIGMA-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 
