import React, { useEffect, useState } from 'react'
import './Jokes.css'

export default function Jokes() {
    const [jokes, setJokes] = useState({});

    useEffect(() => {
        getRandomJokes()
    }, [])

    const getRandomJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(resp => resp.json())
            .then(json => setJokes(json))
    }

    return (
        <div className='container'>
            <h3>Using javascript fetch</h3>
            <div>
                <input type="button" id="jokes" onClick={() => getRandomJokes()} value="Get a Joke" />
            </div>
            <ul>
                <li>
                    <p>
                        Joke Number: {jokes.id}
                    </p>
                    <p>
                        Question: {jokes.setup}
                    </p>
                    <p>
                        Answer: {jokes.punchline}
                    </p>
                </li>
            </ul>     
        </div>

    )
}
