# mono-repo
The `mono-repo` repository contains three NPM packages:
 - mono-repo-hello-world
 - mono-repo-goodybye-world
 - mono-repo-say-something

The dependency tree for the mentioned packages is:
 - mono-repo-say-something
    - mono-repo-goodbye-world
      - mono-repo-hello-world


## Workflow
The `mono-repo` uses a combination of `Yarn` and `Lerna` to host three packages
using a single repo. It
 - uses Yarn's `workspaces` to link dependencies
 - uses Lerna's workflow to release packages in Github and npm


## Prerequisites
```
brew install --devel yarn
yarn global add lerna
```

## Usage
```
git clone git@github.com:mehdivk/mono-repo.git
cd mono-repo
yarn
```

At this stage, Yarn made a link between the mentioned packages above in such a
way that they can use each other.


### Test
```
cd packages/mono-repo-say-something
yarn run start
```

You should get the following message
```
yarn run v0.28.4
$ node index.js
A message from the amazing [hello-world] package
A message from the amazing [goodbye-world] module
A message from the amazing [say-something] module
✨  Done in 0.13s.
```

### Releasing a new module
To do Github and NPM releeases, change the origin Git remote repository to a clone
of this project and login to NPM using `npm login`. Change something and do `lerna publish`
