import Question from './Question'

import {useState} from 'react'

const questions = [
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


const Test = () => {

    const [end, setEnd] = useState(false);
    const [geek, setGeek] = useState("")

    var Finalscore = 0;

    const DefineGeek = () => {
        console.log(Finalscore)

        if(Finalscore === 30) 
            setGeek("Super Geek");
        if(Finalscore < 30 && Finalscore >= 20)
            setGeek("Geek");
        if(Finalscore < 20 && Finalscore >= 10)
            setGeek("Semi-Geek");
        if(Finalscore < 10)
            setGeek("Pas Geek")

        setEnd(true);
    }

    const score = () => {
        for(let j = 0; j < questions.length; j++) {
            var questionx = document.getElementsByName(`question ${j + 1}`);
            console.log(questionx);
            for(let i = 0; i < questionx.length; i++) {
                if(questionx[i].checked === true){
                    Finalscore += parseInt(questionx[i].value);
                }
            }
        }

        DefineGeek();
    }

    const Restart = () => {
        for(let j = 0; j < questions.length; j++) {
            var questionx = document.getElementsByName(`question ${j + 1}`);
            console.log(questionx);
            for(let i = 0; i < questionx.length; i++) {
                questionx[i].checked = false;
            }
        }

        Finalscore = 0;
        setGeek("");
        setEnd("");
    }

    return(
        <div>
            {
                questions.map((question, i) => {
                    return(
                        <Question key={i} id={question.id} title={question.question} a={question.a}
                        b={question.b} c={question.c}/>
                    )
                })
            }

            <div className="flex flex-row justify-between">
                <button className="ml-5 bg-blue-500 px-5 py-3 text-2xl mb-10 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                onClick={score}>
                    Résultats
                </button>
                {
                    end === true ? 
                    (
                        <div>
                            <p className="mr-10 text-3xl">
                                <span className="mr-5">Vous êtes: </span> 
                                <span className="font-bold">{geek}!</span>
                            </p>
                            <button className="m-2 p-2 bg-green-400 rounded-lg hover:bg-green-700 cursor-pointer"
                            onClick={Restart}>
                                Réessayer
                            </button>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Test;