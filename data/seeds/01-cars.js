// STRETCH
const cars=[
    {
        vin:'19XFB2F81CE096861',
        make:'Hondai',
        mileage:130000,
        model:"CAR",
        title:'clean',
        transmission:'auto'
    },
    {
        vin:'3GNEK12Z55G103040',
        make:'Hondai',
        mileage:130000,
        model:"CAR",
        title:'clean',
        transmission:'auto'
    },
    {
        vin:'5NPET4AC3AH573198',
        make:'Hondai',
        mileage:130000,
        model:"CAR",
    }
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
