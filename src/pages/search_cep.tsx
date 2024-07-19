import Head from "next/head"

const SearchCep = () => {
  return (
    <>
      <Head>
        <title>Buscar CEP | NextJS Form</title>
      </Head>
      <main className='flex items-center justify-center p-8'>
        <form className="h-120 w-128 p-8 bg-gray-900 text-white rounded-lg">
          <div className='mb-6'>
            <label htmlFor='cep' className='block text-sm font-medium text-left mb-1'>CEP</label>
            <input type='text' id='cep' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='uf' className='block text-sm font-medium text-left mb-1'>Estado</label>
            <input type='text' id='uf' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='city' className='block text-sm font-medium text-left mb-1'>Cidade</label>
            <input type='text' id='city' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='district' className='block text-sm font-medium text-left mb-1'>Bairro</label>
            <input type='text' id='district' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='street' className='block text-sm font-medium text-left mb-1'>Rua</label>
            <input type='text' id='street' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='number' className='block text-sm font-medium text-left mb-1'>Número</label>
            <input type='text' id='number' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>

          <div className='mb-6'>
            <label htmlFor='complement' className='block text-sm font-medium text-left mb-1'>Complemento</label>
            <input type='text' id='complement' className='w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white' />
          </div>
        </form>
      </main>
    </>
  )
}

export default SearchCep;