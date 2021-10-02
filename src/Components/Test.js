import Question from './Question'

import {useState} from 'react'



const Test = ({questions, title}) => {
    const [end, setEnd] = useState(false);
    const [geek, setGeek] = useState("")

    var Finalscore = 0;

    const DefineGeek = () => {
        console.log(Finalscore)
        if(title === "Geek") {
                if(Finalscore === 30) 
                setGeek("Super Geek");
            if(Finalscore < 30 && Finalscore >= 20)
                setGeek("Geek");
            if(Finalscore < 20 && Finalscore >= 10)
                setGeek("Semi-Geek");
            if(Finalscore < 10)
                setGeek("Pas Geek")
        }

        if(title === "Politesse") {
            if(Finalscore === 30) 
            setGeek("Super Poli");
        if(Finalscore < 30 && Finalscore >= 20)
            setGeek("Tu es poli");
        if(Finalscore < 20 && Finalscore >= 10)
            setGeek("Semi-Poli");
        if(Finalscore < 10)
            setGeek("Vous n'êtes pas poli")
    }

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