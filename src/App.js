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
  
  const changeTest = (name) => {
      switch(name){
        case 'Gaby':
          setTitle("Gaby");
          break;
        case 'Ari':
          setTitle("Gaby");
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
          setTitle("Gaby");
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
                onClick={() => changeTest("Ceci")}> Elsy </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Ceci")}> Ceci </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Ari")}> Ari </button>
                <button className="p-2  px-5 bg-blue-400 hover:bg-blue-500 rounded-2xl"
                onClick={() => changeTest("Ale")}
                > Ale </button>
          </div>
          {
            test ? (    <Test questions={test} title={title}/>) : null
          }
        <Footer />
      </div>
    </div>
  );
}

export default App;
