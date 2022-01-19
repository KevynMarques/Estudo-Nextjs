import  Style from './style.module.scss'
import Formulario from '../Formulario';
import ButtonLogin from '../ButtonLogin';

export default () => {
  return (
    <>
      <div className={Style.Card}>
        <p>Sign in to GitHub</p>
        <Formulario />
        <ButtonLogin />
        <div className={Style.logo}>
        <img className='image-fundo' src="/image/spider.jpg" />
        </div>
      </div>
    </>
  );
}