import React, {useState} from 'react'

const SearchBar = ({onSubmitTerm}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onInputChange = e  => {
        setSearchTerm(e.target.value)
    }
    
    const onFormSubmit = e => {
        e.preventDefault();
        onSubmitTerm(searchTerm)
    }

    return (
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Search" className="form-control" onChange={onInputChange}
                value={searchTerm}
                />
            </form>
    )
}

export default SearchBar
