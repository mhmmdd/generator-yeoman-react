```shell
$ npm init -y
$ npm i --save yeoman-generator
```
## After generators
```shell
$ npm link
$ npm install -g yo
```

## Run the generator
```shell
$ yo --generators
$ yo yeoman-react
```

## 01 - Changes
1. Prompts
2. Run Sub Generator
```shell
$ yo yeoman-react:router
```
3. Debugging
````shell
$ which yo
# C:\Users\Ba\AppData\Roaming\npm\yo
$ node --inspect C:\Users\Ba\AppData\Roaming\npm\node_modules\yo\lib\cli.js yeoman-react
#$ jhipster --blueprints react-native jdl online-shop.jh
````

Yeoman queues
```js
static get queues() {
  return [
    'initializing',
    'prompting',
    'configuring',
    'default',
    'writing',
    'transform',
    'conflicts',
    'install',
    'end'
  ];
}
```
```shell
$ npm install -g nodemon
#https://stackoverflow.com/a/4475095
$ npm install --save @types/node

#yeoman-environment -> Generator -> runLoop (GroupedQueue)
```

## For "generator-jhipster-react-native" blueprint
```shell
# https://github.com/jhipster/jdl-samples

$ cd example-react-native
$ jhipster --blueprints react-native jdl ./blog.jdl --ignore-application

$ which jhipster
# C:\Users\Ba\AppData\Roaming\npm\jhipster
$ set DEBUG=yeoman:generator && nodemon --inspect --inspect-brk C:\Users\Ba\AppData\Roaming\npm\node_modules\generator-jhipster\cli\jhipster.js --blueprints react-native jdl ./blog.jdl 

```