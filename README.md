[![Actions Status](https://github.com/nyuichi/yabai2020S/workflows/build/badge.svg)](https://github.com/nyuichi/yabai2020s/actions)


# Dependencies
* satysfi

# How to Build
```shell
$ opam install satysfi-fonts-dejavu
$ opam install satysfi-fonts-asana-math
$ opam install satysfi-base
$ satyrographos install
$ git submodule init
$ git submodule update
$ satysfi main.saty
```

# Peer review process
1. Create a new branch for reviewing one article (ex: review-MasWag-article)
2. Create a PR for the branch
2. (Reviewer) Add review comments to article source code via `\review-comment` or `+review-comment`
    * like `\review-comment \`zeptometer\` {LGTM}`
    * see [example code](./class/__test__/misc-commandssatyh)
3. (Reviewer/Reviewee) Disucuss in PR page
4. (Reviewee) Make changes to the branch and push
    * Delte review comments when they're resolved
5. Merge the PR when all the comments are resolved
