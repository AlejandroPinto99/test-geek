const Question = ({id, title, a, b, c}) => {

    return(
        <div className="mx-5 p-2 my-5 border-2 border-blue-700 rounded-lg hover:bg-blue-200">
                <p className="font-bold text-blue-700 mr-2">Question {id}: </p>
                <p className="font-bold">{title}</p>

            <div>
                <input type="radio" id="a" name={`question ${id}`} value="5" />
                <label htmlFor="a" className="ml-2">{a}</label>
            </div>

            <div>
                <input type="radio" id="b" name={`question ${id}`} value="3" />
                <label htmlFor="b" className="ml-2">{b}</label>
            </div>

            <div>
                <input type="radio" id="c" name={`question ${id}`} value="1" />
                <label htmlFor="c" className="ml-2">{c}</label>
            </div>
        </div>
    )
}
export default Question