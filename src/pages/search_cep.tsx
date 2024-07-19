import Head from "next/head"
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

const SearchCep = () => {
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [localidade, setCity] = useState('');
  const [bairro, setDistrict] = useState('');
  const [logradouro, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const fetchCepData = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setUf(data.uf);
      setCity(data.localidade);
      setDistrict(data.bairro);
      setStreet(data.logradouro);
    } catch (error) {
      console.log('Erro ao buscar o CEP:', error);
    }
  };

  useEffect(() => {
    if (cep.length === 8) {
      fetchCepData(cep);
    }
  }, [cep]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      cep,
      uf,
      localidade,
      bairro,
      number,
      complement
    }

    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Buscar CEP | NextJS Form</title>
      </Head>
      <main className='flex items-center justify-center p-8'>
        <form className='h-120 w-128 p-8 bg-gray-900 text-white rounded-lg' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='cep' className='block text-sm font-medium text-left mb-1'>CEP</label>
            <input type='text' name='cep' onChange={(e) => setCep(e.target.value)} className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='uf' className='block text-sm font-medium text-left mb-1'>Estado</label>
            <input type='text' value={uf} name='uf' onChange={(e) => setUf(e.target.value)} className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='localidade' className='block text-sm font-medium text-left mb-1'>Cidade</label>
            <input type='text' value={localidade} name='localidade' onChange={(e) => setCity(e.target.value)} className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='bairro' className='block text-sm font-medium text-left mb-1'>Bairro</label>
            <input type='text' value={bairro} name='bairro' onChange={(e) => setDistrict(e.target.value)} className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='logradouro' className='block text-sm font-medium text-left mb-1'>Rua</label>
            <input type='text' value={logradouro} name='logradouro' onChange={(e) => setStreet(e.target.value)} className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='number' className='block text-sm font-medium text-left mb-1'>Número</label>
            <input type='text' name='number' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='complement' className='block text-sm font-medium text-left mb-1'>Complemento</label>
            <input type='text' name='complement' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='text-right'>
            <button type='submit' className='bg-white text-black p-1 border-b rounded-sm'>Enviar</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default SearchCep;