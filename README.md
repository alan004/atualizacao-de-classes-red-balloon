# atualizacao-de-classes-red-balloon

Ao final do ano letivo é preciso saber quais turmas serão criadas no ano seguinte, subindo o "ano" do aluno. Da última vez isso foi feito em excel usando várias formulas então resolvi criar algo que faça iso automaticamente.

Primeiro, as classes atuais da rede são inseridas como string dentro array "classes". Ao final do tratamento, as novas classes serão inseridas no array "novasClasses". Sobre o excecoes, explico mais tarde quando chegarmos na lógica do IF.

Usando o forEach, iremos tratar cada elemento do array através da função sobeEstagio. Antes de executar a lógica, são declaradas duas constantes que vão ajudar no tratamentos das strings que recebemos, uma serve para procurar o dígito dentro da string e outra para encontrar os casos que trataremos como exceções, puxando os dois primeiros caracteres. 

Daí partimos para o IF, que é basicamente pegar o primeiro caractere, somar 1 ao número da classe atual e completar com os caracteres restantes. Caso a classe atual não tenha número, o início desse "restante" muda, por isso nos dois a única mudança nas duas primeiras condições é no "slice()".

Há também 4 tipos de exceção, que estão registradas no array "excecoes". Fiz dessa forma porque se fosse para usar cada uma delas dentro da comparação o código ficaria poluído assim:

Usando o array.incudes() consigo pesquisar se alguma exceção está no array "classes" e o código fica bem mais limpo.Caso o retorno seja true, a tratativa destas entra na última cadeia de IFs.

Depois de fazer a operação necessária, a informação de nova classe/turma é enviada para o array "novasClasses" utilizando o novasClasses.push(). Por fim, ao final de tudo isso, as novas classes vão ser exibidas na tela.

Foi bem divertido fazer isso aqui e ir evoluindo o código aos poucos. Uma possível evolução seria o usuário digitar essas classes atuais em tela para ai sim tratar os dados, ao invés de já começarmos com o array preenchido. Enfim, um bom exercício de fim de semana.
