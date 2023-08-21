
var novoMapa = new Map()

novoMapa.set('11/11/2011 - 23:30 - URL', {title:'Google', url:'https://www.google.com'});
novoMapa.set('11/11/2011 - 23:30 - URL', {title:'Google', url:'https://www.google.com'});
novoMapa.set('11/11/2011 - 23:30 - URL', {title:'Google', url:'https://www.google.com'});
novoMapa.set('11/11/2011 - 23:31 - URL', {title:'Google', url:'https://www.google.com'});
novoMapa.set('11/11/2011 - 23:31 - URL', {title:'Youtube', url:'https://www.youtube.com'});

var resultado1 = novoMapa;
console.log(resultado1);

var resultado2 = novoMapa.get('11/11/2011 - 23:31 - URL');
console.log(resultado2);
