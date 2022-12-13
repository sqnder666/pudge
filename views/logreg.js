<% layout('layout/page.ejs') %>
   <div class="conteiner">
      <h1>Регистрация и вход</h1>
      <p>Введите имя пользователя и пароль, если такого пользователя нет, то он будет создан.</p>
      <form class="form-horizontal" action="/logreg" method="post">
         <div class="form-group">
             <label class="control-label col-sm-1">Имя</label>
             <div class="col-sm-5">
                 <input class="form-control" type="text"placeholder="Введите имя" name="username"/>
             </div>
         </div>
         <div class="form-group">
             <label class="control-label col-sm-1">Пароль</label>
             <div class="col-sm-5">
                 <input class="form-control" type="password" placeholder="Введите пароль" name="password"/>
             </div>
         </div>
         <div class="form-group">
             <div class="col-sm-offset-1 col-sm-5">
                 <input class="btn btn-primary" type="submit" value="Войти"/>
             </div>
         </div>
     </form>     
   </div>