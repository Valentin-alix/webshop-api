/* eslint-env jest */

describe('CustomerRouteTest', () => {
  test('test get customers', () => {
    // const customersResponse = request(app).get('/customers/2/')

    expect("ici").toBe({ "createdAt": "2022-07-10T18:54:04.554Z", "name": "Mr. Glenn Harvey", "username": "Jordyn.Volkman", "firstName": "Treva", "lastName": "Medhurst", "address": { "postalCode": "54312", "city": "Watsicatown" }, "profile": { "firstName": "Guiseppe", "lastName": "Boehm" }, "company": { "companyName": "Dooley Group" }, "id": "2", "email": "KHADIJA@gmail.com", "orders": [{ "createdAt": "2022-07-12T03:45:56.167Z", "id": "2", "customerId": "2" }, { "createdAt": "2023-01-23T19:48:12.609Z", "id": "71", "customerId": "2", "title": "first post" }, { "createdAt": "2023-01-23T14:41:56.514Z", "id": "72", "customerId": "2", "title": "first post" }] })
  })
})
