function Developer({ name, age, country }){

    return(
        <div>
            <span>
                <h2>Dev:  {name}</h2>
                <h3>Idade: {age}</h3>
                <h3>País: {country}</h3>
            </span>
        </div>
    )
}

export default Developer;