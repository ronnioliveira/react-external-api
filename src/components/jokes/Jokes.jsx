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
            <table>
                <tr>
                    <td className='alignLeft'>
                        <div>
                            <input type="button" id="jokes" onClick={() => getRandomJokes()} value="Get a Joke" />
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>
                                Joke Number: {jokes.id}
                            </p>
                            <p>
                                Question: {jokes.setup}
                            </p>
                            <p>
                                Answer: {jokes.punchline}
                            </p>
                        </div>
                    </td>
                </tr>
            </table>


        </div>

    )
}
