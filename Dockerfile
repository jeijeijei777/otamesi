FROM golang:1.11.5

RUN mkdir -p $HOME/go/bin
ENV GOPATH=$HOME/go
ENV GOBIN=$GOPATH/bin
ENV PATH=$PATH:$GOBIN

RUN mkdir -p $GOPATH/src/github.com/lcnem && \
    cd $GOPATH/src/github.com/lcnem && \
    git clone https://github.com/lcnem/lcnemint && \
    cd lcnemint && git checkout master && \
    make get_tools && \
    dep ensure -v && \
    make install

EXPOSE 26656
EXPOSE 26657
