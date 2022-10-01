Este projeto tem como objetivo desenvolver um login utilizando as tecnologias do JWT para validação.

https://www.youtube.com/watch?v=qEBoZ8lJR3k&list=PLnDvRpP8BneyHealXbzntUoFtE4SrFWWW&index=2

minuto 42:13 erro no findOne()


ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git init
Initialized empty Git repository in C:/server/Apache24/htdocs/Node/login/.git/

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (master)
$ git branch -M main

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git commit -m "first commit"
On branch main

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git add .

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git commit -m "first commit"
[main (root-commit) 3ab879e] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git remote add https://github.com/gabrielbatistacarvalho/login.git
usage: git remote add [<options>] <name> <url>

    -f, --fetch           fetch the remote branches
    --tags                import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --track <branch>  branch(es) to track
    -m, --master <branch>
                          master branch
    --mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from


ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git remote add origin https://github.com/gabrielbatistacarvalho/login.git

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git push -u origin main
remote: Repository not found.
fatal: repository 'https://github.com/gabrielbatistacarvalho/login.git/' not found

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 221 bytes | 221.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/gabrielbatistacarvalho/login.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (main)
$ git branch -M desenvolvimento

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git status
On branch desenvolvimento
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git add .

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git status
On branch desenvolvimento
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md


ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git commit -m "Atualizando o README"
[desenvolvimento e4e219f] Atualizando o README
 1 file changed, 1 insertion(+), 1 deletion(-)

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git push -u origin desenvolvimento
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 6 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 356 bytes | 356.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'desenvolvimento' on GitHub by visiting:
remote:      https://github.com/gabrielbatistacarvalho/login/pull/new/desenvolvimento
remote:
To https://github.com/gabrielbatistacarvalho/login.git
 * [new branch]      desenvolvimento -> desenvolvimento
branch 'desenvolvimento' set up to track 'origin/desenvolvimento'.

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ node -v
v16.17.0

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ npm -v
8.15.0

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ npm init -y
Wrote to C:\server\Apache24\htdocs\Node\login\package.json:

{
  "name": "login",
  "version": "1.0.0",
  "description": "Este projeto tem como objetivo desenvolver um login utilizando as tecnologias do JWT para validação.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gabrielbatistacarvalho/login.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/gabrielbatistacarvalho/login/issues"
  },
  "homepage": "https://github.com/gabrielbatistacarvalho/login#readme"
}



ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ npm install bcrypt dotenv express jsonwebtoken mongoose

added 158 packages, and audited 159 packages in 34s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ npm install --save-dev nodemon

added 27 packages, and audited 186 packages in 5s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ npm start

