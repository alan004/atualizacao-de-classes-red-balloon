# atualizacao-de-classes-red-balloon

Ao final do ano letivo é preciso saber quais turmas serão criadas no ano seguinte, subindo o "ano" do aluno. Da última vez isso foi feito em excel usando várias formulas então resolvi criar algo que faça iso automaticamente.

Primeiro, as classes atuais da rede são inseridas como string dentro array "classes". Ao final do tratamento, as novas classes serão inseridas no array "novasClasses". Sobre o excecoes, explico mais tarde quando chegarmos na lógica do IF. <br />
![Linhas 1 a 3 de main.js](https://user-images.githubusercontent.com/17684918/210118367-cc659c84-6109-42fc-8599-1f4f95625706.png)

Usando o forEach, iremos tratar cada elemento do array através da função sobeEstagio. Antes de executar a lógica, são declaradas duas constantes que vão ajudar no tratamentos das strings que recebemos, uma serve para procurar o dígito dentro da string e outra para encontrar os casos que trataremos como exceções, puxando os dois primeiros caracteres. <br />
![Linha 5 de main.js](https://user-images.githubusercontent.com/17684918/210118378-e2d447c4-5443-4309-ad73-6c32d0af3f40.png)

Daí partimos para o IF, que é basicamente pegar o primeiro caractere, somar 1 ao número da classe atual e completar com os caracteres restantes. Caso a classe atual não tenha número, o início desse "restante" muda, por isso nos dois a única mudança nas duas primeiras condições é no "slice()". <br />
![Linhas 14 e 17 de main.js](https://user-images.githubusercontent.com/17684918/210118386-5f6211db-c7ec-4026-bb83-a3041dbd8087.png)

Há também 4 tipos de exceção, que estão registradas no array "excecoes". Fiz dessa forma porque se fosse para usar cada uma delas dentro da comparação o código ficaria poluído assim:
![If com 5 condicionais para a mesma constante](https://user-images.githubusercontent.com/17684918/210118391-f2f2ea7e-6397-46f0-86e1-50302f088b3a.png)

Usando o array.incudes() consigo pesquisar se alguma exceção está no array "classes" e o código fica bem mais limpo.Caso o retorno seja true, a tratativa destas entra na última cadeia de IFs. <br />
![Linha 12 de main.js](https://user-images.githubusercontent.com/17684918/210118395-642bc562-ec30-4f19-aaac-381b5b9574ad.png)

Depois de fazer a operação necessária, a informação de nova classe/turma é enviada para o array "novasClasses" utilizando o novasClasses.push(). Por fim, ao final de tudo isso, as novas classes vão ser exibidas na tela. <br />
![Resultado do prejeto com a exibição do array novasClasses](https://user-images.githubusercontent.com/17684918/210118412-f596a6a6-77e4-41b0-a1e8-6c1d53f76637.png)

Foi bem divertido fazer isso aqui e ir evoluindo o código aos poucos. Uma possível evolução seria o usuário digitar essas classes atuais em tela para ai sim tratar os dados, ao invés de já começarmos com o array preenchido. Enfim, um bom exercício de fim de semana.
