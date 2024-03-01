FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/j98fn4mf9/SIGMA-MD /root/j98fn4mf9/SIGMA-MD
WORKDIR /root/j98fn4mf9/SIGMA-MD/
RUN yarn global add yarn@latest
RUN yarn install
EXPOSE 8000
CMD ["yarn", "start"]
 
 
