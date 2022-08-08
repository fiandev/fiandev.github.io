function to(args) {
  var body = document.getElementsByTagName('body')[0]
  if(args='white'){
  body.classList.remove('dark-vertion');
  body.classList.add('white-vertion')
  }else if(args='black'){
  body.classList.add('dark-vertion');
  body.classList.remove('white-vertion');
  }
}
