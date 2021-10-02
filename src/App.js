import Test from './Components/Test'
import Footer from './Components/Footer'

import {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState("Geek");
  const [test, setTest] = useState();

  
const Ale = [
  {
      "id": "1",
      "question" : "Si un astronaute te demande un objet aléatoire pour prendre dans l'espace, Que lui vous donnez? ",
      "a": "Sabre laser",
      "b": "Ton téléphone",
      "c": "De la nourriture"
  },
  {   
      "id": "2",
      "question" : "Vous ami te dit qu'il veut acheter un nouveau téléphone, quele téléphone vous lui recommander ? ",
      "a": "Un Iphone",
      "b": "Un Samsung",
      "c": "N'importe lequel"
  },
  {   
      "id": "3",
      "question" : "Vous devez proposer un activité à tes amis  pour une reunion avec leur, que vous leur proposez?",
      "a": "Un jeu de rôle",
      "b": "Jeux de video",
      "c": "Futbol ou autre sport d'equipe"
  },
  {   
      "id": "4",
      "question" : "Vous êtes dans une catastrophe naturelle avec quelq'un, quelles indications luis donnez-vous ?",
      "a": "Vous ne lui donne pas indications, vous êtes très occupé en train de tweet le catastrophe",
      "b": "Rester calme, et protège ton téléphone!",
      "c": "Trouve une issue de secours!"
  },
  {   
      "id": "5",
      "question" : "Vous voulez inviter une fille ou un garçon à boire quelque chose, où lui invitez-vous?",
      "a": "à Starbucks ",
      "b": "au parc et manger de la glace",
      "c": "à un bar"
  },
  {   
      "id": "6",
      "question" : "Vous gagnez un voyage avec ta famille, mais vous devez choisir tout de suite le pays où vous allez aller. Vous arrivez à chez-vous, et leur dit que vous avez choisi...?",
      "a": "Japon",
      "b": "Spagne",
      "c": "Hawaii"
  },
]

const Ceci = [
  {
      "id": "1",
      "question" : "1.	Vous allez à une fête avec une enveloppe cadeau? ",
      "c": "Vous ne le portez pas",
      "b": "Tu le portes mais tu mets le minimum",
      "a": "Tu le portes et c'est assez."
  },
  {   
      "id": "2",
      "question" : "Vous entrez dans une pièce et il y a des gens familiers. ? ",
      "c" :	"Vous ne les saluez pas et faites ce que vous aviez à faire.",
      "b" :	"Vous leur donnez un salut général",
      "a" :	 "Vous vous dirigez vers eux et les saluez personnellement"

  },
  {   
      "id": "3",
      "question" : "Il y a une personne endormie?",
      "c": "Tu ne fais pas attention et tu continues de parler.",
      "b": "Tu la vois et tu baisses le ton de la voix",
      "a": "Tu la vois et tu te retires"
  },
  {   
      "id": "4",
      "question" : "Ils t'ont fait un cadeau que tu n'aimes pas?",
      "c": "Vous l'acceptez et l'appréciez",
      "b": "Vous l'acceptez",
      "a": "Vous ne l'acceptez pas"
  },
]

const Gaby = [
  {
      "id": "1",
      "question" : "Vous voyez qu'il y a une file de 5 personnes au supermarché? ",
      "a": "Vous les poussez à vous laisser partir en premier",
      "b": "Tu attends ton tour",
      "c": "Tu te fâches et tu t'en vas"
  },
  {   
      "id": "2",
      "question" : "Votre patron vous demande de faire des heures supplémentaires? ",
      "c" :	"Tu lui crie dessus et tu quittes ton travail",
      "b" :	"Tu le fais avec plaisir / Vous expliquez pourquoi vous ne pouvez pas",
      "a" :	" Tu t'énerves mais tu le fais quand même"

  },
  {   
      "id": "3",
      "question" : "Votre ami veut sortir mais vous avez beaucoup de travail à faire?",
      "c": "Tu t'énerves de la quantité de travail que tu as à faire",
      "b": "Tu lui dis non, mais peut-être la prochaine fois.",
      "a": "Tu sors quand même"
  },
  {   
      "id": "4",
      "question" : "Vous renversez du café sur votre travail?",
      "c": "Tu renonces à le faire, t'énerve et pleure",
      "b": "Vous réparez tout de suite ou recommencez",
      "a": "Vous êtes frustré mais essayez de le réparer"
  },
]

const Elsy = [
  {
      "id": "1",
      "question" : "Vos amis vous invitent à une fête, vous allez vous amuser? ",
      "a": "Je la vais ",
      "b": "Je ne le vais pas ",
      "c": "Je vais à l’église"
  },
  {   
      "id": "2",
      "question" : "Il y a un nouvel album de Coldplay, vous l’écoutez et vous le dites à vos amis? ",
      "b" :	"Tu t’achètes autre chose",
      "c" :	"Tu ne l’achètes pas",
      "a" :	"Tu l’achètes"

  },
  {   
      "id": "3",
      "question" : "Il y a un nouveau film et vous décidez d’inviter une fille. Elle accepte?",
      "b": "Je vais avec mes amis",
      "c": "Je ne l’invite pas",
      "a": "Je l’invite"
  },
  {   
      "id": "4",
      "question" : "La foire est la semaine suivante. Tu invites ton frère.",
      "a": "Tu vas avec ta copine",
      "b": "Vous allez seul",
      "c": "Tu vas avec ton frère"
  },
  {   
    "id": "5",
    "question" : "Vous planifiez un voyage à Cancun et rencontrez de nouvelles personnes.",
    "a": "Je ne le planifie pas",
    "b": "Je le planifie",
    "c": "Je suis dans mon pays"
},
{   
  "id": "6",
  "question" : "Vous planifiez un voyage à Cancun et rencontrez de nouvelles personnes.",
  "a": "Je l’organise",
  "b": "Je lui achète un cadeau",
  "c": "Je ne l’organise pas"
},
]

const Ari = [
  {
      "id": "1",
      "question" : "Quand vous avez un avis? ",
      "a": "Vous exprimez votre point de vue tout en écoutant celui de quelqu'un d'autre. ",
      "b": "Vous l'imposez aux autres sans les écouter.",
      "c": "Tu écoutes les autres, mais tu fais prévaloir le tien"
  },
  {   
      "id": "2",
      "question" : "Quand quelqu'un vous dit comment il voit les choses: ",
      "a" :	"Vous lui demandez ce qu'il ressent et comment il pense qu'il est préférable d'agir.",
      "b" :	" Vous lui dites comment ressentir, percevoir et comment agir",
      "c" :	"Vous suggérez ce qu'il doit ressentir, percevoir et comment agir."

  },
  {   
      "id": "3",
      "question" : "Dans les cas où l'information est ambiguë:",
      "a": " Des questions pour le clarifier pour vous et les autres",
      "b": " Vous avez tendance à le faire comprendre en ma faveur",
      "c": " Vous le transformez de telle manière qu'il vous profite face aux autres"
  },
  {   
      "id": "4",
      "question" : "Un collègue qui ne vous aime pas a fait une erreur:",
      "a": "Vous oubliez ce qui s'est passé et si vous pouvez l'aider.",
      "b": "Vous restez indifférent, vous ne l'aidez pas",
      "c": "Tu profites des autres pour te moquer de lui"
  },
  {   
    "id": "5",
    "question" : "Quand quelqu'un refuse de faire ce que vous voulez:",
    "a": "Ça me dérange, mais c'est son droit",
    "b": " Vous faites la moue ou le menacez avec quelque chose qui fait mal",
    "c": "Vous exprimez votre désapprobation."
},
{   
  "id": "6",
  "question" : "Si quelqu'un vous dit des informations secrètes :",
  "a": " Tu le remercies pour le geste et tu ne le compte pas",
  "b": "Parfois, vous pensez à l'utiliser, mais vous ne le faites presque jamais",
  "c": "Vous le gardez pour en profiter quand cela vous intéresse"
},
]

  
  const changeTest = (name) => {
      switch(name){
        case 'Gaby':
          setTitle("Stress");
          setTest(Gaby)
          break;
        case 'Ari':
          setTitle("Manipulation");
          setTest(Ari);
          break;
        case 'Ale':
          setTitle("Geek");
          setTest(Ale);
          break;
        case 'Ceci':
          setTitle("Politesse");
          setTest(Ceci)
          break;
        case 'Elsy':
          setTitle("Cool");
          setTest(Elsy)
          break;
        default: 
          setTitle("");

      }
  }

  console.log(test)

  return (
    <div className="">
      <h1 className="text-center font-bold p-5 bg-blue-400 shadow-lg text-4xl">Test pour verifier ton niveau du {title} </h1>
      <p className="text-2xl font-bold ml-5 mt-2">Repondez!:</p>
      <div>
        
          <div className="flex flex-row justify-around ">
                <button className="p-2 px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Gaby")}> Gaby </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl" 
                onClick={() => changeTest("Elsy")}> Elsy </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Ceci")}> Ceci </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Ari")}> Ari </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Ale")}
                > Ale </button>
          </div>
          {
            test ? (    <Test questions={test} title={title} reset={reset}/>) : null
          }
        <Footer />
      </div>
    </div>
  );
}

export default App;
