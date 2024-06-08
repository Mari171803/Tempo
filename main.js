
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

                const condicoescontainer = document.querySelector('.condicoes')
                const localatualcontainer = document.querySelector('.local-atual')

                console.log(res.location.name) //lugar
                console.log(res.location.region) //estado
                console.log(res.current.condition.text) //condição
                console.log(res.current.temp_c) //temperatura celsius
                console.log(res.current.feelslike_c) //sensação térmica celsius
                console.log(res.current.humidity) //humidade
                console.log(res.current.wind_kph) //ventos em km por hora

                const icone = document.createElement('img')
                const condicao = document.createElement('p')
                const cidade = document.createElement('p')
                const temp = document.createElement('p')
                const senstermica = document.createElement('p')
                const velocvento = document.createElement('p')

                condicao.innerHTML = res.current.condition.text
                icone.setAttribute('src', 'https:'+res.current.condition.icon)
                temp.innerHTML = res.current.temp_c
                cidade.innerHTML = res.location.name
                senstermica.innerHTML = res.current.feelslike_c
                velocvento.innerHTML = res.current.wind_kph + " km/h"

                temp.classList.add('temperatura')
                cidade.className = 'cidade'
                
                condicoescontainer.appendChild(icone)
                condicoescontainer.appendChild(condicao)
                condicoescontainer.appendChild(temp)

                localatualcontainer.appendChild(senstermica)
                localatualcontainer.appendChild(velocvento)
                localatualcontainer.appendChild(cidade)
                
            }
            getWeather()
        })
        document.querySelector('.load').className = 'hideLoad'
    }
    getNavigator()
})

