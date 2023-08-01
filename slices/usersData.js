import { createSlice } from '@reduxjs/toolkit';
export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    value: 'names',
    postagens:[
      {   
          userName:"Maicon alves",
          userBio:"Software engineer",
          userPic:'https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.2.1443606447.1679693088&semt=sph',
          title:'Recrutamento.',
          content:'Estamos em busca de programadores web talentosos para se juntarem à nossa equipe.'
      },
      {
          userName:"Leonardo Marcondeli",
          userBio:"Frontend developer",
          userPic:'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1443606447.1679693088&semt=sph',
          title:'Recrutamento.',
          content:'Testes sendo realizados'
      },
      {
        userName:"Vinicius de Morais ",
        userBio:"Java developer",
        userPic:'https://img.freepik.com/fotos-gratis/homem-cacheado-com-sorriso-largo-mostra-dentes-perfeitos-se-diverte-com-uma-conversa-interessante-tem-cabelos-escuros-e-crespos-e-crespos-contra-uma-parede-branca_273609-17092.jpg?size=626&ext=jpg&ga=GA1.2.1443606447.1679693088&semt=sph',
        title:'Alguma vaga Java backend?',
        content:'Olá rede, estou buscando uma vaga backend Java, sou Pleno.'
      }
    ],
    profileData:[
      {
        userName:"Maicon alves",
        userBio:"Software Engineer Intern at 3M",
        userAbout:"Engenherio de Software Sênior na empresa PCDIN, atuando com recrutamento com foco em pessoas (PCDS), no meu dia a dia lido com diverso temas, desde programações, até o recrutamento de novos talentos."
      }
    ]
  },
  reducers: {
    
  }
})
export const { increment, decrement, incrementByAmount } = usersSlice.actions

export default usersSlice.reducer