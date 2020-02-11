all: article.satyh figs/flowchart-crop.pdf 

%-crop.pdf: %.pdf
	pdfcrop $<

%.pdf: %.dot
	dot -Tpdf $< -o $@

article.satyh : article.org article.template.satyh ../../pandoc-satysfi-template/satysfi.lua
	pandoc -t ../../pandoc-satysfi-template/satysfi.lua -s $< --template ./article.template.satyh -o $@
