import React, { useEffect, useState } from 'react'

const username = process.env.REACT_APP_GITHUB_USER
const API = `https://api.github.com/users/${username}/repos`;



const getGithubRepo = () => {

    // const [repositories, setRepositories] = useState([])
    // useEffect(() => {
    //     fetch(API)
    //         .then(response => response.json())
    //         .then(data => setRepositories(data))
    // }, [])
    
    return (
        <div>getGithubRepo</div>
    )
}
