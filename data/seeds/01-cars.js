// STRETCH
const cars=[
    {
        vin:'1234445435435',
        make:'Hondai',
        mileage:130000,
        model:"CAR",
        title:'clean',
        transmission:'auto'
    },
    {
        vin:'1234445435005',
        make:'Hondai',
        mileage:130000,
        model:"CAR",
        title:'clean',
        transmission:'auto'
    },
    {
        vin:'12344544989435',
        make:'Hondai',
        mileage:130000,
        model:"CAR",

    }
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
