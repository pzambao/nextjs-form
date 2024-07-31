import Head from "next/head";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { TextField } from "@/components/commons/form/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { CepApi } from "@/api/CepApi";

interface CepValues {
  cep: string;
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
  number: string;
  complement: string;
}

/**
 * Cenário ideal
 *
 * Aqui dividimos responsabilidades
 * As regras de aplicação ficarão em um outro componente =D
 */
// const SearchCep = () => {
//   return (
//     <AuthProvider>
//       <AdminProvider>
//         <Layout>
//           <SearchCepPresentation />
//         </Layout>
//       </AdminProvider>
//     </AuthProvider>
//   )
// }

/**
 *
 * React query - Nok
 * Axios = Ok
 * react-hook-form - Ok
 * Zod - Nok
 */
const SearchCep = () => {
  const form = useForm<CepValues>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const cepValue = watch("cep");

  /**
   * React-query example
   */
  // const {data} = useQuery(['KEY', cepValue], () => CepApi.getAddressByCep(cepValue))

  const fetchCepData = useCallback(
    async (cep: string) => {
      try {
        // const response = await axios.get(
        //   `https://viacep.com.br/ws/${cep}/json/`
        // );
        const address = await CepApi.getAddressByCep(cep);
        setValue("uf", address.uf);
        setValue("localidade", address.localidade);
        setValue("bairro", address.bairro);
        setValue("logradouro", address.logradouro);
      } catch (error) {
        console.log("Erro ao buscar o CEP:", error);
      }
    },
    [setValue]
  );

  /**
   * useEffect
   * useCallback
   * useMemo
   *
   * Hooks acima utilizam deps
   */
  useEffect(() => {
    if (cepValue?.length === 8) {
      fetchCepData(cepValue);
    }
  }, [cepValue, fetchCepData]);

  const onSubmit: SubmitHandler<CepValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Buscar CEP | NextJS Form</title>
      </Head>
      <main className="flex items-center justify-center p-8">
        <FormProvider {...form}>
          <form
            className="h-120 w-128 p-8 bg-gray-900 text-white rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6">
              <TextField name="cep" label="CEP" />
              {/* <label
                htmlFor="cep"
                className="block text-sm font-medium text-left mb-1"
              >
                CEP
              </label>
              <input
                type="text"
                {...register("cep", {
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                })}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              />
              {errors.cep && (
                <span>CEP é obrigatório e deve ter 8 caracteres</span>
              )} */}
            </div>

            <div className="mb-6">
              <TextField name="uf" label="Estado" />
              {/* <label
                htmlFor="uf"
                className="block text-sm font-medium text-left mb-1"
              >
                Estado
              </label>
              <input
                type="text"
                {...register("uf", { required: true })}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              />
              {errors.uf && <span>Estado é obrigatório</span>} */}
            </div>

            <div className="mb-6">
              <TextField name="localidade" label="Cidade" />
              {/* <label
                htmlFor="localidade"
                className="block text-sm font-medium text-left mb-1"
              >
                Cidade
              </label>
              <input
                type="text"
                {...register("localidade", { required: true })}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              />
              {errors.localidade && <span>Cidade é obrigatória</span>} */}
            </div>

            <div className="mb-6">
              <TextField name="bairro" label="Bairro" />
              {/* <label
                htmlFor="bairro"
                className="block text-sm font-medium text-left mb-1"
              >
                Bairro
              </label>
              <input
                type="text"
                {...register("bairro", { required: true })}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              />
              {errors.bairro && <span>Bairro é obrigatório</span>} */}
            </div>

            <div className="mb-6">
              <TextField name="logradouro" label="Rua" />
              {/* <label
                htmlFor="logradouro"
                className="block text-sm font-medium text-left mb-1"
              >
                Rua
              </label>
              <input
                type="text"
                {...register("logradouro", { required: true })}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              />
              {errors.logradouro && <span>Rua é obrigatória</span>} */}
            </div>

            <div className="mb-6">
              <TextField name="number" label="Número" />
              {/* <label
                htmlFor="number"
                className="block text-sm font-medium text-left mb-1"
              >
                Número
              </label>
              <input
                type="text"
                {...register("number", { required: true })}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              />
              {errors.number && <span>Número é obrigatório</span>} */}
            </div>

            <div className="mb-6">
              <TextField name="complement" label="Complemento" />
              {/* <label
                htmlFor="complement"
                className="block text-sm font-medium text-left mb-1"
              >
                Complemento
              </label>
              <input
                type="text"
                {...register("complement")}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
              /> */}
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-white text-black p-1 border-b rounded-sm"
              >
                Enviar
              </button>
            </div>
          </form>
        </FormProvider>
      </main>
    </>
  );
};

export default SearchCep;
