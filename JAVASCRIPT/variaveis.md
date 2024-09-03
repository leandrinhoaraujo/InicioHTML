# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de códigos
* Identificadores
* 3 Palavras reservadas para criar uma variável
  * var
  * let
  * const
*Uma variável javascript é fracamente tipada, e pode mudar de acordo com o que atribuimos nela,
com exceção se for uma const que não pode ser alterada.

# Scope

* Escopo determina a visibilidade de alguma variável no JavaScript

# Block statement

* Vamos iniciar um bloco
{
 // Aqui dentro é um bloco e posso colocar qualquer código
} // Aqui fechamos o bloco




# Var
```js
//Var é global e poderá funcionar fora de um escopo de bloco

console.log('> existe x antes do bloco?', x)

{
  var x = 0 
}

console.log('> existe x depois do bloco?', x)

```

