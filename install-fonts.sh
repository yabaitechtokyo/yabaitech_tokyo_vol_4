#!/bin/bash

function installFont() {
    local name=$1
    local url=$2
    curl -L ${url} -o ${name}.zip
    unzip -nq ${name}.zip -d .satysfi/local/fonts/${name}
    rm ${name}.zip
}

set -eux

mkdir -p .satysfi/local/fonts
mkdir -p .satysfi/local/mathfonts

installFont CMU https://www.fontsquirrel.com/fonts/download/computer-modern
installFont Inconsolata https://www.fontsquirrel.com/fonts/download/Inconsolata
installFont NotoSans https://noto-website-2.storage.googleapis.com/pkgs/NotoSans-hinted.zip
installFont NotoSansMono https://noto-website-2.storage.googleapis.com/pkgs/NotoMono-hinted.zip
installFont NotoSerif https://noto-website-2.storage.googleapis.com/pkgs/NotoSerif-hinted.zip
installFont RobotoMono https://www.wfonts.com/download/data/2016/05/18/roboto-mono/roboto-mono.zip

curl -L http://mirrors.ctan.org/fonts/Asana-Math/Asana-Math.otf -o .satysfi/local/mathfonts/Asana-Math.otf

opam install satysfi-fonts-dejavu
satyrographos  install
