import React from 'react'

import { Cards, PilihNegara } from './components'
import styles from './App.module.css'
import { fetchData, fetchFirstCountry } from './api'


class App extends React.Component {
    state = {
        data: {

        },
        dataCountry: {

        },
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
        const firstCountry = await fetchFirstCountry()
        const firstData = await fetchData(firstCountry)
        this.setState({ dataCountry: firstData, country: firstCountry })

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ dataCountry: fetchedData, country: country })
    }

      
    render() {
        return (
            <div className={styles.container}>
                <center><h1>COVID-19 TRACKER</h1>
                <h4 style={{color: 'blue'}}><u><i>#StayHome</i></u> & <u><i>#StopTheSpread</i></u></h4></center>
                <Cards data={this.state.data} />
                <center><PilihNegara handleCountryChange={this.handleCountryChange} /></center>
                <Cards data={this.state.dataCountry} country={this.state.country} />
            </div>
        )
    }
}

export default App