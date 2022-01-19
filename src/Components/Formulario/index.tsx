import  Style from'./style.module.scss'

export default () => {
  return ( 

    <>
     <div className={Style.Email}>
       <p>E-mail</p>
         <input type="text"  placeholder="Digite seu email aqui" />
     </div>
   
     <div className={Style.Senha}>
       <p>Password</p>
         <input type="textDois"  placeholder="Digite seu email aqui" />
     </div>
   </>
  );
}