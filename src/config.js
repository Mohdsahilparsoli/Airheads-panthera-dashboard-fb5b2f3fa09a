const dev={
    API_URL:"https://ticketing.dev/api/"
}

const prod={
    API_URL:"https://pantheraplatform.com/api/"
}
const config=process.env.NODE_ENV==='development'?dev:prod
export default  config
