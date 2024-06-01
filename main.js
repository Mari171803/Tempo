
//opção 1

/*
const getweather = () =>{
    fetch("https://api.weatherapi.com/v1/current.json?key=6b97fe193a374eb09d6121028240106&q=Joao-Pessoa")
    .then((response)=>{
       return response.json()
    })
    .then((response)=>console.log(response))
}
*/

window.addEventListener('load', () => {
    const getNavigator = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            console.log(latitude + '-' + longitude)

            const getWeather = async () => {
                const getData = await fetch(`https://api.weatherapi.com/v1/current.json?key=6b97fe193a374eb09d6121028240106&q=${latitude},${longitude}&lang=pt`)

                const res = await getData.json()

                console.log(res.location.name) //lugar
                console.log(res.location.region) //estado
                console.log(res.current.condition.text) //condição
                console.log(res.current.temp_c) //temperatura celsius
                console.log(res.current.feelslike_c) //sensação térmica celsius
                console.log(res.current.humidity) //humidade
                console.log(res.current.wind_kph) //ventos em km por hora

                const condicao = document.createElement('p')

                condicao.innerHTML = res.current.condition.text
                document.querySelector('.dados').appendChild(condicao)

                condicao.innerHTML = res.current.temp_c
                document.querySelector('.dados').appendChild(condicao)

                condicao.innerHTML = res.current.feelslike_c
                document.querySelector('.dados').appendChild(condicao)

                condicao.innerHTML = res.current.humidity
                document.querySelector('.dados').appendChild(condicao)

                condicao.innerHTML = res.current.wind_kph
                document.querySelector('.dados').appendChild(condicao)

            }
            getWeather()
        })
    }
    getNavigator()
})

