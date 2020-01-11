all: article.satyh figs/flowchart.pdf 

%.pdf: %.dot
	dot -Tpdf $< -o $@

article.satyh : article.org article.template.satyh
	pandoc -t ../pandoc-satysfi-template/satysfi.lua -s $< --template ./article.template.satyh -o $@
