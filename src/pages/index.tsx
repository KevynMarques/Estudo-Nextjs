
import {GetServerSideProps} from 'next';
import Card from "../Components/Card";
import { stripe } from '../Services/stripe';

interface HomeProps {
  product: {
    priceId:string ; 
    amount: number;
  }
}

export default function Home({product}:HomeProps) {
  return (
    <div className="fundo">
    <img className='image-fundo' src="/image/fundo.png" />
    <div className='full-price'>

    <p className='info-price'>Assine conteudos de homem-aranha por apenas</p>
    <p className='price'>${product.amount} Mensal</p>

    </div>
    <Card />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
 const price = await stripe.prices.retrieve('price_1KHHWdDgokLkZL0olJftpOI6') 

const  product = {
   priceId: price.id, 
   amount: price.unit_amount / 100,
}; 

  return {
    props:{
     product,
    } 
  }
}