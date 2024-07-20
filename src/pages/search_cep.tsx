import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';

interface CepValues {
  cep: string;
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
  number: string;
  complement: string;
}

const SearchCep = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CepValues>();
  const cepValue = watch('cep');

  const fetchCepData = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setValue('uf', data.uf);
      setValue('localidade', data.localidade);
      setValue('bairro', data.bairro);
      setValue('logradouro', data.logradouro);
    } catch (error) {
      console.log('Erro ao buscar o CEP:', error);
    }
  };

  useEffect(() => {
    if (cepValue?.length === 8) {
      fetchCepData(cepValue);
    }
  }, [cepValue]);

  const onSubmit: SubmitHandler<CepValues> = data => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Buscar CEP | NextJS Form</title>
      </Head>
      <main className='flex items-center justify-center p-8'>
        <form className='h-120 w-128 p-8 bg-gray-900 text-white rounded-lg' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
            <label htmlFor='cep' className='block text-sm font-medium text-left mb-1'>CEP</label>
            <input 
              type='text' 
              {...register('cep', { required: true, minLength: 8, maxLength: 8 })} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' 
            />
            {errors.cep && <span>CEP é obrigatório e deve ter 8 caracteres</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor='uf' className='block text-sm font-medium text-left mb-1'>Estado</label>
            <input 
              type='text' 
              {...register('uf', { required: true })} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' 
            />
            {errors.uf && <span>Estado é obrigatório</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor='localidade' className='block text-sm font-medium text-left mb-1'>Cidade</label>
            <input 
              type='text' 
              {...register('localidade', { required: true })} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' 
            />
            {errors.localidade && <span>Cidade é obrigatória</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor='bairro' className='block text-sm font-medium text-left mb-1'>Bairro</label>
            <input 
              type='text' 
              {...register('bairro', { required: true })} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' 
            />
            {errors.bairro && <span>Bairro é obrigatório</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor='logradouro' className='block text-sm font-medium text-left mb-1'>Rua</label>
            <input 
              type='text' 
              {...register('logradouro', { required: true })} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' 
            />
            {errors.logradouro && <span>Rua é obrigatória</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor='number' className='block text-sm font-medium text-left mb-1'>Número</label>
            <input 
              type='text' 
              {...register('number', { required: true })} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white'
            />
            {errors.number && <span>Número é obrigatório</span>}
          </div>

          <div className='mb-6'>
            <label htmlFor='complement' className='block text-sm font-medium text-left mb-1'>Complemento</label>
            <input 
              type='text' 
              {...register('complement')} 
              className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' 
            />
          </div>

          <div className='text-right'>
            <button type='submit' className='bg-white text-black p-1 border-b rounded-sm'>Enviar</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default SearchCep;