> login@1.0.0 start
> nodemon app.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Estamos conectados!
Estamos conectados!
Estamos conectados!
Estamos conectados!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\app.js:19
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@authjwt.bhw0qo6.mongodb.net/?retryWrites=true&w=majority`).then(() => )
                                                                               
                                               ^

SyntaxError: Unexpected token ')'
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1055:15)
    at Module._compile (node:internal/modules/cjs/loader:1090:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
MongoServerError: bad auth : Authentication failed.
    at Connection.onMessage (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:207:30)
    at MessageStream.<anonymous> (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:60:60)
    at MessageStream.emit (node:events:513:28)
    at processIncomingData (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:132:20)
    at MessageStream._write (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:391:12)
    at _write (node:internal/streams/writable:332:10)
    at MessageStream.Writable.write (node:internal/streams/writable:336:10)    
    at TLSSocket.ondata (node:internal/streams/readable:754:22)
    at TLSSocket.emit (node:events:513:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  [Symbol(errorLabels)]: Set(1) { 'HandshakeError' }
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
MongoServerError: bad auth : Authentication failed.
    at Connection.onMessage (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:207:30)
    at MessageStream.<anonymous> (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:60:60)
    at MessageStream.emit (node:events:513:28)
    at processIncomingData (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:132:20)
    at MessageStream._write (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:391:12)
    at _write (node:internal/streams/writable:332:10)
    at MessageStream.Writable.write (node:internal/streams/writable:336:10)    
    at TLSSocket.ondata (node:internal/streams/readable:754:22)
    at TLSSocket.emit (node:events:513:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  [Symbol(errorLabels)]: Set(1) { 'HandshakeError' }
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
MongoServerError: bad auth : Authentication failed.
    at Connection.onMessage (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:207:30)
    at MessageStream.<anonymous> (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:60:60)
    at MessageStream.emit (node:events:513:28)
    at processIncomingData (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:132:20)
    at MessageStream._write (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:391:12)
    at _write (node:internal/streams/writable:332:10)
    at MessageStream.Writable.write (node:internal/streams/writable:336:10)    
    at TLSSocket.ondata (node:internal/streams/readable:754:22)
    at TLSSocket.emit (node:events:513:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  [Symbol(errorLabels)]: Set(1) { 'HandshakeError' }
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
MongoServerError: bad auth : Authentication failed.
    at Connection.onMessage (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:207:30)
    at MessageStream.<anonymous> (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:60:60)
    at MessageStream.emit (node:events:513:28)
    at processIncomingData (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:132:20)
    at MessageStream._write (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:391:12)
    at _write (node:internal/streams/writable:332:10)
    at MessageStream.Writable.write (node:internal/streams/writable:336:10)    
    at TLSSocket.ondata (node:internal/streams/readable:754:22)
    at TLSSocket.emit (node:events:513:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  [Symbol(errorLabels)]: Set(1) { 'HandshakeError' }
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
MongoServerError: bad auth : Authentication failed.
    at Connection.onMessage (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:207:30)
    at MessageStream.<anonymous> (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\connection.js:60:60)
    at MessageStream.emit (node:events:513:28)
    at processIncomingData (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:132:20)
    at MessageStream._write (C:\server\Apache24\htdocs\Node\login\node_modules\mongodb\lib\cmap\message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:391:12)
    at _write (node:internal/streams/writable:332:10)
    at MessageStream.Writable.write (node:internal/streams/writable:336:10)    
    at TLSSocket.emit (node:events:513:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  [Symbol(errorLabels)]: Set(1) { 'HandshakeError' }
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
root-57641971
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
Estamos conectados!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
git status


ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git status
On branch desenvolvimento
Your branch is up to date with 'origin/desenvolvimento'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        app.js
        package-lock.json
        package.json

nothing added to commit but untracked files present (use "git add" to track)   

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git add .
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git commit -m "Criação dos arquivos iniciais do módulo de login"
[desenvolvimento 2301bea] Criação dos arquivos iniciais do módulo de login
 4 files changed, 3354 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 app.js
 create mode 100644 package-lock.json
 create mode 100644 package.json

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git push -u origin desenvolvimento
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 6 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 38.03 KiB | 5.43 MiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/gabrielbatistacarvalho/login.git
   e4e219f..2301bea  desenvolvimento -> desenvolvimento
branch 'desenvolvimento' set up to track 'origin/desenvolvimento'.

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ npm start

> login@1.0.0 start
> nodemon app.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\models\User.js:3
const User  = mongoosemodel('User', {
              ^

ReferenceError: mongoosemodel is not defined
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\models\User.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\server\Apache24\htdocs\Node\login\app.js:14:14)  
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
C:\server\Apache24\htdocs\Node\login\app.js:73
        res.status(500).json({ msg: 'Erro no servidor'! })
                                                      ^

SyntaxError: Unexpected token '!'
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1055:15)
    at Module._compile (node:internal/modules/cjs/loader:1090:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
C:\server\Apache24\htdocs\Node\login\app.js:49
    const userExists = await User.findOne({ email: email })
                                  ^

TypeError: User.findOne is not a function
    at C:\server\Apache24\htdocs\Node\login\app.js:49:35
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:346:12)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:280:10)
    at C:\server\Apache24\htdocs\Node\login\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:203:9)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
C:\server\Apache24\htdocs\Node\login\app.js:49
    const userExists = await User.findOne({ email: email })
                                  ^

TypeError: User.findOne is not a function
    at C:\server\Apache24\htdocs\Node\login\app.js:49:35
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:346:12)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:280:10)
    at C:\server\Apache24\htdocs\Node\login\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:203:9)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
C:\server\Apache24\htdocs\Node\login\app.js:49
    const userExists = await User.findOne({ email: email })
                                  ^

TypeError: User.findOne is not a function
    at C:\server\Apache24\htdocs\Node\login\app.js:49:35
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:346:12)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:280:10)
    at C:\server\Apache24\htdocs\Node\login\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:203:9)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!
C:\server\Apache24\htdocs\Node\login\app.js:49
    const userExists = await User.findOne({ email: email })
                                  ^

TypeError: User.findOne is not a function
    at C:\server\Apache24\htdocs\Node\login\app.js:49:35
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\layer.js:95:5)
    at C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:346:12)
    at next (C:\server\Apache24\htdocs\Node\login\node_modules\express\lib\router\index.js:280:10)
    at C:\server\Apache24\htdocs\Node\login\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:203:9)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Conectou ao banco!


ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git status
On branch desenvolvimento
Your branch is up to date with 'origin/desenvolvimento'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)        
        modified:   README.md
        modified:   app.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        models/

no changes added to commit (use "git add" and/or "git commit -a")

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$ git add .

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/gabrielbatistacarvalho/login.git
   2301bea..adf392c  desenvolvimento -> desenvolvimento
branch 'desenvolvimento' set up to track 'origin/desenvolvimento'.

ASICPDM01PE0697+CPD@ASICPDM01PE0697 MINGW64 /c/server/Apache24/htdocs/Node/login (desenvolvimento)
$
